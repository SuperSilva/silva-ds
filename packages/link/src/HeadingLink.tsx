import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { LinkBase, truncateStyle } from './Link.styles';

const HeadingLinkRoot = styled(LinkBase)`
  font-size: ${tokens.fontSize.xl};
  font-weight: ${tokens.fontWeight.bold};
  line-height: ${tokens.lineHeight.tight};
`;

export interface HeadingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  truncate?: boolean;
  external?: boolean;
}

export const HeadingLink: React.FC<HeadingLinkProps> = ({
  truncate,
  external,
  className,
  children,
  ...props
}) => (
  <HeadingLinkRoot
    className={cx(truncate && truncateStyle, className)}
    target={external ? '_blank' : props.target}
    rel={external ? 'noopener noreferrer' : props.rel}
    {...props}
  >
    {children}
  </HeadingLinkRoot>
);
HeadingLink.displayName = 'HeadingLink';
