import styled from 'styled-components';

/* ---------- contenedor principal del header ---------- */
export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 100px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.headerText || '#ffffff'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

/* ---------- switch wrapper (cápsula) ---------- */
export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;                /* borde interior para ver contraste */
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.toggleWrapperBg || 'rgba(255,255,255,0.25)'};
`;

/* ---------- pista del switch ---------- */
export const Track = styled.div`
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.toggleTrack};
  cursor: pointer;
  transition: background 0.25s ease;

  ${({ $isDark, theme }) =>
    $isDark &&
    `background: ${theme.colors.toggleTrackActive};`}
`;

/* ---------- perilla ---------- */
export const Thumb = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.toggleThumb};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  transform: ${({ $isDark }) => ($isDark ? 'translateX(32px)' : 'translateX(0)')};

  & svg {
    width: 16px;
    height: 16px;
    /* Colores de ícono con fallback */
    fill: ${({ $isDark, theme }) =>
      $isDark
        ? theme.colors.iconMoon || '#f5d742'
        : theme.colors.iconSun || '#ffcc33'};
  }
`;
