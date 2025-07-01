import styled, { css } from 'styled-components';

/* —— contenedor global —— */
export const UnitPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* descuento 72 px del header para evitar doble scroll */
  height: calc(100vh - 72px);
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`;

/* —— layout central —— */
export const MainContentLayout = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

/* —— mensajes —— */
const base = css`
  padding: 20px;
  text-align: center;
  font-size: 1.1em;
`;
export const LoadingMessage = styled.div`
  ${base}; color: ${({ theme }) => theme.colors.mutedText};
`;
export const ErrorMessage = styled.div`
  ${base}; color: ${({ theme }) => theme.colors.danger};
`;
export const EmptyMessage = styled.div`
  ${base}; color: ${({ theme }) => theme.colors.textSecondary};
`;

/* —— overlay (móvil) —— */
export const Overlay = styled.div`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 900;
`;