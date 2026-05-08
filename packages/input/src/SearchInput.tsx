import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { InputRoot, inputSizes } from './Input.styles';
import type { InputProps } from './Input.styles';

export const SearchInput = forwardRef<HTMLInputElement, InputProps>(function SearchInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="search" className={cx(inputSizes[size], className)} {...props} />;
});
