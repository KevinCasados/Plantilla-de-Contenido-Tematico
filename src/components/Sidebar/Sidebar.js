import React from 'react';
import {
  SidebarWrapper,
  ToggleTab,
  CloseButton,
  Heading,
  List,
  ThemeItem,
  SubthemesList,
  SubthemeItem,
  ExpandIcon,
} from './Sidebar.styles';

function Sidebar({
  themes,
  currentThemeId,
  onThemeSelect,
  expandedThemes,
  setExpandedThemes,
  collapsed,
  onToggle,
}) {
  const toggleExpand = (id) =>
    setExpandedThemes((p) => ({ ...p, [id]: !p[id] }));

  const isActive = (t) =>
    t.id === currentThemeId || t.subthemes?.some((s) => s.id === currentThemeId);

  return (
    <SidebarWrapper $collapsed={collapsed}>
      {/* Pestaña (escritorio) */}
      <ToggleTab onClick={onToggle}>{collapsed ? '▶' : '◀'}</ToggleTab>

      {/* Botón cierre (móvil) */}
      <CloseButton onClick={onToggle} aria-label="Cerrar menú">
        ✕
      </CloseButton>

      <div className="panel">
        <Heading>Contenido de la Unidad</Heading>

        <nav>
          <List>
            {themes.map((t) => (
              <li key={t.id}>
                <ThemeItem
                  $active={isActive(t)}
                  onClick={() => {
                    if (t.subthemes?.length) toggleExpand(t.id);
                    onThemeSelect(t.id);
                  }}
                >
                  {t.isUnitInfo ? (
                    <span>{t.title}</span>
                  ) : (
                    <span>{t.numbering} {t.title}</span>
                  )}

                  {t.subthemes?.length > 0 &&
                    <ExpandIcon>{expandedThemes[t.id] ? '▼' : '►'}</ExpandIcon>}
                </ThemeItem>

                {t.subthemes?.length > 0 && expandedThemes[t.id] &&
                  <SubthemesList>
                    {t.subthemes.map((s) => (
                      <li key={s.id}>
                        <SubthemeItem
                          $active={s.id === currentThemeId}
                          onClick={() => onThemeSelect(s.id)}
                        >
                          {s.numbering} {s.title}
                        </SubthemeItem>
                      </li>
                    ))}
                  </SubthemesList>}
              </li>
            ))}
          </List>
        </nav>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;