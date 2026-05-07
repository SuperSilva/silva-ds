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

const SearchIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TrashIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 4h10M6 4V2h4v2M5 4l.5 9h5L11 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
    icon: <SearchIcon />,
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
  args: { 'aria-label': 'Delete', icon: <TrashIcon /> },
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
      <PrimaryIconButton aria-label="Primary" icon={<SearchIcon />} />
      <SecondaryIconButton aria-label="Secondary" icon={<SearchIcon />} />
      <OutlineIconButton aria-label="Outline" icon={<SearchIcon />} />
      <GhostIconButton aria-label="Ghost" icon={<SearchIcon />} />
      <DestructiveIconButton aria-label="Destructive" icon={<TrashIcon />} />
    </div>
  ),
};

export const Sizes: StoryObj<typeof GhostIconButton> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {(['sm', 'md', 'lg'] as IconButtonSize[]).map((size) => (
        <GhostIconButton key={size} aria-label={`size ${size}`} size={size} icon={<PlusIcon />} />
      ))}
    </div>
  ),
};

export const IconShowcase: StoryObj<typeof GhostIconButton> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <GhostIconButton aria-label="Search" icon={<SearchIcon />} />
      <GhostIconButton aria-label="Close" icon={<CloseIcon />} />
      <GhostIconButton aria-label="Add" icon={<PlusIcon />} />
      <DestructiveIconButton aria-label="Delete" icon={<TrashIcon />} />
    </div>
  ),
};

export const DefaultAlias: StoryObj<typeof GhostIconButton> = {
  name: 'IconButton alias (Ghost)',
  parameters: { controls: { disable: true } },
  render: () => <IconButton aria-label="Search" icon={<SearchIcon />} />,
};
