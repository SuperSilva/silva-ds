import React from 'react';
import { ListItemIconRoot } from './List.styles';

export type ListItemIconProps = React.HTMLAttributes<HTMLSpanElement>;

export const ListItemIcon: React.FC<ListItemIconProps> = ({ className, children, ...props }) => (
  <ListItemIconRoot aria-hidden="true" className={className} {...props}>
    {children}
  </ListItemIconRoot>
);
ListItemIcon.displayName = 'ListItemIcon';
