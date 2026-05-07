import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

// ─── Text ─────────────────────────────────────────────────────────────────────

const TextBase = styled.p`
  margin: 0;
  font-family: inherit;
  line-height: ${tokens.lineHeight.normal};
`;

export const TextXsRoot = styled(TextBase)`
  font-size: ${tokens.fontSize.xs};
`;
export const TextSmRoot = styled(TextBase)`
  font-size: ${tokens.fontSize.sm};
`;
export const TextMdRoot = styled(TextBase)`
  font-size: ${tokens.fontSize.md};
`;
export const TextLgRoot = styled(TextBase)`
  font-size: ${tokens.fontSize.lg};
`;
export const TextXlRoot = styled(TextBase)`
  font-size: ${tokens.fontSize.xl};
`;

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

// ─── Heading ──────────────────────────────────────────────────────────────────

export const HeadingRoot = styled.h1`
  margin: 0;
  font-family: inherit;
  line-height: ${tokens.lineHeight.tight};
`;

export const headingSizes = {
  sm: css`
    font-size: ${tokens.fontSize.sm};
  `,
  md: css`
    font-size: ${tokens.fontSize.md};
  `,
  lg: css`
    font-size: ${tokens.fontSize.lg};
  `,
  xl: css`
    font-size: ${tokens.fontSize.xl};
  `,
  '2xl': css`
    font-size: ${tokens.fontSize['2xl']};
  `,
  '3xl': css`
    font-size: ${tokens.fontSize['3xl']};
  `,
} as const;
