import React from 'react';
import { cx } from '@linaria/core';
import { UnorderedListRoot, gaps, nestedListStyle } from './List.styles';

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
