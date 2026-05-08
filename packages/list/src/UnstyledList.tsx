import React from 'react';
import { cx } from '@linaria/core';
import { UnstyledListRoot, gaps, nestedListStyle } from './List.styles';
import type { ListProps } from './UnorderedList';

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
