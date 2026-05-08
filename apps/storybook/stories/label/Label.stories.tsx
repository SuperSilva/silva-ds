import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NeutralLabel, InfoLabel, SuccessLabel, WarningLabel, ErrorLabel } from '@design-system/label';

const meta: Meta = {
  title: 'Components/Label',
  parameters: { layout: 'centered' },
};
export default meta;

export const AllVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
      <NeutralLabel>Draft</NeutralLabel>
      <InfoLabel>Info</InfoLabel>
      <SuccessLabel>Active</SuccessLabel>
      <WarningLabel>Pending</WarningLabel>
      <ErrorLabel>Error</ErrorLabel>
    </div>
  ),
};

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#71717a', width: 24 }}>sm</span>
        <NeutralLabel size="sm">Draft</NeutralLabel>
        <InfoLabel size="sm">Info</InfoLabel>
        <SuccessLabel size="sm">Active</SuccessLabel>
        <WarningLabel size="sm">Pending</WarningLabel>
        <ErrorLabel size="sm">Error</ErrorLabel>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#71717a', width: 24 }}>md</span>
        <NeutralLabel size="md">Draft</NeutralLabel>
        <InfoLabel size="md">Info</InfoLabel>
        <SuccessLabel size="md">Active</SuccessLabel>
        <WarningLabel size="md">Pending</WarningLabel>
        <ErrorLabel size="md">Error</ErrorLabel>
      </div>
    </div>
  ),
};

export const Neutral: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <NeutralLabel>Draft</NeutralLabel>
      <NeutralLabel>Archived</NeutralLabel>
      <NeutralLabel>Closed</NeutralLabel>
    </div>
  ),
};

export const Semantic: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <InfoLabel>In Review</InfoLabel>
        <SuccessLabel>Approved</SuccessLabel>
        <WarningLabel>Needs Attention</WarningLabel>
        <ErrorLabel>Rejected</ErrorLabel>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <SuccessLabel>In Stock</SuccessLabel>
        <WarningLabel>Low Stock</WarningLabel>
        <ErrorLabel>Out of Stock</ErrorLabel>
      </div>
    </div>
  ),
};
