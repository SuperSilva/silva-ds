import React from 'react';
import { FooterColumnRoot } from './Footer.styles';

export type FooterColumnProps = React.HTMLAttributes<HTMLDivElement>;

export const FooterColumn: React.FC<FooterColumnProps> = ({ className, children, ...props }) => (
  <FooterColumnRoot className={className} {...props}>
    {children}
  </FooterColumnRoot>
);
FooterColumn.displayName = 'FooterColumn';
