import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { ButtonRoot, sizes } from './Button.styles';
import type { ButtonProps } from './Button.styles';

const GhostButtonRoot = styled(ButtonRoot)`
  background-color: transparent;
  color: ${tokens.color.neutralFg};
  &:hover {
    background-color: ${tokens.color.neutralBgHover};
  }
  &:active {
    background-color: ${tokens.color.neutralBgActive};
  }
`;

export const GhostButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <GhostButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </GhostButtonRoot>
);
GhostButton.displayName = 'GhostButton';
