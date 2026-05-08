import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { textWeights, textColors, truncateStyle } from './Typography.styles';
import type { TextAs, TextColor, TextWeight } from './Typography.styles';

const FootnoteRoot = styled.span`
  margin: 0;
  font-family: inherit;
  line-height: ${tokens.lineHeight.normal};
  font-size: ${tokens.fontSize.xs};
`;

export interface FootnoteProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextAs;
  weight?: TextWeight;
  color?: TextColor;
  truncate?: boolean;
}

export const Footnote: React.FC<FootnoteProps> = ({
  as: Tag = 'span',
  weight = 'regular',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <FootnoteRoot
    as={Tag as React.ElementType}
    className={cx(textWeights[weight], textColors[color], truncate && truncateStyle, className)}
    {...props}
  >
    {children}
  </FootnoteRoot>
);
Footnote.displayName = 'Footnote';
