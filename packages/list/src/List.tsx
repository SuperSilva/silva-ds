import React from 'react';
import { cx } from '@linaria/core';
import {
  UnorderedListRoot,
  OrderedListRoot,
  UnstyledListRoot,
  gaps,
  nestedListStyle,
  ListItemRowRoot,
  listItemRowAligns,
  ListItemIconRoot,
  ListItemImageRoot,
  listItemImageSizes,
} from './List.styles';

export { ListItem, ListItemContent, ListItemLabel, ListItemSupportText } from './List.styles';

// ─── List variants ────────────────────────────────────────────────────────────

export type ListGap = keyof typeof gaps;

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  gap?: ListGap;
  nested?: boolean;
}

export const UnorderedList: React.FC<ListProps> = ({
  gap = 'md',
  nested = false,
  className,
  children,
  ...props
}) => (
  <UnorderedListRoot className={cx(gaps[gap], nested && nestedListStyle, className)} {...props}>
    {children}
  </UnorderedListRoot>
);
UnorderedList.displayName = 'UnorderedList';

export const OrderedList: React.FC<ListProps> = ({
  gap = 'md',
  nested = false,
  className,
  children,
  ...props
}) => (
  <OrderedListRoot className={cx(gaps[gap], nested && nestedListStyle, className)} {...props}>
    {children}
  </OrderedListRoot>
);
OrderedList.displayName = 'OrderedList';

export const UnstyledList: React.FC<ListProps> = ({
  gap = 'md',
  nested = false,
  className,
  children,
  ...props
}) => (
  <UnstyledListRoot className={cx(gaps[gap], nested && nestedListStyle, className)} {...props}>
    {children}
  </UnstyledListRoot>
);
UnstyledList.displayName = 'UnstyledList';

export const List = UnorderedList;

// ─── ListItem sub-components ──────────────────────────────────────────────────

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;
export type ListItemContentProps = React.HTMLAttributes<HTMLDivElement>;
export type ListItemLabelProps = React.HTMLAttributes<HTMLSpanElement>;
export type ListItemSupportTextProps = React.HTMLAttributes<HTMLSpanElement>;

export type ListItemRowAlign = keyof typeof listItemRowAligns;

export interface ListItemRowProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: ListItemRowAlign;
}

export const ListItemRow: React.FC<ListItemRowProps> = ({
  align = 'center',
  className,
  children,
  ...props
}) => (
  <ListItemRowRoot className={cx(listItemRowAligns[align], className)} {...props}>
    {children}
  </ListItemRowRoot>
);
ListItemRow.displayName = 'ListItemRow';

export type ListItemIconProps = React.HTMLAttributes<HTMLSpanElement>;

export const ListItemIcon: React.FC<ListItemIconProps> = ({ className, children, ...props }) => (
  <ListItemIconRoot aria-hidden="true" className={className} {...props}>
    {children}
  </ListItemIconRoot>
);
ListItemIcon.displayName = 'ListItemIcon';

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
