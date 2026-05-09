import React from 'react';
import { Footnote } from '@design-system/typography';
import type { FootnoteProps } from '@design-system/typography';

export type FooterCopyrightProps = FootnoteProps;

export const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  as = 'span',
  color = 'subtle',
  ...props
}) => <Footnote as={as} color={color} {...props} />;
FooterCopyright.displayName = 'FooterCopyright';
