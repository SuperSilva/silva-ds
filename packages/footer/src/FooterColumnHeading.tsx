import React from 'react';
import { Caption } from '@design-system/typography';
import type { CaptionProps } from '@design-system/typography';

export type FooterColumnHeadingProps = CaptionProps;

export const FooterColumnHeading: React.FC<FooterColumnHeadingProps> = ({
  as = 'p',
  weight = 'semibold',
  color = 'subtle',
  ...props
}) => <Caption as={as} weight={weight} color={color} {...props} />;
FooterColumnHeading.displayName = 'FooterColumnHeading';
