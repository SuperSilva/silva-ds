import React from 'react';
import { cx } from '@linaria/core';
import { OrderedListRoot, gaps, nestedListStyle } from './List.styles';
import type { ListProps } from './UnorderedList';

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
