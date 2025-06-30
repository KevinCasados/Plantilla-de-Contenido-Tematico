import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'Kumbh Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background .25s ease, color .25s ease;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* ─────────────  SCROLLBAR PERSONALIZADO  ───────────── */

  /* Chrome, Edge, Safari */
  ::-webkit-scrollbar {
    width: 8px;                 /* grosor */
  }

  ::-webkit-scrollbar-track {
    background: transparent;    /* carril */
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primarySoft};
    border-radius: 4px;
    border: 2px solid transparent;      /* “padding” visual */
    background-clip: content-box;
    transition: background 0.3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  /* Firefox */
  html {
    scrollbar-width: thin;      /* thin | auto | none */
    scrollbar-color: ${({ theme }) =>
      `${theme.colors.primarySoft} transparent`};
  }
`;  