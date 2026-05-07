import React from 'react';
import { cx } from '@linaria/core';
import {
  TextXsRoot,
  TextSmRoot,
  TextMdRoot,
  TextLgRoot,
  TextXlRoot,
  textWeights,
  textColors,
  truncateStyle,
} from './Typography.styles';

export type TextWeight = keyof typeof textWeights;
export type TextColor = keyof typeof textColors;
export type TextAs = 'p' | 'span' | 'div' | 'strong' | 'em';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextAs;
  weight?: TextWeight;
  color?: TextColor;
  truncate?: boolean;
}

function textClass(weight: TextWeight, color: TextColor, truncate: boolean, className?: string) {
  return cx(textWeights[weight], textColors[color], truncate && truncateStyle, className);
}

export const TextXs: React.FC<TextProps> = ({
  as: Tag = 'p',
  weight = 'regular',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <TextXsRoot
    as={Tag as React.ElementType}
    className={textClass(weight, color, truncate, className)}
    {...props}
  >
    {children}
  </TextXsRoot>
);
TextXs.displayName = 'TextXs';

export const TextSm: React.FC<TextProps> = ({
  as: Tag = 'p',
  weight = 'regular',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <TextSmRoot
    as={Tag as React.ElementType}
    className={textClass(weight, color, truncate, className)}
    {...props}
  >
    {children}
  </TextSmRoot>
);
TextSm.displayName = 'TextSm';

export const TextMd: React.FC<TextProps> = ({
  as: Tag = 'p',
  weight = 'regular',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <TextMdRoot
    as={Tag as React.ElementType}
    className={textClass(weight, color, truncate, className)}
    {...props}
  >
    {children}
  </TextMdRoot>
);
TextMd.displayName = 'TextMd';

export const TextLg: React.FC<TextProps> = ({
  as: Tag = 'p',
  weight = 'regular',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <TextLgRoot
    as={Tag as React.ElementType}
    className={textClass(weight, color, truncate, className)}
    {...props}
  >
    {children}
  </TextLgRoot>
);
TextLg.displayName = 'TextLg';

export const TextXl: React.FC<TextProps> = ({
  as: Tag = 'p',
  weight = 'regular',
  color = 'default',
  truncate = false,
  className,
  children,
  ...props
}) => (
  <TextXlRoot
    as={Tag as React.ElementType}
    className={textClass(weight, color, truncate, className)}
    {...props}
  >
    {children}
  </TextXlRoot>
);
TextXl.displayName = 'TextXl';

export const Text = TextMd;
