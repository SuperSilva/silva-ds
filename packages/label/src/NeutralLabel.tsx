import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { LabelBase, labelSizes } from './Label.styles';
import type { LabelProps } from './Label.styles';

const NeutralLabelRoot = styled(LabelBase)`
  background-color: ${tokens.color.neutralBgHover};
  color: ${tokens.color.textDefault};
  border-color: ${tokens.color.border};
`;

export const NeutralLabel: React.FC<LabelProps> = ({ size = 'md', className, ...props }) => (
  <NeutralLabelRoot className={cx(labelSizes[size], className)} {...props} />
);
NeutralLabel.displayName = 'NeutralLabel';
