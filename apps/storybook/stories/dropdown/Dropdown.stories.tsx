import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DefaultDropdown, OutlineDropdown, Dropdown } from '@design-system/dropdown';
import type { DropdownSize } from '@design-system/dropdown';

const SIZES: DropdownSize[] = ['sm', 'md', 'lg'];

const OPTIONS = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
];

const OptionsList = () => (
  <>
    <option value="">Select an option</option>
    {OPTIONS.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </>
);

const meta: Meta<typeof DefaultDropdown> = {
  title: 'Components/Dropdown',
  component: DefaultDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown variants built on the native `<select>` element with a custom appearance. ' +
          'Supports all standard `<select>` attributes.',
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
  },
  args: { size: 'md', disabled: false },
};

export default meta;

export const Default: StoryObj<typeof DefaultDropdown> = {
  render: (args) => (
    <DefaultDropdown {...args}>
      <OptionsList />
    </DefaultDropdown>
  ),
};

export const Outline: StoryObj<typeof OutlineDropdown> = {
  render: (args) => (
    <OutlineDropdown {...args}>
      <OptionsList />
    </OutlineDropdown>
  ),
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
          <Component>
            <OptionsList />
          </Component>
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
        <DefaultDropdown key={size} size={size}>
          <option value="">{`size="${size}"`}</option>
          <OptionsList />
        </DefaultDropdown>
      ))}
    </div>
  ),
};

export const DefaultAlias: StoryObj = {
  name: 'Dropdown alias (Default)',
  parameters: { controls: { disable: true } },
  render: () => (
    <Dropdown style={{ maxWidth: '260px' }}>
      <OptionsList />
    </Dropdown>
  ),
};

export const DisabledState: StoryObj<typeof DefaultDropdown> = {
  name: 'Disabled',
  args: { disabled: true },
  render: (args) => (
    <DefaultDropdown {...args} style={{ maxWidth: '260px' }}>
      <OptionsList />
    </DefaultDropdown>
  ),
};
