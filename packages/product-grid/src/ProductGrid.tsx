import React from 'react';
import { cx } from '@linaria/core';
import { ProductGridRoot, gridGaps } from './ProductGrid.styles';

export type ProductGridGap = 'sm' | 'md' | 'lg';

export interface ProductGridColumns {
  xs?: number;
  sm?: number;
  md?: number;
  xl?: number;
}

export interface ProductGridProps {
  children: React.ReactNode;
  columns?: ProductGridColumns;
  gap?: ProductGridGap;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ children, columns, gap = 'md', className }) => {
  const colVars = {
    '--pg-cols-xs': columns?.xs ?? 2,
    '--pg-cols-sm': columns?.sm ?? 3,
    '--pg-cols-md': columns?.md ?? 3,
    '--pg-cols-xl': columns?.xl ?? 4,
  } as React.CSSProperties;

  return (
    <ProductGridRoot style={colVars} className={cx(gridGaps[gap], className)}>
      {children}
    </ProductGridRoot>
  );
};
ProductGrid.displayName = 'ProductGrid';
