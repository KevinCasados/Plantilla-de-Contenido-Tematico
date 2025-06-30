import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  getUnitData,
  findThemeById,
  flattenThemes,
} from '../../data/contentData';

import Sidebar from '../Sidebar/Sidebar';
import ContentArea from '../ContentArea/ContentArea';

import {
  UnitPageContainer,
  MainContentLayout,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
} from './UnitPage.styles';

function UnitPage() {
  const { unitId } = useParams();

  const [unit, setUnit]                 = useState(null);
  const [currentThemeId, setCurrentThemeId] = useState(null);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [transitionClass, setTransitionClass] = useState('');
  const [expandedThemes, setExpandedThemes]   = useState({});

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

    const themeStillValid = currentThemeId
      ? findThemeById(data.themes, currentThemeId)
      : false;

    const initialThemeId = themeStillValid
      ? currentThemeId
      : findThemeById(data.themes, `${unitId}.info`)
      ? `${unitId}.info`
      : data.themes[0]?.id;

    if (initialThemeId !== currentThemeId) setCurrentThemeId(initialThemeId);

    setLoading(false);
  }, [unitId, currentThemeId]);

  /* ------------------------------------------------------------------
     2) Sincronizar árbol expandido en función del tema activo
  ------------------------------------------------------------------ */
  useEffect(() => {
    if (!unit || !currentThemeId) return;

    setExpandedThemes((prev) => {
      const newState = { ...prev };

      const expandParents = (themes, targetId) => {
        for (const theme of themes) {
          if (theme.id === targetId) {
            newState[theme.id] = true;
            return true;
          }
          if (
            theme.subthemes?.length &&
            expandParents(theme.subthemes, targetId)
          ) {
            newState[theme.id] = true;
            return true;
          }
        }
        return false;
      };

      expandParents(unit.themes, currentThemeId);
      return newState;
    });
  }, [currentThemeId, unit]);

  /* ------------------------------------------------------------------
     3) Navegación entre temas lineales
  ------------------------------------------------------------------ */
  const allThemesFlat = unit ? flattenThemes(unit.themes) : [];
  const currentIndex  = allThemesFlat.findIndex((t) => t.id === currentThemeId);
  const hasPrev       = currentIndex > 0;
  const hasNext       = currentIndex < allThemesFlat.length - 1;

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
  if (loading) return <LoadingMessage>Cargando unidad…</LoadingMessage>;
  if (error)   return <ErrorMessage>{error}</ErrorMessage>;
  if (!unit)   return <EmptyMessage>Selecciona una unidad para empezar.</EmptyMessage>;

  const currentTheme = findThemeById(unit.themes, currentThemeId);

  return (
    <UnitPageContainer>
      <MainContentLayout>
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
      </MainContentLayout>
    </UnitPageContainer>
  );
}

export default UnitPage;