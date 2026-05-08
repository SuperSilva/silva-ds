import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { ButtonRoot, sizes } from './Button.styles';
import type { ButtonProps } from './Button.styles';

const SecondaryButtonRoot = styled(ButtonRoot)`
  background-color: ${tokens.color.secondary};
  color: ${tokens.color.secondaryFg};
  &:hover {
    background-color: ${tokens.color.secondaryHover};
  }
  &:active {
    background-color: ${tokens.color.secondaryActive};
  }
`;

export const SecondaryButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <SecondaryButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </SecondaryButtonRoot>
);
SecondaryButton.displayName = 'SecondaryButton';
