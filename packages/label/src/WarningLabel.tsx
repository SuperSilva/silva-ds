import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { LabelBase, labelSizes } from './Label.styles';
import type { LabelProps } from './Label.styles';

const WarningLabelRoot = styled(LabelBase)`
  background-color: #fef9c3;
  color: #92400e;
  border-color: #fde68a;
`;

export const WarningLabel: React.FC<LabelProps> = ({ size = 'md', className, ...props }) => (
  <WarningLabelRoot className={cx(labelSizes[size], className)} {...props} />
);
WarningLabel.displayName = 'WarningLabel';
