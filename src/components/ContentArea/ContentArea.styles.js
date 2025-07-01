import styled, { css } from 'styled-components';

/* ——— helper para “tarjetas” ——— */
const card = css`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

/* ——— wrapper principal —— ahora centra el contenido y fija un ancho máx. ——— */
export const ContentWrapper = styled.main`
  flex: 1;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.contentBg};
  line-height: 1.7;
  transition: background 0.3s ease;

  /* 1) centrado horizontal */
  display: flex;
  justify-content: center;

  /* 2) bloque interno que recibe padding y ancho máximo */
  & > .inner {
    width: 100%;
    max-width: 1500px;       /* ← ajusta este valor a tu gusto */
    padding: 30px;
    padding-top: 90px;
  }

  /* estado “sin contenido” (cargando…) */
  ${({ $noContent }) =>
    $noContent &&
    css`
      align-items: center; /* centrado vertical */
      .inner {
        display: flex;
        justify-content: center;
        font-size: 1.4em;
        color: ${({ theme }) => theme.colors.mutedText};
      }
    `}
`;

/* ——— tipografía y bloques reutilizables ——— */
export const ThemeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primarySoft};
  padding-bottom: 10px;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin: 20px auto;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LinkBox = styled.div`
  margin: 15px 0;
  a {
    color: ${({ theme }) => theme.colors.link};
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
      text-decoration: underline;
    }
  }
`;

export const VideoBox = styled.div`
  margin: 30px 0;
  text-align: center;
  iframe {
    width: 100%;
    max-width: 740px;
    height: 420px;
    border-radius: 8px;
    border: none;
  }
`;

/* ——— acordeón ——— */
export const Accordion = styled.div`
  ${card};
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primarySoft};
`;
export const AccordionHeader = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryExtraSoft};
  color: ${({ theme }) => theme.colors.primary};
  padding: 15px 20px;
  border: none;
  font-size: 1.05em;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.25s;
  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
  }
`;
export const AccordionContent = styled.div`
  padding: 15px 20px;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/* ——— botones navegación ——— */
export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;
export const NavButton = styled.button`
  background: ${({ $next, theme }) =>
    $next ? theme.colors.danger : theme.colors.primary};
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background 0.25s, transform 0.2s;
  &:hover:not(:disabled) {
    background: ${({ $next, theme }) =>
      $next ? theme.colors.dangerDark : theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

/* ——— bloque de información de unidad ——— */
export const UnitInfoBox = styled.section`
  ${card};
  background: ${({ theme }) => theme.colors.successLight};
  margin-bottom: 25px;
  padding: 25px;

  .unit-title {
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }
  .unit-subtitle {
    text-align: center;
    font-size: 1.6em;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.success};
  }
  .unit-meta {
    font-size: 1.05em;
    margin-bottom: 8px;
  }
  .section-heading {
    font-size: 1.35em;
    margin: 25px 0 12px;
    color: ${({ theme }) => theme.colors.success};
  }
  .objective {
    ${card};
    border-left: 5px solid ${({ theme }) => theme.colors.success};
    margin-bottom: 20px;
    padding: 15px;
  }
  .competencies {
    list-style: none;
    padding: 0;
    li {
      ${card};
      border-left: 4px solid ${({ theme }) => theme.colors.successSoft};
      margin-bottom: 10px;
      padding: 12px;
    }
  }
`;