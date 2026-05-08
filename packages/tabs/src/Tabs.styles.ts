import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export const TabsRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabListRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${tokens.space[1]};
`;

export const TabBase = styled.button`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${tokens.fontSize.sm};
  font-weight: ${tokens.fontWeight.medium};
  line-height: ${tokens.lineHeight.normal};
  color: ${tokens.color.textSubtle};
  padding: ${tokens.space[2]} ${tokens.space[3]};
  border-radius: ${tokens.radius.md};
  transition: ${tokens.transition.colors};
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const TabPanelRoot = styled.div`
  padding-top: ${tokens.space[4]};
  color: ${tokens.color.textDefault};
  font-size: ${tokens.fontSize.md};
  line-height: ${tokens.lineHeight.normal};

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }
`;

export const lineTabActiveStyle = css`
  color: ${tokens.color.textDefault};
  box-shadow: inset 0 -2px 0 0 ${tokens.color.primary};
  border-radius: 0;
`;

export const lineTabListStyle = css`
  border-bottom: 1px solid ${tokens.color.border};
  border-radius: 0;
  gap: 0;
`;

export const pillTabActiveStyle = css`
  background-color: ${tokens.color.primary};
  color: ${tokens.color.primaryFg};
`;

export const pillTabHoverStyle = css`
  &:hover:not([aria-selected='true']) {
    background-color: ${tokens.color.neutralBgHover};
    color: ${tokens.color.textDefault};
  }
`;
