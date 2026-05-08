import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { textColors, truncateStyle } from './Typography.styles';
import type { TextAs, TextColor } from './Typography.styles';

const BodyBoldRoot = styled.p`
  margin: 0;
  font-family: inherit;
  line-height: ${tokens.lineHeight.normal};
  font-size: ${tokens.fontSize.md};
  font-weight: ${tokens.fontWeight.bold};
`;

export interface BodyBoldProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextAs;
  color?: TextColor;
  truncate?: boolean;
}

export const BodyBold: React.FC<BodyBoldProps> = ({
  as: Tag = 'p',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <BodyBoldRoot
    as={Tag as React.ElementType}
    className={cx(textColors[color], truncate && truncateStyle, className)}
    {...props}
  >
    {children}
  </BodyBoldRoot>
);
BodyBold.displayName = 'BodyBold';
