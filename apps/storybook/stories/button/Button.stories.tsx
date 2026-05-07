import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  GhostButton,
  DestructiveButton,
} from '@design-system/button';
import type { ButtonSize } from '@design-system/button';

const SIZES: ButtonSize[] = ['sm', 'md', 'lg'];

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/Button',
  component: PrimaryButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button variants exported as individual components. ' +
          'All extend native `<button>` HTML attributes and accept a `size` prop.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies ButtonSize[],
      description: 'The size of the button.',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: "'md'" },
      },
    },
    children: {
      control: 'text',
      description: 'The button label or content.',
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    onClick: { action: 'clicked' },
  },
  args: { children: 'Button', size: 'md', disabled: false },
};

export default meta;

export const Primary: StoryObj<typeof PrimaryButton> = {
  render: (args) => <PrimaryButton {...args} />,
};

export const Secondary: StoryObj<typeof SecondaryButton> = {
  render: (args) => <SecondaryButton {...args} />,
};

export const Outline: StoryObj<typeof OutlineButton> = {
  render: (args) => <OutlineButton {...args} />,
};

export const Ghost: StoryObj<typeof GhostButton> = {
  render: (args) => <GhostButton {...args} />,
};

export const Destructive: StoryObj<typeof DestructiveButton> = {
  render: (args) => <DestructiveButton {...args} />,
};

export const Disabled: StoryObj<typeof PrimaryButton> = {
  args: { disabled: true },
  render: (args) => <PrimaryButton {...args} />,
};

export const AllVariants: StoryObj<typeof PrimaryButton> = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: 'All variant components across all three sizes.' },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <PrimaryButton size={size}>Primary</PrimaryButton>
          <SecondaryButton size={size}>Secondary</SecondaryButton>
          <OutlineButton size={size}>Outline</OutlineButton>
          <GhostButton size={size}>Ghost</GhostButton>
          <DestructiveButton size={size}>Destructive</DestructiveButton>
        </div>
      ))}
    </div>
  ),
};
