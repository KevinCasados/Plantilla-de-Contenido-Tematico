/*  ───────────────────────────────────────────────────────────────
    UnitPage.js  ·  Ruta:
      /programa/:programId/materia/:courseId/modulo/:moduleId
    ─────────────────────────────────────────────────────────────── */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUnitData, findThemeById, flattenThemes } from "../../data/loader";

import Sidebar from "../Sidebar/Sidebar";
import ContentArea from "../ContentArea/ContentArea";

import {
  UnitPageContainer,
  MainContentLayout,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
  Overlay,
} from "./UnitPage.styles";

/* ——— hook interno para media-query ——— */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const m = window.matchMedia(query);
    const listener = () => setMatches(m.matches);
    m.addEventListener("change", listener);
    return () => m.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/* ────────────────── COMPONENTE ────────────────── */
function UnitPage() {
  const { programId, courseId, moduleId } = useParams(); //  <-- nuevos params
  const isMobile = useMediaQuery("(max-width: 1079px)");

  /* ——— UI: estado del sidebar ——— */
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile);
  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  /* escucha evento de la hamburguesa del Header */
  useEffect(() => {
    window.addEventListener("burger-toggle", toggleSidebar);
    return () => window.removeEventListener("burger-toggle", toggleSidebar);
  }, []);

  /* bloquea / libera scroll body cuando panel abierto en móvil */
  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = sidebarCollapsed ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarCollapsed, isMobile]);

  /* fuerza colapso si cambia a escritorio */
  useEffect(() => {
    setSidebarCollapsed(isMobile);
  }, [isMobile]);

  /* ——— DATA: carga del módulo ——— */
  const [unit, setUnit] = useState(null);
  const [currentThemeId, setCurrentThemeId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [transitionClass, setTransitionClass] = useState("");
  const [expandedThemes, setExpandedThemes] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(null);

    const data = getUnitData(programId, courseId, moduleId);
    if (!data) {
      setError("Unit not found");
      setLoading(false);
      return;
    }

    setUnit(data);

    /* ───── 1 · leer del sessionStorage ───── */
    const storageKey = `lastTheme-${moduleId}`;
    const savedId = sessionStorage.getItem(storageKey);

    /* si existe y está dentro de los temas, arranca ahí */
    const initial =
      savedId && findThemeById(data.themes, savedId)
        ? savedId
        : findThemeById(data.themes, `${moduleId}.info`) || data.themes[0].id;

    setCurrentThemeId(initial);
    setLoading(false);
  }, [programId, courseId, moduleId]);

  /* ───── 2 · persistir cada cambio ───── */
  useEffect(() => {
    if (!currentThemeId) return;
    sessionStorage.setItem(`lastTheme-${moduleId}`, currentThemeId);
  }, [currentThemeId, moduleId]);

  /* expande padres del tema activo */
  useEffect(() => {
    if (!unit || !currentThemeId) return;
    setExpandedThemes((prev) => {
      const next = { ...prev };
      const openParents = (list, id) => {
        for (const t of list) {
          if (t.id === id) {
            next[t.id] = true;
            return true;
          }
          if (t.subthemes?.length && openParents(t.subthemes, id)) {
            next[t.id] = true;
            return true;
          }
        }
        return false;
      };
      openParents(unit.themes, currentThemeId);
      return next;
    });
  }, [unit, currentThemeId]);

  /* ——— navegación lineal (prev/next) ——— */
  const flat = unit ? flattenThemes(unit.themes) : [];
  const idx = flat.findIndex((t) => t.id === currentThemeId);
  const hasPrev = idx > 0;
  const hasNext = idx < flat.length - 1;

  const changeTheme = (id) => {
    setTransitionClass("fade-out");
    setTimeout(() => {
      setCurrentThemeId(id);
      setTransitionClass("");
      if (isMobile) setSidebarCollapsed(true);
    }, 300);
  };

  const navigate = (dir) => {
    setTransitionClass("fade-out");
    setTimeout(() => {
      const next =
        dir === "next"
          ? Math.min(flat.length - 1, idx + 1)
          : Math.max(0, idx - 1);
      setCurrentThemeId(flat[next].id);
      setTransitionClass("");
    }, 300);
  };

  /* ——— render ——— */
  if (loading) return <LoadingMessage>Cargando unidad…</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!unit) return <EmptyMessage>Unidad no encontrada.</EmptyMessage>;

  const currentTheme = findThemeById(unit.themes, currentThemeId);

  return (
    <UnitPageContainer>
      {/* overlay semitransparente (móvil) */}
      <Overlay $show={!sidebarCollapsed && isMobile} onClick={toggleSidebar} />

      <MainContentLayout>
        <Sidebar
          themes={unit.themes}
          currentThemeId={currentThemeId}
          onThemeSelect={changeTheme}
          expandedThemes={expandedThemes}
          setExpandedThemes={setExpandedThemes}
          collapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />

        <ContentArea
          unit={unit}
          theme={currentTheme}
          onNavigateTheme={navigate}
          hasPrev={hasPrev}
          hasNext={hasNext}
          transitionClass={transitionClass}
        />
      </MainContentLayout>
    </UnitPageContainer>
  );
}

export default UnitPage;
