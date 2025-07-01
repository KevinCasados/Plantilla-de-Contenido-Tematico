import styled from 'styled-components';

/* —— CONTENEDOR PRINCIPAL —— */
export const HeaderWrapper = styled.header`
  position: relative;                       /* para centrar el logo en móviles */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.headerText || '#ffffff'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

/* —— HAMBURGUESA —— */
export const BurgerButton = styled.button`
  display: none;                            /* oculta por defecto */
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  /* solo en < 1080 px */
  @media (max-width: 1079px) {
    display: flex;
  }
`;

/* —— BLOQUE “LOGO + TEXTO” —— (solo escritorio) */
export const BrandBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.35rem;
  font-weight: 600;

  @media (max-width: 1079px) {
    display: none;                          /* se oculta en móviles */
  }
`;

export const LogoImg = styled.img`
  height: 48px;
`;

/* —— LOGO CENTRADO EN MÓVIL —— */
export const MobileLogo = styled.img`
  display: none;

  @media (max-width: 1079px) {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 48px;
  }
`;

/* —— SWITCH —— */
export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 5px 3px 3px;
  border-radius: 999px;
  background: ${({ theme }) =>
    theme.colors.toggleWrapperBg || 'rgba(255,255,255,0.25)'};
`;

export const Track = styled.div`
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 999px;
  background: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.toggleTrackActive : theme.colors.toggleTrack};
  cursor: pointer;
  transition: background 0.25s ease;
`;

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
  transform: ${({ $isDark }) =>
    $isDark ? 'translateX(32px)' : 'translateX(0)'};
  transition: transform 0.25s ease;

  & svg {
    width: 16px;
    height: 16px;
    color: ${({ $isDark, theme }) =>
      $isDark ? theme.colors.iconMoon : theme.colors.iconSun};
  }
`;