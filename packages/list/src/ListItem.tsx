import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import type React from 'react';

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  font-size: ${tokens.fontSize.md};
  line-height: ${tokens.lineHeight.normal};
  color: ${tokens.color.textDefault};
`;
ListItem.displayName = 'ListItem';
