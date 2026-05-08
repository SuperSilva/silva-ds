import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export const LinkBase = styled.a`
  color: ${tokens.color.accent};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: ${tokens.transition.colors};
  cursor: pointer;

  &:hover {
    color: ${tokens.color.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
    border-radius: ${tokens.radius.sm};
  }
`;

export const linkWeights = {
  regular: css`
    font-weight: ${tokens.fontWeight.regular};
  `,
  medium: css`
    font-weight: ${tokens.fontWeight.medium};
  `,
  semibold: css`
    font-weight: ${tokens.fontWeight.semibold};
  `,
} as const;

export const truncateStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: 100%;
`;

export type LinkWeight = keyof typeof linkWeights;

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  weight?: LinkWeight;
  truncate?: boolean;
  external?: boolean;
}
