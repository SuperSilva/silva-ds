import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';
import { RoundedSmImage } from '@design-system/image';

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

export const ListItemIconRoot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${tokens.color.textSubtle};
  font-size: ${tokens.fontSize.lg};
  line-height: 1;
`;

export const ListItemImageRoot = styled(RoundedSmImage)`
  flex-shrink: 0;
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
