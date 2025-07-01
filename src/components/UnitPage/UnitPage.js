import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getUnitData,
  findThemeById,
  flattenThemes,
} from '../../data/contentData';

import Sidebar     from '../Sidebar/Sidebar';
import ContentArea from '../ContentArea/ContentArea';

import {
  UnitPageContainer,
  MainContentLayout,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
  Overlay,
} from './UnitPage.styles';

/* ——— hook para media-query ——— */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  useEffect(() => {
    const m = window.matchMedia(query);
    const handler = () => setMatches(m.matches);
    m.addEventListener('change', handler);
    return () => m.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

function UnitPage() {
  const { unitId }   = useParams();
  const isMobile     = useMediaQuery('(max-width: 1079px)');

  /* —— sidebar —— */
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile);
  const toggleSidebar = () => setSidebarCollapsed((p) => !p);

  /* escuchar evento del Header */
  useEffect(() => {
    window.addEventListener('burger-toggle', toggleSidebar);
    return () => window.removeEventListener('burger-toggle', toggleSidebar);
  }, []);                                           // sólo una vez

  /* bloquear / restaurar scroll body en móvil */
  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = sidebarCollapsed ? 'auto' : 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [sidebarCollapsed, isMobile]);

  /* cerrar automáticamente si pasa a escritorio */
  useEffect(() => { setSidebarCollapsed(isMobile); }, [isMobile]);

  /* ——— datos de la unidad (igual que antes) ——— */
  const [unit, setUnit]                 = useState(null);
  const [currentThemeId, setCurrentThemeId] = useState(null);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [transitionClass, setTransitionClass] = useState('');
  const [expandedThemes, setExpandedThemes]   = useState({});

  useEffect(() => {
    setLoading(true); setError(null);
    const data = getUnitData(unitId);
    if (!data) { setError('Unit not found'); setLoading(false); return; }
    setUnit(data);

    const valid   = currentThemeId &&
                    findThemeById(data.themes, currentThemeId);
    const initial = valid
      ? currentThemeId
      : findThemeById(data.themes, `${unitId}.info`)
      ? `${unitId}.info`
      : data.themes[0]?.id;

    setCurrentThemeId(initial);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unitId]);

  /* abrir padres del tema activo */
  useEffect(() => {
    if (!unit || !currentThemeId) return;
    setExpandedThemes((prev) => {
      const next = { ...prev };
      const open = (list, id) => {
        for (const t of list) {
          if (t.id === id) { next[t.id] = true; return true; }
          if (t.subthemes?.length && open(t.subthemes, id)) {
            next[t.id] = true; return true;
          }
        }
        return false;
      };
      open(unit.themes, currentThemeId);
      return next;
    });
  }, [unit, currentThemeId]);

  /* navegación lineal */
  const flat     = unit ? flattenThemes(unit.themes) : [];
  const idx      = flat.findIndex((t) => t.id === currentThemeId);
  const hasPrev  = idx > 0;
  const hasNext  = idx < flat.length - 1;

  const changeTheme = (id) => {
    setTransitionClass('fade-out');
    setTimeout(() => {
      setCurrentThemeId(id);
      setTransitionClass('');
      if (isMobile) setSidebarCollapsed(true); // cerrar en móvil
    }, 300);
  };

  const navigate = (dir) => {
    setTransitionClass('fade-out');
    setTimeout(() => {
      const next =
        dir === 'next' ? Math.min(flat.length - 1, idx + 1)
                       : Math.max(0, idx - 1);
      setCurrentThemeId(flat[next].id);
      setTransitionClass('');
    }, 300);
  };

  /* ——— render ——— */
  if (loading) return <LoadingMessage>Cargando unidad…</LoadingMessage>;
  if (error)   return <ErrorMessage>{error}</ErrorMessage>;
  if (!unit)   return <EmptyMessage>Selecciona una unidad para empezar.</EmptyMessage>;

  const currentTheme = findThemeById(unit.themes, currentThemeId);

  return (
    <UnitPageContainer>
      {/* overlay semi-transparente en móvil */}
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