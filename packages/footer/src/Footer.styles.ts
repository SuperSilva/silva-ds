import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { tokens } from '@design-system/theme';

export const FooterRoot = styled.footer`
  width: 100%;
  padding: ${tokens.space[6]} 0 ${tokens.space[5]};
`;

export const FooterColumnsRoot = styled.div`
  display: grid;
  gap: ${tokens.space[6]};
`;

export const columnsClasses = {
  2: css`
    grid-template-columns: repeat(2, 1fr);
  `,
  3: css`
    grid-template-columns: repeat(3, 1fr);
  `,
  4: css`
    grid-template-columns: repeat(4, 1fr);
  `,
} as const;

export const FooterColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${tokens.space[2]};
`;

export const FooterBottomRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${tokens.space[3]};
  padding-top: ${tokens.space[5]};
  margin-top: ${tokens.space[5]};
  border-top: 1px solid ${tokens.color.border};
`;
