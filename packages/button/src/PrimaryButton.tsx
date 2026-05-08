import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { ButtonRoot, sizes } from './Button.styles';
import type { ButtonProps } from './Button.styles';

const PrimaryButtonRoot = styled(ButtonRoot)`
  background-color: ${tokens.color.primary};
  color: ${tokens.color.primaryFg};
  &:hover {
    background-color: ${tokens.color.primaryHover};
  }
  &:active {
    background-color: ${tokens.color.primaryActive};
  }
`;

export const PrimaryButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <PrimaryButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </PrimaryButtonRoot>
);
PrimaryButton.displayName = 'PrimaryButton';
