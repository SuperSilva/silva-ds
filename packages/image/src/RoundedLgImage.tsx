import React from 'react';
import { RoundedLgImageBase, dynamicStyle } from './Image.styles';
import type { ImageProps } from './Image.styles';

export const RoundedLgImage: React.FC<ImageProps> = ({
  fit,
  aspectRatio,
  width,
  height,
  style,
  ...props
}) => (
  <RoundedLgImageBase
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
RoundedLgImage.displayName = 'RoundedLgImage';
