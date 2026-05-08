import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export type TextColor = 'default' | 'subtle' | 'disabled';
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type TextAs = 'p' | 'span' | 'div' | 'strong' | 'em';
export type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';

export const textWeights = {
  regular: css`
    font-weight: ${tokens.fontWeight.regular};
  `,
  medium: css`
    font-weight: ${tokens.fontWeight.medium};
  `,
  semibold: css`
    font-weight: ${tokens.fontWeight.semibold};
  `,
  bold: css`
    font-weight: ${tokens.fontWeight.bold};
  `,
} as const;

export const textColors = {
  default: css`
    color: ${tokens.color.textDefault};
  `,
  subtle: css`
    color: ${tokens.color.textSubtle};
  `,
  disabled: css`
    color: ${tokens.color.textDisabled};
  `,
} as const;

export const truncateStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
