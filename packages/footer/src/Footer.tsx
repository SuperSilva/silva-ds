import React from 'react';
import { FooterRoot } from './Footer.styles';

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer: React.FC<FooterProps> = ({ className, children, ...props }) => (
  <FooterRoot className={className} {...props}>
    {children}
  </FooterRoot>
);
Footer.displayName = 'Footer';
