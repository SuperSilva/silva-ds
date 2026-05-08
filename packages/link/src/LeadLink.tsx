import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { LinkBase, linkWeights, truncateStyle } from './Link.styles';
import type { LinkProps } from './Link.styles';

const LeadLinkRoot = styled(LinkBase)`
  font-size: ${tokens.fontSize.lg};
  line-height: ${tokens.lineHeight.relaxed};
`;

export const LeadLink: React.FC<LinkProps> = ({
  weight = 'regular',
  truncate,
  external,
  target,
  rel,
  className,
  children,
  ...props
}) => (
  <LeadLinkRoot
    className={cx(linkWeights[weight], truncate && truncateStyle, className)}
    target={external ? '_blank' : target}
    rel={external ? 'noopener noreferrer' : rel}
    {...props}
  >
    {children}
  </LeadLinkRoot>
);
LeadLink.displayName = 'LeadLink';
