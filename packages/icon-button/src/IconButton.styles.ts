import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

const IconButtonRoot = styled.button`
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

export const PrimaryIconButtonRoot = styled(IconButtonRoot)`
  background-color: ${tokens.color.primary};
  color: ${tokens.color.primaryFg};
  &:hover {
    background-color: ${tokens.color.primaryHover};
  }
  &:active {
    background-color: ${tokens.color.primaryActive};
  }
`;

export const SecondaryIconButtonRoot = styled(IconButtonRoot)`
  background-color: ${tokens.color.secondary};
  color: ${tokens.color.secondaryFg};
  &:hover {
    background-color: ${tokens.color.secondaryHover};
  }
  &:active {
    background-color: ${tokens.color.secondaryActive};
  }
`;

export const OutlineIconButtonRoot = styled(IconButtonRoot)`
  background-color: transparent;
  color: ${tokens.color.accent};
  border-color: ${tokens.color.accent};
  &:hover {
    background-color: ${tokens.color.accentBgHover};
  }
  &:active {
    background-color: ${tokens.color.accentBgActive};
  }
`;

export const GhostIconButtonRoot = styled(IconButtonRoot)`
  background-color: transparent;
  color: ${tokens.color.neutralFg};
  &:hover {
    background-color: ${tokens.color.neutralBgHover};
  }
  &:active {
    background-color: ${tokens.color.neutralBgActive};
  }
`;

export const DestructiveIconButtonRoot = styled(IconButtonRoot)`
  background-color: ${tokens.color.destructive};
  color: ${tokens.color.destructiveFg};
  &:hover {
    background-color: ${tokens.color.destructiveHover};
  }
  &:active {
    background-color: ${tokens.color.destructiveActive};
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
