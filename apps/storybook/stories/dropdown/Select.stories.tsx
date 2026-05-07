import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DefaultSelect, OutlineSelect } from '@design-system/dropdown';
import { LayerProvider } from '@design-system/layers';
import type { SelectOption } from '@design-system/dropdown';
import type { DropdownSize } from '@design-system/dropdown';

const SIZES: DropdownSize[] = ['sm', 'md', 'lg'];

const OPTIONS: SelectOption[] = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'hr', label: 'Human Resources', disabled: true },
];

const meta: Meta<typeof DefaultSelect> = {
  title: 'Components/Select',
  component: DefaultSelect,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LayerProvider>
        <Story />
      </LayerProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Custom select components built with a floating panel via React portals. ' +
          'Supports keyboard navigation, controlled and uncontrolled modes, and disabled options.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: SIZES,
      table: { defaultValue: { summary: "'md'" } },
    },
    disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    placeholder: { control: 'text' },
  },
  args: { options: OPTIONS, size: 'md', disabled: false, placeholder: 'Select a department' },
};

export default meta;

export const Default: StoryObj<typeof DefaultSelect> = {
  render: (args) => <DefaultSelect {...args} style={{ maxWidth: '260px' }} />,
};

export const Outline: StoryObj<typeof OutlineSelect> = {
  render: (args) => <OutlineSelect {...args} style={{ maxWidth: '260px' }} />,
};

export const AllVariants: StoryObj = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '260px' }}>
      {[
        { Component: DefaultSelect, label: 'DefaultSelect' },
        { Component: OutlineSelect, label: 'OutlineSelect' },
      ].map(({ Component, label }) => (
        <div key={label}>
          <span style={{ fontSize: '11px', color: '#71717a', display: 'block', marginBottom: '4px' }}>
            {label}
          </span>
          <Component options={OPTIONS} placeholder="Select an option" />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '260px' }}>
      {SIZES.map((size) => (
        <DefaultSelect key={size} options={OPTIONS} size={size} placeholder={`size="${size}"`} />
      ))}
    </div>
  ),
};

export const Controlled: StoryObj = {
  name: 'Controlled',
  parameters: { controls: { disable: true } },
  render: () => {
    const [value, setValue] = useState('engineering');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '260px' }}>
        <DefaultSelect options={OPTIONS} value={value} onChange={setValue} />
        <span style={{ fontSize: '12px', color: '#71717a' }}>Selected: {value}</span>
      </div>
    );
  },
};

export const WithDisabledOptions: StoryObj = {
  name: 'With disabled options',
  parameters: { controls: { disable: true } },
  render: () => (
    <DefaultSelect options={OPTIONS} placeholder="Select a department" style={{ maxWidth: '260px' }} />
  ),
};

export const DisabledState: StoryObj<typeof DefaultSelect> = {
  name: 'Disabled',
  args: { disabled: true },
  render: (args) => <DefaultSelect {...args} style={{ maxWidth: '260px' }} />,
};
