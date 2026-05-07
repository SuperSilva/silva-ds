import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

const DropdownBase = styled.select`
  display: block;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  border-radius: ${tokens.radius.md};
  font-family: inherit;
  color: ${tokens.color.textDefault};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  cursor: pointer;
  transition: ${tokens.transition.colors};
  outline: none;

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DefaultDropdownRoot = styled(DropdownBase)`
  background-color: #ffffff;
  border: 1px solid ${tokens.color.border};

  &:hover:not(:disabled) {
    border-color: ${tokens.color.accent};
  }
`;

export const OutlineDropdownRoot = styled(DropdownBase)`
  background-color: transparent;
  border: 2px solid ${tokens.color.accent};
  color: ${tokens.color.accent};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230070f3' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");

  &:hover:not(:disabled) {
    background-color: ${tokens.color.accentBgHover};
  }
`;

export const dropdownSizes = {
  sm: css`
    height: ${tokens.input.heightSm};
    padding: 0 24px 0 ${tokens.space[2]};
    font-size: ${tokens.fontSize.sm};
    background-position: right 8px center;
  `,
  md: css`
    height: ${tokens.input.heightMd};
    padding: 0 28px 0 ${tokens.space[3]};
    font-size: ${tokens.fontSize.md};
    background-position: right 10px center;
  `,
  lg: css`
    height: ${tokens.input.heightLg};
    padding: 0 36px 0 ${tokens.space[4]};
    font-size: ${tokens.fontSize.lg};
    background-position: right 14px center;
  `,
} as const;
