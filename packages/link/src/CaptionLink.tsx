import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { LinkBase, linkWeights, truncateStyle } from './Link.styles';
import type { LinkProps } from './Link.styles';

const CaptionLinkRoot = styled(LinkBase)`
  font-size: ${tokens.fontSize.sm};
  line-height: ${tokens.lineHeight.normal};
`;

export const CaptionLink: React.FC<LinkProps> = ({
  weight = 'regular',
  truncate,
  external,
  target,
  rel,
  className,
  children,
  ...props
}) => (
  <CaptionLinkRoot
    className={cx(linkWeights[weight], truncate && truncateStyle, className)}
    target={external ? '_blank' : target}
    rel={external ? 'noopener noreferrer' : rel}
    {...props}
  >
    {children}
  </CaptionLinkRoot>
);
CaptionLink.displayName = 'CaptionLink';
