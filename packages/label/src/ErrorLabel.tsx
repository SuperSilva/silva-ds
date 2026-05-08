import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';
import { tokens } from '@design-system/theme';
import { LabelBase, labelSizes } from './Label.styles';
import type { LabelProps } from './Label.styles';

const ErrorLabelRoot = styled(LabelBase)`
  background-color: #fef2f2;
  color: ${tokens.color.destructive};
  border-color: #fecaca;
`;

export const ErrorLabel: React.FC<LabelProps> = ({ size = 'md', className, ...props }) => (
  <ErrorLabelRoot className={cx(labelSizes[size], className)} {...props} />
);
ErrorLabel.displayName = 'ErrorLabel';
