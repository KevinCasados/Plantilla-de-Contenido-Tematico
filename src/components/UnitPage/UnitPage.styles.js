import styled, { css } from 'styled-components';

/* ---------- layout general ---------- */
export const UnitPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  overflow: hidden;                   /* evita doble scroll */
  background: ${({ theme }) => theme.colors.background};
`;

/* ---------- zona central (sidebar + contenido) ---------- */
export const MainContentLayout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

/* ---------- mensajes (carga, error, sin unidad) ---------- */
const baseMessage = css`
  padding: 20px;
  text-align: center;
  font-size: 1.1em;
`;

export const LoadingMessage = styled.div`
  ${baseMessage};
  color: ${({ theme }) => theme.colors.mutedText};
`;

export const ErrorMessage = styled.div`
  ${baseMessage};
  color: ${({ theme }) => theme.colors.danger};
`;

export const EmptyMessage = styled.div`
  ${baseMessage};
  color: ${({ theme }) => theme.colors.textSecondary};
`;