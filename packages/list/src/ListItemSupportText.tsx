import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';

export type ListItemSupportTextProps = React.HTMLAttributes<HTMLSpanElement>;

export const ListItemSupportText = styled.span`
  font-size: ${tokens.fontSize.sm};
  color: ${tokens.color.textSubtle};
  line-height: ${tokens.lineHeight.normal};
`;
ListItemSupportText.displayName = 'ListItemSupportText';
