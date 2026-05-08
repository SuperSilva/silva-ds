import React from 'react';
import { RoundedImageBase, dynamicStyle } from './Image.styles';
import type { ImageProps } from './Image.styles';

export const RoundedImage: React.FC<ImageProps> = ({ fit, aspectRatio, width, height, style, ...props }) => (
  <RoundedImageBase
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
RoundedImage.displayName = 'RoundedImage';
