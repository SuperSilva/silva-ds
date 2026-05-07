import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export const InputRoot = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${tokens.color.border};
  border-radius: ${tokens.radius.md};
  font-family: inherit;
  color: ${tokens.color.textDefault};
  background-color: #ffffff;
  transition: ${tokens.transition.colors};
  outline: none;

  &::placeholder {
    color: ${tokens.color.textDisabled};
  }

  &:focus-visible {
    border-color: ${tokens.color.accent};
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${tokens.color.secondary};
  }
`;

export const TextareaRoot = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid ${tokens.color.border};
  border-radius: ${tokens.radius.md};
  font-family: inherit;
  color: ${tokens.color.textDefault};
  background-color: #ffffff;
  transition: ${tokens.transition.colors};
  outline: none;
  resize: vertical;
  min-height: 80px;
  line-height: ${tokens.lineHeight.normal};

  &::placeholder {
    color: ${tokens.color.textDisabled};
  }

  &:focus-visible {
    border-color: ${tokens.color.accent};
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${tokens.color.secondary};
  }
`;

export const CheckboxRoot = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 2px solid ${tokens.color.border};
  border-radius: ${tokens.radius.sm};
  background-color: #ffffff;
  cursor: pointer;
  transition: ${tokens.transition.colors};

  &:checked {
    background-color: ${tokens.color.primary};
    border-color: ${tokens.color.primary};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' fill='none'%3E%3Cpath d='M1 4l3 3 5-6' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 8px;
  }

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RadioRoot = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border: 2px solid ${tokens.color.border};
  border-radius: ${tokens.radius.full};
  background-color: #ffffff;
  cursor: pointer;
  transition: ${tokens.transition.colors};

  &:checked {
    border-color: ${tokens.color.primary};
    box-shadow: inset 0 0 0 4px ${tokens.color.primary};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.color.focusRing};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const inputSizes = {
  sm: css`
    height: ${tokens.input.heightSm};
    padding: 0 ${tokens.space[2]};
    font-size: ${tokens.fontSize.sm};
  `,
  md: css`
    height: ${tokens.input.heightMd};
    padding: 0 ${tokens.space[3]};
    font-size: ${tokens.fontSize.md};
  `,
  lg: css`
    height: ${tokens.input.heightLg};
    padding: 0 ${tokens.space[4]};
    font-size: ${tokens.fontSize.lg};
  `,
} as const;

export const textareaSizes = {
  sm: css`
    padding: ${tokens.space[2]};
    font-size: ${tokens.fontSize.sm};
  `,
  md: css`
    padding: ${tokens.space[3]};
    font-size: ${tokens.fontSize.md};
  `,
  lg: css`
    padding: ${tokens.space[4]};
    font-size: ${tokens.fontSize.lg};
  `,
} as const;
