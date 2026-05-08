import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { InputRoot, inputSizes } from './Input.styles';
import type { InputProps } from './Input.styles';

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function PasswordInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="password" className={cx(inputSizes[size], className)} {...props} />;
});
