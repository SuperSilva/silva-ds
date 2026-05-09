import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DefaultDropdown, OutlineDropdown, Dropdown } from '@design-system/dropdown';
import type { DropdownOption, DropdownSize } from '@design-system/dropdown';

const SIZES: DropdownSize[] = ['sm', 'md', 'lg'];

const OPTIONS: DropdownOption[] = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'hr', label: 'Human Resources', disabled: true },
];

const meta: Meta<typeof DefaultDropdown> = {
  title: 'Components/Dropdown',
  component: DefaultDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Custom dropdown components built with a floating panel via React portals. ' +
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

export const Default: StoryObj<typeof DefaultDropdown> = {
  render: (args) => <DefaultDropdown {...args} style={{ maxWidth: '260px' }} />,
};

export const Outline: StoryObj<typeof OutlineDropdown> = {
  render: (args) => <OutlineDropdown {...args} style={{ maxWidth: '260px' }} />,
};

export const AllVariants: StoryObj = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '260px' }}>
      {[
        { Component: DefaultDropdown, label: 'DefaultDropdown' },
        { Component: OutlineDropdown, label: 'OutlineDropdown' },
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
        <DefaultDropdown key={size} options={OPTIONS} size={size} placeholder={`size="${size}"`} />
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
        <DefaultDropdown options={OPTIONS} value={value} onChange={setValue} />
        <span style={{ fontSize: '12px', color: '#71717a' }}>Selected: {value}</span>
      </div>
    );
  },
};

export const WithDisabledOptions: StoryObj = {
  name: 'With disabled options',
  parameters: { controls: { disable: true } },
  render: () => (
    <DefaultDropdown options={OPTIONS} placeholder="Select a department" style={{ maxWidth: '260px' }} />
  ),
};

export const DisabledState: StoryObj<typeof DefaultDropdown> = {
  name: 'Disabled',
  args: { disabled: true },
  render: (args) => <DefaultDropdown {...args} style={{ maxWidth: '260px' }} />,
};

export const DropdownAlias: StoryObj = {
  name: 'Dropdown alias (Default)',
  parameters: { controls: { disable: true } },
  render: () => (
    <Dropdown options={OPTIONS} placeholder="Dropdown = DefaultDropdown" style={{ maxWidth: '260px' }} />
  ),
};
