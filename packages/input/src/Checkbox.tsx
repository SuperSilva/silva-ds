import React, { forwardRef } from 'react';
import { CheckboxRoot } from './Input.styles';
import type { CheckboxProps } from './Input.styles';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, ...props },
  ref,
) {
  return <CheckboxRoot ref={ref} type="checkbox" className={className} {...props} />;
});
