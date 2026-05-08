import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';
import type React from 'react';

export const ButtonRoot = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.space[2]};
  border-radius: ${tokens.radius.md};
  font-family: inherit;
  font-weight: ${tokens.fontWeight.medium};
  line-height: 1;
  cursor: pointer;
  border: 1px solid transparent;
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
    height: ${tokens.button.heightSm};
    padding: 0 ${tokens.space[3]};
    font-size: ${tokens.fontSize.sm};
  `,
  md: css`
    height: ${tokens.button.heightMd};
    padding: 0 ${tokens.space[4]};
    font-size: ${tokens.fontSize.md};
  `,
  lg: css`
    height: ${tokens.button.heightLg};
    padding: 0 ${tokens.space[6]};
    font-size: ${tokens.fontSize.lg};
  `,
} as const;

export type ButtonSize = keyof typeof sizes;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}
