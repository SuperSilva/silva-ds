import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { IconButtonRoot, sizes } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.styles';

const PrimaryIconButtonRoot = styled(IconButtonRoot)`
  background-color: ${tokens.color.primary};
  color: ${tokens.color.primaryFg};
  &:hover {
    background-color: ${tokens.color.primaryHover};
  }
  &:active {
    background-color: ${tokens.color.primaryActive};
  }
`;

export const PrimaryIconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', className, ...props }) => (
  <PrimaryIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </PrimaryIconButtonRoot>
);
PrimaryIconButton.displayName = 'PrimaryIconButton';
