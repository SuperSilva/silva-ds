import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { LabelBase, labelSizes } from './Label.styles';
import type { LabelProps } from './Label.styles';

const InfoLabelRoot = styled(LabelBase)`
  background-color: ${tokens.color.accentBgHover};
  color: ${tokens.color.accent};
  border-color: ${tokens.color.accentBgActive};
`;

export const InfoLabel: React.FC<LabelProps> = ({ size = 'md', className, ...props }) => (
  <InfoLabelRoot className={cx(labelSizes[size], className)} {...props} />
);
InfoLabel.displayName = 'InfoLabel';
