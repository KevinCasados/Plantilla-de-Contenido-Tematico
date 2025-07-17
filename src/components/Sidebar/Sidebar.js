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

/* ──────────────────────────────────────────────────────────
   • El componente se re‑escribe recursivamente con
     renderItem() para manejar n niveles de anidamiento.
   • expandedThemes (objeto { id:true/false }) controla
     qué nodos están abiertos.
   ────────────────────────────────────────────────────────── */
function Sidebar({
  themes,
  currentThemeId,
  onThemeSelect,
  expandedThemes,
  setExpandedThemes,
  collapsed,
  onToggle,
}) {
  /* Abre / cierra un nodo (tema o sub‑tema) */
  const toggleExpand = (id) =>
    setExpandedThemes((p) => ({ ...p, [id]: !p[id] }));

  /* Devuelve true si el nodo t o cualquiera de sus hijos está activo */
  const nodeIsActive = (t) =>
    t.id === currentThemeId ||
    t.subthemes?.some((s) => nodeIsActive(s));

  /* ── Render recursivo ─────────────────────────────────── */
  const renderItem = (node, depth = 0) => {
    const { id, numbering = '', title, subthemes } = node;
    const hasChildren = Array.isArray(subthemes) && subthemes.length > 0;

    const label =
      node.isUnitInfo
        ? title
        : numbering === title || numbering === '' /* evita duplicar */
        ? title
        : `${numbering} ${title}`;

    /* Decide qué styled‑component usar: ThemeItem (nivel 0) o SubthemeItem (>0) */
    const ItemComponent = depth === 0 ? ThemeItem : SubthemeItem;

    return (
      <li key={id}>
        <ItemComponent
          $active={nodeIsActive(node)}
          onClick={() => {
            if (hasChildren) toggleExpand(id);
            onThemeSelect(id);
          }}
        >
          <span>{label}</span>

          {hasChildren && (
            <ExpandIcon>{expandedThemes[id] ? '▼' : '►'}</ExpandIcon>
          )}
        </ItemComponent>

        {hasChildren && expandedThemes[id] && (
          <SubthemesList>
            {subthemes.map((child) => renderItem(child, depth + 1))}
          </SubthemesList>
        )}
      </li>
    );
  };
  /* ─────────────────────────────────────────────────────── */

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
            {themes.map((t) => renderItem(t))}
          </List>
        </nav>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;