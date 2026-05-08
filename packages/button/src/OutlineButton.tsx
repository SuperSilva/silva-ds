import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { ButtonRoot, sizes } from './Button.styles';
import type { ButtonProps } from './Button.styles';

const OutlineButtonRoot = styled(ButtonRoot)`
  background-color: transparent;
  color: ${tokens.color.accent};
  border-color: ${tokens.color.accent};
  &:hover {
    background-color: ${tokens.color.accentBgHover};
  }
  &:active {
    background-color: ${tokens.color.accentBgActive};
  }
`;

export const OutlineButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <OutlineButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </OutlineButtonRoot>
);
OutlineButton.displayName = 'OutlineButton';
