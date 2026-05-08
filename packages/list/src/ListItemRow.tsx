import React from 'react';
import { cx } from '@linaria/core';
import { ListItemRowRoot, listItemRowAligns } from './List.styles';

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
