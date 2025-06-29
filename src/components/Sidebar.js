import React from 'react';
import './Sidebar.css';                // Hoja de estilos del sidebar

function Sidebar({
  themes,
  currentThemeId,
  onThemeSelect,
  expandedThemes,
  setExpandedThemes,
}) {
  // Expande o contrae de forma independiente cada tema
  const toggleExpand = (themeId) =>
    setExpandedThemes((prev) => ({
      ...prev,
      [themeId]: !prev[themeId],
    }));

  return (
    <aside className="sidebar">
      <h3>Contenido de la Unidad</h3>
      <nav>
        <ul>
          {themes.map((theme) => (
            <li
              key={theme.id}
              className={
                theme.id === currentThemeId ||
                (theme.subthemes &&
                  theme.subthemes.some((sub) => sub.id === currentThemeId))
                  ? 'active'
                  : ''
              }
            >
              <div
                className={`theme-item ${
                  theme.subthemes?.length ? 'has-subthemes' : ''
                }`}
                onClick={() => {
                  if (theme.subthemes?.length) toggleExpand(theme.id);
                  onThemeSelect(theme.id);
                }}
              >
                {theme.isUnitInfo ? (
                  <span>{theme.title}</span>
                ) : (
                  <span>
                    {theme.numbering} {theme.title}
                  </span>
                )}

                {theme.subthemes?.length > 0 && (
                  <span className="expand-icon">
                    {expandedThemes[theme.id] ? '▼' : '►'}
                  </span>
                )}
              </div>

              {theme.subthemes?.length > 0 && expandedThemes[theme.id] && (
                <ul className="subthemes-list">
                  {theme.subthemes.map((sub) => (
                    <li
                      key={sub.id}
                      className={sub.id === currentThemeId ? 'active' : ''}
                    >
                      <div
                        className="subtheme-item"
                        onClick={() => onThemeSelect(sub.id)}
                      >
                        {sub.numbering} {sub.title}
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