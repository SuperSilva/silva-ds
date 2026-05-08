import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { textColors, truncateStyle } from './Typography.styles';
import type { HeadingAs, TextColor } from './Typography.styles';

const DisplayRoot = styled.h1`
  margin: 0;
  font-family: inherit;
  line-height: ${tokens.lineHeight.tight};
  font-size: ${tokens.fontSize['2xl']};
  font-weight: ${tokens.fontWeight.bold};
`;

export interface DisplayProps extends React.HTMLAttributes<HTMLElement> {
  as?: HeadingAs;
  color?: TextColor;
  truncate?: boolean;
}

export const Display: React.FC<DisplayProps> = ({
  as: Tag = 'h1',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <DisplayRoot
    as={Tag as React.ElementType}
    className={cx(textColors[color], truncate && truncateStyle, className)}
    {...props}
  >
    {children}
  </DisplayRoot>
);
Display.displayName = 'Display';
