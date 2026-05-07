import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { DefaultDropdownRoot, OutlineDropdownRoot, dropdownSizes } from './Dropdown.styles';

export type DropdownSize = 'sm' | 'md' | 'lg';

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  size?: DropdownSize;
}

export const DefaultDropdown = forwardRef<HTMLSelectElement, DropdownProps>(function DefaultDropdown(
  { size = 'md', className, ...props },
  ref,
) {
  return <DefaultDropdownRoot ref={ref} className={cx(dropdownSizes[size], className)} {...props} />;
});

export const OutlineDropdown = forwardRef<HTMLSelectElement, DropdownProps>(function OutlineDropdown(
  { size = 'md', className, ...props },
  ref,
) {
  return <OutlineDropdownRoot ref={ref} className={cx(dropdownSizes[size], className)} {...props} />;
});

export const Dropdown = DefaultDropdown;
