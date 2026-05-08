import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { InputRoot, inputSizes } from './Input.styles';
import type { InputProps } from './Input.styles';

export const EmailInput = forwardRef<HTMLInputElement, InputProps>(function EmailInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="email" className={cx(inputSizes[size], className)} {...props} />;
});
