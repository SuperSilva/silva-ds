import React from 'react';
import { cx } from '@linaria/core';
import { ListItemImageRoot, listItemImageSizes } from './List.styles';

export type ListItemImageSize = keyof typeof listItemImageSizes;

export interface ListItemImageProps extends Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'width' | 'height'
> {
  src: string;
  alt: string;
  size?: ListItemImageSize;
}

export const ListItemImage: React.FC<ListItemImageProps> = ({ size = 'md', className, ...props }) => (
  <ListItemImageRoot className={cx(listItemImageSizes[size], className)} {...props} />
);
ListItemImage.displayName = 'ListItemImage';
