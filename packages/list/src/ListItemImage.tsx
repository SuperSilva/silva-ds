import React from 'react';
import { cx } from '@linaria/core';
import type { ImageProps } from '@design-system/image';
import { ListItemImageRoot, listItemImageSizes } from './List.styles';

export type ListItemImageSize = keyof typeof listItemImageSizes;

export interface ListItemImageProps extends ImageProps {
  size?: ListItemImageSize;
}

export const ListItemImage: React.FC<ListItemImageProps> = ({ size = 'md', className, ...props }) => (
  <ListItemImageRoot fit="cover" className={cx(listItemImageSizes[size], className)} {...props} />
);
ListItemImage.displayName = 'ListItemImage';
