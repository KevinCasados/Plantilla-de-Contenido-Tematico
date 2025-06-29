import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUnitData, findThemeById, flattenThemes } from '../data/contentData';
import Header from './Header'; // Importa el nuevo Header
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import './UnitPage.css'; // CSS para el layout de la página de unidad

function UnitPage() {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [unit, setUnit] = useState(null);
  const [currentThemeId, setCurrentThemeId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [transitionClass, setTransitionClass] = useState('');
  const [expandedThemes, setExpandedThemes] = useState({}); // State for expanded themes

  useEffect(() => {
    setLoading(true);
    setError(null);
    const data = getUnitData(unitId);
    if (data) {
      setUnit(data);
      let initialThemeId = null;
      
      // Si no hay un tema seleccionado o el ID no es válido para esta unidad
      if (!currentThemeId || !findThemeById(data.themes, currentThemeId)) {
        // Por defecto, selecciona el tema 'info' si existe, si no, el primer tema
        if (findThemeById(data.themes, `${unitId}.info`)) {
            initialThemeId = `${unitId}.info`;
        } else if (data.themes && data.themes.length > 0) {
          initialThemeId = data.themes[0].id;
        }
      } else {
        initialThemeId = currentThemeId;
      }
      setCurrentThemeId(initialThemeId);
      setLoading(false);
    } else {
      setError('Unit not found');
      setLoading(false);
    }
  }, [unitId]);

  // Effect to manage expanded themes based on currentThemeId
  useEffect(() => {
    if (unit && currentThemeId) {
      // Create a copy of current expanded themes to modify
      const newExpandedThemesState = { ...expandedThemes }; 
      
      const findParentAndExpand = (themes, targetId) => {
        for (const theme of themes) {
          if (theme.id === targetId) {
            newExpandedThemesState[theme.id] = true; // Ensure the active theme itself is expanded if it's a parent
            return true; 
          }
          if (theme.subthemes && theme.subthemes.length > 0) {
            if (findParentAndExpand(theme.subthemes, targetId)) {
              newExpandedThemesState[theme.id] = true; // Expand parent if subtheme is active
              return true;
            }
          }
        }
        return false;
      };
      
      findParentAndExpand(unit.themes, currentThemeId);
      setExpandedThemes(newExpandedThemesState); // Update the state with merged expansions
    }
  }, [currentThemeId, unit]); // Depend on currentThemeId and unit data

  const allThemesFlat = unit ? flattenThemes(unit.themes) : [];
  const currentThemeFlatIndex = allThemesFlat.findIndex(t => t.id === currentThemeId);
  const hasPrev = currentThemeFlatIndex > 0;
  const hasNext = currentThemeFlatIndex < allThemesFlat.length - 1;

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
      const currentIndex = allThemesFlat.findIndex(t => t.id === currentThemeId);
      let nextIndex = currentIndex;

      if (direction === 'next') {
        nextIndex = Math.min(allThemesFlat.length - 1, currentIndex + 1);
      } else if (direction === 'prev') {
        nextIndex = Math.max(0, currentIndex - 1);
      }
      
      if (allThemesFlat[nextIndex]) {
        setCurrentThemeId(allThemesFlat[nextIndex].id);
      }
      setTransitionClass('');
    }, 300);
  };

  if (loading) {
    return <div className="loading-message">Cargando unidad...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!unit) {
    return <div className="no-unit-message">Selecciona una unidad para empezar.</div>;
  }

  const currentTheme = findThemeById(unit.themes, currentThemeId);

  return (
    <div className="unit-page-container">
      <Header /> {/* Usando el nuevo componente Header */}

      <div className="main-content-layout">
        <Sidebar
          themes={unit.themes}
          currentThemeId={currentThemeId}
          onThemeSelect={handleThemeChange}
          expandedThemes={expandedThemes} // Pass expandedThemes
          setExpandedThemes={setExpandedThemes} // Pass setExpandedThemes for toggling
        />
        <ContentArea
          unit={unit} // Pasa el objeto 'unit' completo
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