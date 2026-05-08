import React from 'react';
import { CircularImageBase, dynamicStyle } from './Image.styles';
import type { ImageProps } from './Image.styles';

export const CircularImage: React.FC<ImageProps> = ({ fit, aspectRatio, width, height, style, ...props }) => (
  <CircularImageBase
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
CircularImage.displayName = 'CircularImage';
