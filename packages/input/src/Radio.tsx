import React, { forwardRef } from 'react';
import { RadioRoot } from './Input.styles';
import type { RadioProps } from './Input.styles';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({ className, ...props }, ref) {
  return <RadioRoot ref={ref} type="radio" className={className} {...props} />;
});
