import styled, { css } from 'styled-components';

/* ——— PESTAÑA LATERAL (escritorio) ——— */
export const ToggleTab = styled.button`
  position: absolute;
  top: 12px;
  right: -24px;
  width: 24px;
  height: 48px;
  border: none;
  border-radius: 0 4px 4px 0;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 0 4px rgba(0,0,0,.15);
  transition: background .25s;
  z-index: 1001;

  &:hover { background: ${({ theme }) => theme.colors.primaryDark}; }

  /* oculta en móvil */
  @media (max-width: 1079px) { display: none; }
`;

/* ——— BOTÓN CIERRE «✕» (solo móvil) ——— */
export const CloseButton = styled.button`
  display: none;                       /* visible solo <1080 px */
  @media (max-width: 1079px) {
    display: flex;
    position: absolute;
    top: 18px;
    right: 18px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1100;
    box-shadow: 0 2px 6px rgba(0,0,0,.25);
    transition: background .25s;
    &:hover { background: ${({ theme }) => theme.colors.primaryDark}; }
  }
`;

/* ——— CONTENEDOR PRINCIPAL ——— */
export const SidebarWrapper = styled.aside`
  /* escritorio */
  width: ${({ $collapsed }) => ($collapsed ? '0' : '280px')};
  flex-shrink: 0;
  overflow: visible;
  transition: width .3s ease;
  position: relative;
  background: ${({ $collapsed, theme }) =>
    $collapsed ? 'transparent' : theme.colors.primaryExtraSoft};
  box-shadow: ${({ $collapsed }) =>
    $collapsed ? 'none' : '2px 0 5px rgba(0,0,0,.05)'};

  & > .panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    padding: 53px 20px;
    overflow-y: auto;
    background: ${({ theme }) => theme.colors.primaryExtraSoft};
    transition: transform .3s ease;
    transform: ${({ $collapsed }) =>
      $collapsed ? 'translateX(-100%)' : 'translateX(0)'};
    pointer-events: ${({ $collapsed }) => ($collapsed ? 'none' : 'auto')};
  }

  /* móvil */
  @media (max-width: 1079px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $collapsed }) => ($collapsed ? '0' : '280px')};
    pointer-events: ${({ $collapsed }) => ($collapsed ? 'none' : 'auto')};
    z-index: 1000;
    background: transparent;
    box-shadow: none;

    & > .panel { padding-top: 80px; }
  }
`;

/* ——— DEMÁS ESTILOS SIN CAMBIOS ——— */
export const Heading = styled.h3`
  margin: 0 0 25px;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primarySoft};
  padding-bottom: 10px;
`;
export const List = styled.ul`
list-style:none;
margin:0;
padding:0;
display: flex;
flex-direction: column;
gap:15px;
`;
export const ExpandIcon  = styled.span`
  margin-left:10px;font-size:.8em;user-select:none;`;

const itemBase = css`
  display:flex;justify-content:space-between;align-items:center;
  padding:10px 15px;border-radius:5px;font-weight:500;cursor:pointer;
  transition:background .2s,transform .15s;
`;

export const ThemeItem = styled.div`
  ${itemBase};
  background:${({theme})=>theme.colors.surface};
  color:${({theme})=>theme.colors.text};

  &:hover{
    background:${({theme})=>theme.colors.primarySoft};
    transform:translateX(4px);
  }
  ${({$active,theme})=>$active&&css`
    background:${theme.colors.primary};
    color:#fff;font-weight:600;
    box-shadow:inset 3px 0 0 ${theme.colors.primarySoft};
  `}
`;

export const SubthemesList = styled.ul`
  list-style:none;margin:6px 0;padding-left:18px;
  border-left:2px solid ${({theme})=>theme.colors.primarySoft};
`;
export const SubthemeItem = styled.div`
  ${itemBase};font-size:.9em;
  background:${({theme})=>theme.colors.primaryExtraSoft};

  &:hover{
    background:${({theme})=>theme.colors.primarySoft};
    transform:translateX(4px);
  }
  ${({$active,theme})=>$active&&css`
    background:${theme.colors.primaryDark};
    color:#fff;
  `}
`;