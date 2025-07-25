import styled, { css } from "styled-components";

/* ——— helper para “tarjetas” ——— */
const card = css`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

/* ——— wrapper principal ——— */
export const ContentWrapper = styled.main`
  flex: 1;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.contentBg};
  line-height: 1.7;
  transition: background 0.3s ease;

  display: flex;
  justify-content: center;

  /* ───── Barra reservada (6 px) ───── */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-scrollbar {
    width: 6px; /* ancho fijo → no hay “brinco”          */
    background: transparent; /* pista invisible                       */
  }
  &::-webkit-scrollbar-thumb {
    background: transparent; /* pulgar también transparente           */
    border-radius: 3px;
  }

  /* Firefox */
  scrollbar-width: thin; /* ~6 px */
  scrollbar-color: transparent transparent; /* pista + pulgar invisibles */

  /* ───── Al pasar el puntero: solo se colorea el pulgar ───── */
  &:hover::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25); /* color sutil               */
  }
  &:hover::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.06); /* pista tenue (opcional)    */
  }
  &:hover {
    scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.06); /* Firefox    */
  }

  /* ───── Contenedor interno ───── */
  & > .inner {
    width: 100%;
    max-width: 1500px;
    padding: 30px;
    padding-top: 25px;
  }

  /* ───────── NUEVO – contenedor de la animación ───────── */
  .lottie-wrapper {
    width: 100%;
    margin: 40px 0 20px;
  }

  ${({ $noContent }) =>
    $noContent &&
    css`
      align-items: center;
      .inner {
        display: flex;
        justify-content: center;
        font-size: 1.4em;
        color: ${({ theme }) => theme.colors.mutedText};
      }
    `}
`;

/* ——— bloques reutilizables ——— */
export const ThemeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.titles};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primarySoft};
  padding-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
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

/* ======= nuevos estilos para multimedia ======= */
export const Figure = styled.figure`
  margin: 2rem 0;
  text-align: center;
  > img {
    max-width: 100%;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  > figcaption {
    margin-top: 0.5rem;
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.mutedText};
  }
`;

export const BlockQuote = styled.blockquote`
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  border-left: 4px solid ${({ theme }) => theme.colors.accordionTicket};
  background: ${({ theme }) => theme.colors.accordionBackground};
  font-style: italic;
`;

export const Unordered = styled.ul`
  margin: 1rem 0 1rem 1.2rem;
  list-style: disc;
  li {
    margin: 0.4rem 0;
  }
`;
export const Ordered = styled.ol`
  margin: 1rem 0 1rem 1.2rem;
  list-style: decimal;
  li {
    margin: 0.4rem 0;
  }
`;

/* ——— enlaces y video ——— */
export const LinkBox = styled.div`
  margin: 15px 0;
  a {
    color: ${({ theme }) => theme.colors.link};
    font-weight: bold;
    text-decoration: none;
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
  background: ${({ theme }) => theme.colors.accordionBackground};
  color: ${({ theme }) => theme.colors.titles};
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

/* ——— navegación ——— */
export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding-bottom: 90px;
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

/* ——— cuadro info unidad ——— */
export const UnitInfoBox = styled.section`
  ${card};
  background: ${({ theme }) => theme.colors.successLight};
  margin-bottom: 25px;
  padding: 25px;
  .unit-title {
    text-align: center;
    font-size: 2.2em;
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.titles};
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

  .unit-meta-teacher {
    font-size: 1.05em;
    margin-bottom: 8px;
    display: none;
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

/* ——— animación Lottie (centrada y responsiva) ——— */
export const LottieBox = styled.div`
  width: 75%;
  max-width: none; /* ancho máximo opcional */
  margin: 10px auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  /* el <canvas> o <svg> que pinta la animación */
  canvas,
  svg {
    width: 100% !important; /* se adapta al 100 % del contenedor */
    height: auto !important; /* mantiene proporción */
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

/* ——— botón de descarga con Lottie ——— */
export const DownloadBtn = styled.a`
  ${card};
  display: inline-flex;
  align-items: center;
  gap: 0.65em;

  /* 5 % más pequeño que antes */
  font-size: clamp(0.95rem, 1.14vw + 0.71rem, 1.19rem);

  padding: clamp(9.5px, 1.23vw, 13.3px) clamp(21px, 2.85vw, 32px);

  margin: 2.2rem auto;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.25s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  .lottie-icon {
    width: 3.66em; /* 5 % menos que 2.8 em */
    height: 3.66em;
    flex-shrink: 0;
  }
`;

/* Centra el botón de descarga debajo de la animación */
export const DownloadWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px; /* separa un poco del elemento anterior */
`;

/* ——— Bibliography: lista desplazable + animación grande ——— */
export const BibliographyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* siempre 1 columna             */
  row-gap: 48px;

  /* LISTA ----------------------------------------------------------- */
  & > .biblio-list {
    /* sin límite de alto ni scrollbar interno */
    overflow: visible;
    padding-right: 0; /* (opcional) elimina el pequeño margen derecho */
  }

  /* ANIMACIÓN ------------------------------------------------------- */
  & > .lottie-block {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 90%; /* deja respirar a los costados  */
    max-width: 680px; /* más ancha → apariencia mayor  */
  }

  /* ------------- Desactivar el alto fijo de la lista en móviles ----------- */
  @media (max-width: 930px) {
    & > .biblio-list {
      max-height: none; /* la lista vuelve a crecer libremente  */
      overflow: visible; /* se quita su scroll interno           */
    }
  }

  @media (max-width: 600px) {
    /* el UL que envuelve los <li> de bibliografía */
    & > .biblio-list {
      overflow-x: hidden; /* nunca barra horizontal interna   */
      padding-right: 0.5rem; /* un poco de aire contra el borde  */
    }

    /* cada elemento de la lista y los enlaces interiores */
    & > .biblio-list li,
    & > .biblio-list a {
      word-break: break-word; /* permite cortar palabros y URLs   */
    }
  }
`;

/* ——— ReadingBox: lista destacada para Material Complementario ——— */
export const ReadingBox = styled.div`
  ${card};
  padding: 45px 22px;
  margin: 65px auto;
  max-width: 1080px;

  h3 {
    margin-top: 0;
    font-size: 2.05rem;
    color: ${({ theme }) => theme.colors.titles};
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primarySoft};
    padding-bottom: 6px;
  }

  ul {
    margin: 18px 0 0 1.1rem;
    list-style: disc;
    font-size: 1.1rem;
  }
  li {
    margin: 0.45rem 0;
  }
  a {
    color: ${({ theme }) => theme.colors.link};
    &:hover {
      text-decoration: underline;
    }
  }
`;
