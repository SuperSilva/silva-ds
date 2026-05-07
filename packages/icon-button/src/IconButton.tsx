import React from 'react';
import { cx } from '@linaria/core';
import {
  PrimaryIconButtonRoot,
  SecondaryIconButtonRoot,
  OutlineIconButtonRoot,
  GhostIconButtonRoot,
  DestructiveIconButtonRoot,
  sizes,
} from './IconButton.styles';

export type IconButtonSize = keyof typeof sizes;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  icon: React.ReactNode;
  size?: IconButtonSize;
}

export const PrimaryIconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', className, ...props }) => (
  <PrimaryIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </PrimaryIconButtonRoot>
);
PrimaryIconButton.displayName = 'PrimaryIconButton';

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

export const OutlineIconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', className, ...props }) => (
  <OutlineIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </OutlineIconButtonRoot>
);
OutlineIconButton.displayName = 'OutlineIconButton';

export const GhostIconButton: React.FC<IconButtonProps> = ({ icon, size = 'md', className, ...props }) => (
  <GhostIconButtonRoot type="button" className={cx(sizes[size], className)} {...props}>
    {icon}
  </GhostIconButtonRoot>
);
GhostIconButton.displayName = 'GhostIconButton';

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

export const IconButton = GhostIconButton;
