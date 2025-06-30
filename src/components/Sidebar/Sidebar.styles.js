import styled, { css } from 'styled-components';

/* === contenedor principal === */
export const SidebarWrapper = styled.aside`
  width: 280px;
  flex-shrink: 0;
  overflow-y: auto;
  padding: 25px 20px;
  background: ${({ theme }) => theme.colors.primaryExtraSoft};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  transition: background 0.3s;
`;

/* === encabezado === */
export const Heading = styled.h3`
  margin: 0 0 25px;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primarySoft};
  padding-bottom: 10px;
`;

/* === listas === */
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

/* theme y subtheme comparten estilo base */
const itemBase = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s, transform 0.15s;
`;

export const ThemeItem = styled.div`
  ${itemBase};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
    transform: translateX(5px);
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.primary};
      color: #fff;
      font-weight: 600;
      box-shadow: inset 3px 0 0 ${theme.colors.primarySoft};
    `}
`;

export const SubthemesList = styled.ul`
  list-style: none;
  margin: 6px 0;
  padding-left: 18px;
  border-left: 2px solid ${({ theme }) => theme.colors.primarySoft};
`;

export const SubthemeItem = styled.div`
  ${itemBase};
  font-size: 0.9em;
  background: ${({ theme }) => theme.colors.primaryExtraSoft};

  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
    transform: translateX(4px);
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.primaryDark};
      color: #fff;
    `}
`;

export const ExpandIcon = styled.span`
  font-size: 0.8em;
  margin-left: 10px;
  user-select: none;
`;