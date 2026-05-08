import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { LinkBase, truncateStyle } from './Link.styles';

const DisplayLinkRoot = styled(LinkBase)`
  font-size: ${tokens.fontSize['2xl']};
  font-weight: ${tokens.fontWeight.bold};
  line-height: ${tokens.lineHeight.tight};
`;

export interface DisplayLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  truncate?: boolean;
  external?: boolean;
}

export const DisplayLink: React.FC<DisplayLinkProps> = ({
  truncate,
  external,
  className,
  children,
  ...props
}) => (
  <DisplayLinkRoot
    className={cx(truncate && truncateStyle, className)}
    target={external ? '_blank' : props.target}
    rel={external ? 'noopener noreferrer' : props.rel}
    {...props}
  >
    {children}
  </DisplayLinkRoot>
);
DisplayLink.displayName = 'DisplayLink';
