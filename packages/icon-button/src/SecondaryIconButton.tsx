import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { IconButtonRoot, sizes } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.styles';

const SecondaryIconButtonRoot = styled(IconButtonRoot)`
  background-color: ${tokens.color.secondary};
  color: ${tokens.color.secondaryFg};
  &:hover {
    background-color: ${tokens.color.secondaryHover};
  }
  &:active {
    background-color: ${tokens.color.secondaryActive};
  }
`;

export const SecondaryIconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  className,
  ...props
}) => (
  <SecondaryIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </SecondaryIconButtonRoot>
);
SecondaryIconButton.displayName = 'SecondaryIconButton';
