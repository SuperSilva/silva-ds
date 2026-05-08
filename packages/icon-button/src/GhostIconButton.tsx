import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { IconButtonRoot, sizes } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.styles';

const GhostIconButtonRoot = styled(IconButtonRoot)`
  background-color: transparent;
  color: ${tokens.color.neutralFg};
  &:hover {
    background-color: ${tokens.color.neutralBgHover};
  }
  &:active {
    background-color: ${tokens.color.neutralBgActive};
  }
`;

export const GhostIconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', className, ...props }) => (
  <GhostIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </GhostIconButtonRoot>
);
GhostIconButton.displayName = 'GhostIconButton';
