import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

const DropdownTriggerBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  appearance: none;
  border-radius: ${tokens.radius.md};
  font-family: inherit;
  color: ${tokens.color.textDefault};
  cursor: pointer;
  transition: ${tokens.transition.colors};
  outline: none;
  text-align: left;
  gap: ${tokens.space[2]};

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [data-chevron] {
    flex-shrink: 0;
    transition: transform 200ms ease;
  }

  &[aria-expanded='true'] [data-chevron] {
    transform: rotate(180deg);
  }
`;

export const DefaultDropdownTrigger = styled(DropdownTriggerBase)`
  background-color: #ffffff;
  border: 1px solid ${tokens.color.border};

  &:hover:not(:disabled) {
    border-color: ${tokens.color.accent};
  }
`;

export const OutlineDropdownTrigger = styled(DropdownTriggerBase)`
  background-color: transparent;
  border: 2px solid ${tokens.color.accent};
  color: ${tokens.color.accent};

  &:hover:not(:disabled) {
    background-color: ${tokens.color.accentBgHover};
  }
`;

export const DropdownPanelRoot = styled.div`
  background-color: #ffffff;
  border: 1px solid ${tokens.color.border};
  border-radius: ${tokens.radius.md};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  pointer-events: auto;
  padding: ${tokens.space[1]} 0;
`;

export const DropdownOptionRoot = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 100ms ease;
  color: ${tokens.color.textDefault};
  font-family: inherit;
  user-select: none;

  &[aria-selected='true'] {
    color: ${tokens.color.accent};
    font-weight: ${tokens.fontWeight.medium};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[data-highlighted='true']:not([aria-disabled='true']) {
    background-color: ${tokens.color.accentBgHover};
  }
`;

export const dropdownTriggerSizes = {
  sm: css`
    height: ${tokens.input.heightSm};
    padding: 0 ${tokens.space[2]};
    font-size: ${tokens.fontSize.sm};
  `,
  md: css`
    height: ${tokens.input.heightMd};
    padding: 0 ${tokens.space[3]};
    font-size: ${tokens.fontSize.md};
  `,
  lg: css`
    height: ${tokens.input.heightLg};
    padding: 0 ${tokens.space[4]};
    font-size: ${tokens.fontSize.lg};
  `,
} as const;

export const dropdownOptionSizes = {
  sm: css`
    padding: ${tokens.space[1]} ${tokens.space[2]};
    font-size: ${tokens.fontSize.sm};
  `,
  md: css`
    padding: ${tokens.space[2]} ${tokens.space[3]};
    font-size: ${tokens.fontSize.md};
  `,
  lg: css`
    padding: ${tokens.space[2]} ${tokens.space[4]};
    font-size: ${tokens.fontSize.lg};
  `,
} as const;
