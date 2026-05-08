import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { InputRoot, inputSizes } from './Input.styles';
import type { InputProps } from './Input.styles';

export const NumberInput = forwardRef<HTMLInputElement, InputProps>(function NumberInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="number" className={cx(inputSizes[size], className)} {...props} />;
});
