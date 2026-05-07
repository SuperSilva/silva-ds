import React from 'react';
import {
  ImageStyled,
  RoundedSmImageStyled,
  RoundedImageStyled,
  RoundedLgImageStyled,
  CircularImageStyled,
} from './Image.styles';

export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  src: string;
  alt: string;
  fit?: ImageFit;
  aspectRatio?: string;
  width?: string | number;
  height?: string | number;
}

function dynamicStyle({ fit, aspectRatio, width, height, style }: ImageProps): React.CSSProperties {
  return { objectFit: fit, aspectRatio, width, height, ...style };
}

export const Image: React.FC<ImageProps> = ({ fit, aspectRatio, width, height, style, ...props }) => (
  <ImageStyled style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)} {...props} />
);
Image.displayName = 'Image';

export const RoundedSmImage: React.FC<ImageProps> = ({
  fit,
  aspectRatio,
  width,
  height,
  style,
  ...props
}) => (
  <RoundedSmImageStyled
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
RoundedSmImage.displayName = 'RoundedSmImage';

export const RoundedImage: React.FC<ImageProps> = ({ fit, aspectRatio, width, height, style, ...props }) => (
  <RoundedImageStyled
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
RoundedImage.displayName = 'RoundedImage';

export const RoundedLgImage: React.FC<ImageProps> = ({
  fit,
  aspectRatio,
  width,
  height,
  style,
  ...props
}) => (
  <RoundedLgImageStyled
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
RoundedLgImage.displayName = 'RoundedLgImage';

export const CircularImage: React.FC<ImageProps> = ({ fit, aspectRatio, width, height, style, ...props }) => (
  <CircularImageStyled
    style={dynamicStyle({ fit, aspectRatio, width, height, style } as ImageProps)}
    {...props}
  />
);
CircularImage.displayName = 'CircularImage';
