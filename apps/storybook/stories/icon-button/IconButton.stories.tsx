import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconButton,
  PrimaryIconButton,
  SecondaryIconButton,
  OutlineIconButton,
  GhostIconButton,
  DestructiveIconButton,
} from '@design-system/icon-button';
import type { IconButtonSize } from '@design-system/icon-button';
import { Icon } from '@design-system/icons';

const meta: Meta<typeof GhostIconButton> = {
  title: 'Components/IconButton',
  component: GhostIconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Icon button variants exported as individual components. ' +
          'Requires an `aria-label` for accessibility — the label is not visually shown.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies IconButtonSize[],
      description: 'Button size (square dimensions match Button heights).',
      table: { defaultValue: { summary: "'md'" } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    'aria-label': 'Search',
    icon: <Icon name="search" />,
    size: 'md',
  },
};

export default meta;

export const Ghost: StoryObj<typeof GhostIconButton> = {
  render: (args) => <GhostIconButton {...args} />,
};

export const Primary: StoryObj<typeof PrimaryIconButton> = {
  render: (args) => <PrimaryIconButton {...args} />,
};

export const Secondary: StoryObj<typeof SecondaryIconButton> = {
  render: (args) => <SecondaryIconButton {...args} />,
};

export const Outline: StoryObj<typeof OutlineIconButton> = {
  render: (args) => <OutlineIconButton {...args} />,
};

export const Destructive: StoryObj<typeof DestructiveIconButton> = {
  args: { 'aria-label': 'Delete', icon: <Icon name="trash" /> },
  render: (args) => <DestructiveIconButton {...args} />,
};

export const Disabled: StoryObj<typeof GhostIconButton> = {
  args: { disabled: true },
  render: (args) => <GhostIconButton {...args} />,
};

export const AllVariants: StoryObj<typeof GhostIconButton> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <PrimaryIconButton aria-label="Primary" icon={<Icon name="search" />} />
      <SecondaryIconButton aria-label="Secondary" icon={<Icon name="search" />} />
      <OutlineIconButton aria-label="Outline" icon={<Icon name="search" />} />
      <GhostIconButton aria-label="Ghost" icon={<Icon name="search" />} />
      <DestructiveIconButton aria-label="Destructive" icon={<Icon name="trash" />} />
    </div>
  ),
};

export const Sizes: StoryObj<typeof GhostIconButton> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {(['sm', 'md', 'lg'] as IconButtonSize[]).map((size) => (
        <GhostIconButton key={size} aria-label={`size ${size}`} size={size} icon={<Icon name="plus" />} />
      ))}
    </div>
  ),
};

export const IconShowcase: StoryObj<typeof GhostIconButton> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <GhostIconButton aria-label="Search" icon={<Icon name="search" />} />
      <GhostIconButton aria-label="Close" icon={<Icon name="x" />} />
      <GhostIconButton aria-label="Add" icon={<Icon name="plus" />} />
      <DestructiveIconButton aria-label="Delete" icon={<Icon name="trash" />} />
    </div>
  ),
};

export const DefaultAlias: StoryObj<typeof GhostIconButton> = {
  name: 'IconButton alias (Ghost)',
  parameters: { controls: { disable: true } },
  render: () => <IconButton aria-label="Search" icon={<Icon name="search" />} />,
};
