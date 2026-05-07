import React from 'react';
import { cx } from '@linaria/core';
import {
  PrimaryButtonRoot,
  SecondaryButtonRoot,
  OutlineButtonRoot,
  GhostButtonRoot,
  DestructiveButtonRoot,
  sizes,
} from './Button.styles';

export type ButtonSize = keyof typeof sizes;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <PrimaryButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </PrimaryButtonRoot>
);
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <SecondaryButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </SecondaryButtonRoot>
);
SecondaryButton.displayName = 'SecondaryButton';

export const OutlineButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <OutlineButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </OutlineButtonRoot>
);
OutlineButton.displayName = 'OutlineButton';

export const GhostButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <GhostButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </GhostButtonRoot>
);
GhostButton.displayName = 'GhostButton';

export const DestructiveButton: React.FC<ButtonProps> = ({ size = 'md', className, children, ...props }) => (
  <DestructiveButtonRoot className={cx(sizes[size], className)} {...props}>
    {children}
  </DestructiveButtonRoot>
);
DestructiveButton.displayName = 'DestructiveButton';

export const Button = PrimaryButton;
