import React from 'react';
import { FooterBottomRoot } from './Footer.styles';

export type FooterBottomProps = React.HTMLAttributes<HTMLDivElement>;

export const FooterBottom: React.FC<FooterBottomProps> = ({ className, children, ...props }) => (
  <FooterBottomRoot className={className} {...props}>
    {children}
  </FooterBottomRoot>
);
FooterBottom.displayName = 'FooterBottom';
