import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import type React from 'react';

export const ImageBase = styled.img`
  display: block;
  max-width: 100%;
`;

export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  src: string;
  alt: string;
  fit?: ImageFit;
  aspectRatio?: string;
  width?: string | number;
  height?: string | number;
}

export function dynamicStyle({ fit, aspectRatio, width, height, style }: ImageProps): React.CSSProperties {
  return { objectFit: fit, aspectRatio, width, height, ...style };
}

export const RoundedSmImageBase = styled(ImageBase)`
  border-radius: ${tokens.radius.sm};
`;

export const RoundedImageBase = styled(ImageBase)`
  border-radius: ${tokens.radius.md};
`;

export const RoundedLgImageBase = styled(ImageBase)`
  border-radius: ${tokens.radius.lg};
`;

export const CircularImageBase = styled(ImageBase)`
  border-radius: ${tokens.radius.full};
`;
