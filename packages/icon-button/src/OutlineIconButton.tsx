import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { IconButtonRoot, sizes } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.styles';

const OutlineIconButtonRoot = styled(IconButtonRoot)`
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

export const OutlineIconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', className, ...props }) => (
  <OutlineIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </OutlineIconButtonRoot>
);
OutlineIconButton.displayName = 'OutlineIconButton';
