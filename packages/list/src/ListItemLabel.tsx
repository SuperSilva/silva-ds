import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';

export type ListItemLabelProps = React.HTMLAttributes<HTMLSpanElement>;

export const ListItemLabel = styled.span`
  font-size: ${tokens.fontSize.md};
  font-weight: ${tokens.fontWeight.medium};
  color: ${tokens.color.textDefault};
  line-height: ${tokens.lineHeight.tight};
`;
ListItemLabel.displayName = 'ListItemLabel';
