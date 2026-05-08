import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens, breakpoints } from '@design-system/theme';

export const ProductGridRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--pg-cols-xs, 2), 1fr);
  gap: ${tokens.space[4]};

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(var(--pg-cols-sm, 3), 1fr);
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(var(--pg-cols-md, 3), 1fr);
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(var(--pg-cols-xl, 4), 1fr);
  }
`;

export const gridGaps = {
  sm: css`
    gap: ${tokens.space[3]};
  `,
  md: css`
    gap: ${tokens.space[4]};
  `,
  lg: css`
    gap: ${tokens.space[6]};
  `,
} as const;
