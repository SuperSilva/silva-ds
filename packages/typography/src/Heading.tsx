import React from 'react';
import { cx } from '@linaria/core';
import { HeadingRoot, headingSizes, textWeights, textColors } from './Typography.styles';

export type HeadingSize = keyof typeof headingSizes;
export type HeadingWeight = keyof typeof textWeights;
export type HeadingColor = keyof typeof textColors;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: HeadingSize;
  weight?: HeadingWeight;
  color?: HeadingColor;
}

function headingClass(size: HeadingSize, weight: HeadingWeight, color: HeadingColor, className?: string) {
  return cx(headingSizes[size], textWeights[weight], textColors[color], className);
}

export const H1: React.FC<HeadingProps> = ({
  size = '3xl',
  weight = 'bold',
  color = 'default',
  className,
  children,
  ...props
}) => (
  <HeadingRoot as="h1" className={headingClass(size, weight, color, className)} {...props}>
    {children}
  </HeadingRoot>
);
H1.displayName = 'H1';

export const H2: React.FC<HeadingProps> = ({
  size = '2xl',
  weight = 'bold',
  color = 'default',
  className,
  children,
  ...props
}) => (
  <HeadingRoot as="h2" className={headingClass(size, weight, color, className)} {...props}>
    {children}
  </HeadingRoot>
);
H2.displayName = 'H2';

export const H3: React.FC<HeadingProps> = ({
  size = 'xl',
  weight = 'bold',
  color = 'default',
  className,
  children,
  ...props
}) => (
  <HeadingRoot as="h3" className={headingClass(size, weight, color, className)} {...props}>
    {children}
  </HeadingRoot>
);
H3.displayName = 'H3';

export const H4: React.FC<HeadingProps> = ({
  size = 'lg',
  weight = 'bold',
  color = 'default',
  className,
  children,
  ...props
}) => (
  <HeadingRoot as="h4" className={headingClass(size, weight, color, className)} {...props}>
    {children}
  </HeadingRoot>
);
H4.displayName = 'H4';

export const H5: React.FC<HeadingProps> = ({
  size = 'md',
  weight = 'bold',
  color = 'default',
  className,
  children,
  ...props
}) => (
  <HeadingRoot as="h5" className={headingClass(size, weight, color, className)} {...props}>
    {children}
  </HeadingRoot>
);
H5.displayName = 'H5';

export const H6: React.FC<HeadingProps> = ({
  size = 'sm',
  weight = 'bold',
  color = 'default',
  className,
  children,
  ...props
}) => (
  <HeadingRoot as="h6" className={headingClass(size, weight, color, className)} {...props}>
    {children}
  </HeadingRoot>
);
H6.displayName = 'H6';

export const Heading = H1;
