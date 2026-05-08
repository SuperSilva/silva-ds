import React from 'react';
import { ImageBase, dynamicStyle } from './Image.styles';
import type { ImageProps } from './Image.styles';

export type { ImageProps };

export const Image: React.FC<ImageProps> = ({ fit, aspectRatio, width, height, style, ...props }) => (
  <ImageBase style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)} {...props} />
);
Image.displayName = 'Image';
