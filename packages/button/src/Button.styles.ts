import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export const base = css`
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

export const variants = {
  primary: css`
    background-color: ${tokens.color.primary};
    color: ${tokens.color.primaryFg};
    &:hover  { background-color: ${tokens.color.primaryHover}; }
    &:active { background-color: ${tokens.color.primaryActive}; }
  `,
  secondary: css`
    background-color: ${tokens.color.secondary};
    color: ${tokens.color.secondaryFg};
    &:hover  { background-color: ${tokens.color.secondaryHover}; }
    &:active { background-color: ${tokens.color.secondaryActive}; }
  `,
  outline: css`
    background-color: transparent;
    color: ${tokens.color.accent};
    border-color: ${tokens.color.accent};
    &:hover  { background-color: ${tokens.color.accentBgHover}; }
    &:active { background-color: ${tokens.color.accentBgActive}; }
  `,
  ghost: css`
    background-color: transparent;
    color: ${tokens.color.neutralFg};
    &:hover  { background-color: ${tokens.color.neutralBgHover}; }
    &:active { background-color: ${tokens.color.neutralBgActive}; }
  `,
  destructive: css`
    background-color: ${tokens.color.destructive};
    color: ${tokens.color.destructiveFg};
    &:hover  { background-color: ${tokens.color.destructiveHover}; }
    &:active { background-color: ${tokens.color.destructiveActive}; }
  `,
} as const;

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
