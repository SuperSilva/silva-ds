import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export const ModalOverlayRoot = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  z-index: 1;
`;

export const ModalRoot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: ${tokens.radius.lg};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  pointer-events: auto;
  outline: none;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  z-index: 2;
`;

export const modalSizes = {
  sm: css`
    width: 400px;
    max-width: calc(100vw - 32px);
    padding: ${tokens.space[5]};
  `,
  md: css`
    width: 560px;
    max-width: calc(100vw - 32px);
    padding: ${tokens.space[6]};
  `,
  lg: css`
    width: 720px;
    max-width: calc(100vw - 32px);
    padding: ${tokens.space[6]};
  `,
} as const;
