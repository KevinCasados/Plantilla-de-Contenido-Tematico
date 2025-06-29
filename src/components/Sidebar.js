import React, { useState, useEffect } from 'react';
import './Sidebar.css'; // CSS para el sidebar

function Sidebar({ themes, currentThemeId, onThemeSelect, expandedThemes, setExpandedThemes }) {
  // The expandedThemes and setExpandedThemes are now entirely controlled by UnitPage.js via props.
  // This component will simply use them as provided.

  const toggleExpand = (themeId) => {
    // This function will now correctly toggle the expansion of a specific theme
    // without affecting others, as expandedThemes is an object.
    setExpandedThemes(prev => ({
      ...prev,
      [themeId]: !prev[themeId]
    }));
  };

  return (
    <aside className="sidebar">
      <h3>Contenido de la Unidad</h3>
      <nav>
        <ul>
          {themes.map(theme => (
            <li key={theme.id} className={theme.id === currentThemeId || (theme.subthemes && theme.subthemes.some(sub => sub.id === currentThemeId)) ? 'active' : ''}>
              <div
                className={`theme-item ${theme.subthemes && theme.subthemes.length > 0 ? 'has-subthemes' : ''}`}
                onClick={() => {
                  if (theme.subthemes && theme.subthemes.length > 0) {
                    toggleExpand(theme.id);
                  }
                  onThemeSelect(theme.id); // También permite seleccionar el tema principal
                }}
              >
                {/* Condicionalmente muestra "Información" para el tema de la unidad */}
                {theme.isUnitInfo ? (
                    <span>{theme.title}</span>
                ) : (
                    <span>{theme.numbering} {theme.title}</span>
                )}
                
                {theme.subthemes && theme.subthemes.length > 0 && (
                  <span className="expand-icon">{expandedThemes[theme.id] ? '▼' : '►'}</span>
                )}
              </div>
              {theme.subthemes && theme.subthemes.length > 0 && expandedThemes[theme.id] && (
                <ul className="subthemes-list">
                  {theme.subthemes.map(subtheme => (
                    <li key={subtheme.id} className={subtheme.id === currentThemeId ? 'active' : ''}>
                      <div
                        className="subtheme-item"
                        onClick={() => onThemeSelect(subtheme.id)}
                      >
                        {subtheme.numbering} {subtheme.title}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;