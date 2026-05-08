import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { textWeights, textColors, truncateStyle } from './Typography.styles';
import type { TextAs, TextColor, TextWeight } from './Typography.styles';

const LeadRoot = styled.p`
  margin: 0;
  font-family: inherit;
  line-height: ${tokens.lineHeight.relaxed};
  font-size: ${tokens.fontSize.lg};
`;

export interface LeadProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextAs;
  weight?: TextWeight;
  color?: TextColor;
  truncate?: boolean;
}

export const Lead: React.FC<LeadProps> = ({
  as: Tag = 'p',
  weight = 'regular',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <LeadRoot
    as={Tag as React.ElementType}
    className={cx(textWeights[weight], textColors[color], truncate && truncateStyle, className)}
    {...props}
  >
    {children}
  </LeadRoot>
);
Lead.displayName = 'Lead';
