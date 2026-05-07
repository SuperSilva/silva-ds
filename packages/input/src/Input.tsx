import React, { forwardRef } from 'react';
import { cx } from '@linaria/core';
import { InputRoot, TextareaRoot, CheckboxRoot, RadioRoot, inputSizes, textareaSizes } from './Input.styles';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: InputSize;
}

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;
export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, InputProps>(function TextInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="text" className={cx(inputSizes[size], className)} {...props} />;
});

export const EmailInput = forwardRef<HTMLInputElement, InputProps>(function EmailInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="email" className={cx(inputSizes[size], className)} {...props} />;
});

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function PasswordInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="password" className={cx(inputSizes[size], className)} {...props} />;
});

export const NumberInput = forwardRef<HTMLInputElement, InputProps>(function NumberInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="number" className={cx(inputSizes[size], className)} {...props} />;
});

export const SearchInput = forwardRef<HTMLInputElement, InputProps>(function SearchInput(
  { size = 'md', className, ...props },
  ref,
) {
  return <InputRoot ref={ref} type="search" className={cx(inputSizes[size], className)} {...props} />;
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size = 'md', className, ...props },
  ref,
) {
  return <TextareaRoot ref={ref} className={cx(textareaSizes[size], className)} {...props} />;
});

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, ...props },
  ref,
) {
  return <CheckboxRoot ref={ref} type="checkbox" className={className} {...props} />;
});

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({ className, ...props }, ref) {
  return <RadioRoot ref={ref} type="radio" className={className} {...props} />;
});

export const Input = TextInput;
