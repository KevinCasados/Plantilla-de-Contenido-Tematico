// ──────────────────────────────────────────────────────────
// src/components/Sidebar/Sidebar.js
// ──────────────────────────────────────────────────────────
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
  /* ── Abrir / cerrar sub-temas ── */
  const toggleExpand = (id) =>
    setExpandedThemes((p) => ({ ...p, [id]: !p[id] }));

  /* ── Tema o sub-tema activo ── */
  const isActive = (t) =>
    t.id === currentThemeId || t.subthemes?.some((s) => s.id === currentThemeId);

  return (
    <SidebarWrapper $collapsed={collapsed}>
      {/* pestaña (escritorio) */}
      <ToggleTab onClick={onToggle}>{collapsed ? '▶' : '◀'}</ToggleTab>

      {/* botón “✕” (móvil) */}
      <CloseButton onClick={onToggle} aria-label="Cerrar menú">
        ✕
      </CloseButton>

      <div className="panel">
        <Heading>Contenido de la Unidad</Heading>

        <nav>
          <List>
            {themes.map((t) => {
              /* —— etiqueta que se mostrará —— */
              const label = t.isUnitInfo
                ? t.title
                : t.numbering === t.title
                ? t.title                      // evita duplicado
                : `${t.numbering} ${t.title}`;

              return (
                <li key={t.id}>
                  <ThemeItem
                    $active={isActive(t)}
                    onClick={() => {
                      if (t.subthemes?.length) toggleExpand(t.id);
                      onThemeSelect(t.id);
                    }}
                  >
                    <span>{label}</span>

                    {t.subthemes?.length > 0 && (
                      <ExpandIcon>{expandedThemes[t.id] ? '▼' : '►'}</ExpandIcon>
                    )}
                  </ThemeItem>

                  {/* sub-niveles */}
                  {t.subthemes?.length > 0 && expandedThemes[t.id] && (
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
                    </SubthemesList>
                  )}
                </li>
              );
            })}
          </List>
        </nav>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;
