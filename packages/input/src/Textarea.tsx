import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { TextareaRoot, textareaSizes } from './Input.styles';
import type { TextareaProps } from './Input.styles';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size = 'md', className, ...props },
  ref,
) {
  return <TextareaRoot ref={ref} className={cx(textareaSizes[size], className)} {...props} />;
});
