import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { IconButtonRoot, sizes } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.styles';

const ElevatedIconButtonRoot = styled(IconButtonRoot)`
  background-color: white;
  color: ${tokens.color.neutralFg};
  border-radius: ${tokens.radius.full};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${tokens.color.neutralBgHover};
  }

  &:active {
    background-color: ${tokens.color.neutralBgActive};
  }
`;

export const ElevatedIconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', className, ...props }) => (
  <ElevatedIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </ElevatedIconButtonRoot>
);
ElevatedIconButton.displayName = 'ElevatedIconButton';
