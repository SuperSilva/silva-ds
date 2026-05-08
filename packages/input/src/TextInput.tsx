import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { InputRoot, inputSizes } from './Input.styles';
import type { InputProps } from './Input.styles';

export const TextInput = forwardRef<HTMLInputElement, InputProps>(function TextInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="text" className={cx(inputSizes[size], className)} {...props} />;
});
