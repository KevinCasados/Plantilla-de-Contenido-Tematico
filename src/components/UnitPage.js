import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';          // ← se eliminó useNavigate
import {
  getUnitData,
  findThemeById,
  flattenThemes,
} from '../data/contentData';

import Header from './Header';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import './UnitPage.css';

function UnitPage() {
  const { unitId } = useParams();
  const [unit, setUnit] = useState(null);
  const [currentThemeId, setCurrentThemeId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transitionClass, setTransitionClass] = useState('');
  const [expandedThemes, setExpandedThemes] = useState({});

  /* ------------------------------------------------------------------
     1) Carga de la unidad y selección del tema inicial
  ------------------------------------------------------------------ */
  useEffect(() => {
    setLoading(true);
    setError(null);

    const data = getUnitData(unitId);

    if (!data) {
      setError('Unit not found');
      setLoading(false);
      return;
    }

    setUnit(data);

    /** Determinar el tema inicial (solo si no estaba o no pertenece a
     *  esta unidad).  Así evitamos re-render infinitos.
     */
    const themeStillValid = currentThemeId
      ? findThemeById(data.themes, currentThemeId)
      : false;

    let initialThemeId = themeStillValid
      ? currentThemeId
      : findThemeById(data.themes, `${unitId}.info`)
      ? `${unitId}.info`
      : data.themes[0]?.id;

    if (initialThemeId !== currentThemeId) setCurrentThemeId(initialThemeId);

    setLoading(false);
  }, [unitId, currentThemeId]);        // ← añadida la dependencia que faltaba

  /* ------------------------------------------------------------------
     2) Sincronizar árbol expandido en función del tema activo
  ------------------------------------------------------------------ */
  useEffect(() => {
    if (!unit || !currentThemeId) return;

    setExpandedThemes((prev) => {
      // Copia del estado para modificarla
      const newState = { ...prev };

      const expandParents = (themes, targetId) => {
        for (const theme of themes) {
          if (theme.id === targetId) {
            newState[theme.id] = true;
            return true;
          }
          if (theme.subthemes?.length && expandParents(theme.subthemes, targetId)) {
            newState[theme.id] = true;
            return true;
          }
        }
        return false;
      };

      expandParents(unit.themes, currentThemeId);
      return newState;
    });
  }, [currentThemeId, unit]);          // ← ya no falta 'expandedThemes'

  /* ------------------------------------------------------------------
     3) Navegación entre temas lineales
  ------------------------------------------------------------------ */
  const allThemesFlat = unit ? flattenThemes(unit.themes) : [];
  const currentIndex   = allThemesFlat.findIndex((t) => t.id === currentThemeId);
  const hasPrev        = currentIndex > 0;
  const hasNext        = currentIndex < allThemesFlat.length - 1;

  const handleThemeChange = (themeId) => {
    setTransitionClass('fade-out');
    setTimeout(() => {
      setCurrentThemeId(themeId);
      setTransitionClass('');
    }, 300);
  };

  const handleNavigateTheme = (direction) => {
    setTransitionClass('fade-out');
    setTimeout(() => {
      const nextIndex =
        direction === 'next'
          ? Math.min(allThemesFlat.length - 1, currentIndex + 1)
          : Math.max(0, currentIndex - 1);

      setCurrentThemeId(allThemesFlat[nextIndex].id);
      setTransitionClass('');
    }, 300);
  };

  /* ------------------------------------------------------------------
     Render
  ------------------------------------------------------------------ */
  if (loading) return <div className="loading-message">Cargando unidad...</div>;
  if (error)   return <div className="error-message">{error}</div>;
  if (!unit)   return <div className="no-unit-message">Selecciona una unidad para empezar.</div>;

  const currentTheme = findThemeById(unit.themes, currentThemeId);

  return (
    <div className="unit-page-container">
      <Header />

      <div className="main-content-layout">
        <Sidebar
          themes={unit.themes}
          currentThemeId={currentThemeId}
          onThemeSelect={handleThemeChange}
          expandedThemes={expandedThemes}
          setExpandedThemes={setExpandedThemes}
        />

        <ContentArea
          unit={unit}
          theme={currentTheme}
          onNavigateTheme={handleNavigateTheme}
          hasPrev={hasPrev}
          hasNext={hasNext}
          transitionClass={transitionClass}
        />
      </div>
    </div>
  );
}

export default UnitPage;