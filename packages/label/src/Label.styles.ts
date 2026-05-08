import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export const LabelBase = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${tokens.fontWeight.medium};
  line-height: 1;
  white-space: nowrap;
  border-radius: ${tokens.radius.full};
  border: 1px solid transparent;
  transition: ${tokens.transition.colors};
`;

export const labelSizes = {
  sm: css`
    font-size: ${tokens.fontSize.xs};
    padding: 2px ${tokens.space[2]};
    gap: 3px;
  `,
  md: css`
    font-size: ${tokens.fontSize.sm};
    padding: ${tokens.space[1]} ${tokens.space[3]};
    gap: ${tokens.space[1]};
  `,
} as const;

export type LabelSize = keyof typeof labelSizes;

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: LabelSize;
}
