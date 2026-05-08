import { styled } from '@linaria/react';

export type ListItemContentProps = React.HTMLAttributes<HTMLDivElement>;

export const ListItemContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
ListItemContent.displayName = 'ListItemContent';
