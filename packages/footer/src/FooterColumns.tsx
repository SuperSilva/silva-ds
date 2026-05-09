import React from 'react';
import { cx } from '@linaria/core';
import { FooterColumnsRoot, columnsClasses } from './Footer.styles';

export type FooterColumnsCount = 2 | 3 | 4;

export interface FooterColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: FooterColumnsCount;
}

export const FooterColumns: React.FC<FooterColumnsProps> = ({
  columns = 4,
  className,
  children,
  ...props
}) => (
  <FooterColumnsRoot className={cx(columnsClasses[columns], className)} {...props}>
    {children}
  </FooterColumnsRoot>
);
FooterColumns.displayName = 'FooterColumns';
