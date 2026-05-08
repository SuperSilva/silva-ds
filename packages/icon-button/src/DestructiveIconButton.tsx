import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { IconButtonRoot, sizes } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.styles';

const DestructiveIconButtonRoot = styled(IconButtonRoot)`
  background-color: ${tokens.color.destructive};
  color: ${tokens.color.destructiveFg};
  &:hover {
    background-color: ${tokens.color.destructiveHover};
  }
  &:active {
    background-color: ${tokens.color.destructiveActive};
  }
`;

export const DestructiveIconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  className,
  ...props
}) => (
  <DestructiveIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </DestructiveIconButtonRoot>
);
DestructiveIconButton.displayName = 'DestructiveIconButton';
