import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { LabelBase, labelSizes } from './Label.styles';
import type { LabelProps } from './Label.styles';

const SuccessLabelRoot = styled(LabelBase)`
  background-color: #dcfce7;
  color: #15803d;
  border-color: #bbf7d0;
`;

export const SuccessLabel: React.FC<LabelProps> = ({ size = 'md', className, ...props }) => (
  <SuccessLabelRoot className={cx(labelSizes[size], className)} {...props} />
);
SuccessLabel.displayName = 'SuccessLabel';
