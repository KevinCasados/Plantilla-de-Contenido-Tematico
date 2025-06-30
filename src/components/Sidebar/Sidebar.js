import React from 'react';
import {
  SidebarWrapper,
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
}) {
  const toggleExpand = (themeId) =>
    setExpandedThemes((prev) => ({ ...prev, [themeId]: !prev[themeId] }));

  const isActiveTheme = (t) =>
    t.id === currentThemeId ||
    t.subthemes?.some((sub) => sub.id === currentThemeId);

  return (
    <SidebarWrapper>
      <Heading>Contenido de la Unidad</Heading>
      <nav>
        <List>
          {themes.map((theme) => (
            <li key={theme.id}>
              <ThemeItem
                $active={isActiveTheme(theme)}
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
                  <ExpandIcon>
                    {expandedThemes[theme.id] ? '▼' : '►'}
                  </ExpandIcon>
                )}
              </ThemeItem>

              {theme.subthemes?.length > 0 && expandedThemes[theme.id] && (
                <SubthemesList>
                  {theme.subthemes.map((sub) => (
                    <li key={sub.id}>
                      <SubthemeItem
                        $active={sub.id === currentThemeId}
                        onClick={() => onThemeSelect(sub.id)}
                      >
                        {sub.numbering} {sub.title}
                      </SubthemeItem>
                    </li>
                  ))}
                </SubthemesList>
              )}
            </li>
          ))}
        </List>
      </nav>
    </SidebarWrapper>
  );
}

export default Sidebar;