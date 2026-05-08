import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { ButtonRoot, sizes } from './Button.styles';
import type { ButtonProps } from './Button.styles';

const DestructiveButtonRoot = styled(ButtonRoot)`
  background-color: ${tokens.color.destructive};
  color: ${tokens.color.destructiveFg};
  &:hover {
    background-color: ${tokens.color.destructiveHover};
  }
  &:active {
    background-color: ${tokens.color.destructiveActive};
  }
`;

export const DestructiveButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <DestructiveButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </DestructiveButtonRoot>
);
DestructiveButton.displayName = 'DestructiveButton';
