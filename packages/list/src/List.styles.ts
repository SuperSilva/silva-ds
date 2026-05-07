import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

// ─── List roots ───────────────────────────────────────────────────────────────

export const UnorderedListRoot = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: disc;
  padding-left: ${tokens.space[5]};
`;

export const OrderedListRoot = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: decimal;
  padding-left: ${tokens.space[5]};
`;

export const UnstyledListRoot = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const gaps = {
  sm: css`
    & > li + li {
      margin-top: ${tokens.space[1]};
    }
  `,
  md: css`
    & > li + li {
      margin-top: ${tokens.space[2]};
    }
  `,
  lg: css`
    & > li + li {
      margin-top: ${tokens.space[3]};
    }
  `,
} as const;

export const nestedListStyle = css`
  margin-top: ${tokens.space[2]};
  margin-bottom: 0;
`;

// ─── ListItem ─────────────────────────────────────────────────────────────────

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  font-size: ${tokens.fontSize.md};
  line-height: ${tokens.lineHeight.normal};
  color: ${tokens.color.textDefault};
`;

// ─── ListItemRow ──────────────────────────────────────────────────────────────

export const ListItemRowRoot = styled.div`
  display: flex;
  gap: ${tokens.space[3]};
  list-style: none;
`;

export const listItemRowAligns = {
  start: css`
    align-items: flex-start;
  `,
  center: css`
    align-items: center;
  `,
  end: css`
    align-items: flex-end;
  `,
} as const;

// ─── ListItemIcon ─────────────────────────────────────────────────────────────

export const ListItemIconRoot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${tokens.color.textSubtle};
  font-size: ${tokens.fontSize.lg};
  line-height: 1;
`;

// ─── ListItemImage ────────────────────────────────────────────────────────────

export const ListItemImageRoot = styled.img`
  display: block;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: ${tokens.radius.sm};
`;

export const listItemImageSizes = {
  sm: css`
    width: 32px;
    height: 32px;
  `,
  md: css`
    width: 40px;
    height: 40px;
  `,
  lg: css`
    width: 56px;
    height: 56px;
  `,
} as const;

// ─── ListItemContent ──────────────────────────────────────────────────────────

export const ListItemContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

// ─── ListItemLabel ────────────────────────────────────────────────────────────

export const ListItemLabel = styled.span`
  font-size: ${tokens.fontSize.md};
  font-weight: ${tokens.fontWeight.medium};
  color: ${tokens.color.textDefault};
  line-height: ${tokens.lineHeight.tight};
`;

// ─── ListItemSupportText ──────────────────────────────────────────────────────

export const ListItemSupportText = styled.span`
  font-size: ${tokens.fontSize.sm};
  color: ${tokens.color.textSubtle};
  line-height: ${tokens.lineHeight.normal};
`;
