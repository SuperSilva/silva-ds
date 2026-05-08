import React from 'react';
import { RoundedSmImageBase, dynamicStyle } from './Image.styles';
import type { ImageProps } from './Image.styles';

export const RoundedSmImage: React.FC<ImageProps> = ({
  fit,
  aspectRatio,
  width,
  height,
  style,
  ...props
}) => (
  <RoundedSmImageBase
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
RoundedSmImage.displayName = 'RoundedSmImage';
