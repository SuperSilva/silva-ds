import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';
import type React from 'react';

export const IconButtonRoot = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${tokens.radius.md};
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0;
  transition: ${tokens.transition.colors};

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const sizes = {
  sm: css`
    width: ${tokens.button.heightSm};
    height: ${tokens.button.heightSm};
    font-size: ${tokens.fontSize.sm};
  `,
  md: css`
    width: ${tokens.button.heightMd};
    height: ${tokens.button.heightMd};
    font-size: ${tokens.fontSize.md};
  `,
  lg: css`
    width: ${tokens.button.heightLg};
    height: ${tokens.button.heightLg};
    font-size: ${tokens.fontSize.lg};
  `,
} as const;

export type IconButtonSize = keyof typeof sizes;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  icon: React.ReactNode;
  size?: IconButtonSize;
}
