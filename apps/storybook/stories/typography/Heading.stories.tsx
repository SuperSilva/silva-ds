import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading, H1, H2, H3, H4, H5, H6 } from '@design-system/typography';
import type { HeadingSize, HeadingWeight, HeadingColor } from '@design-system/typography';

const meta: Meta<typeof H1> = {
  title: 'Typography/Heading',
  component: H1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Heading levels exported as individual components (H1–H6). ' +
          'The visual size is independent of the semantic level via the `size` override prop.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'] satisfies HeadingSize[],
      description: 'Visual size override. Defaults to a sensible size for each level.',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'] satisfies HeadingWeight[],
      description: 'Font weight.',
      table: { defaultValue: { summary: "'bold'" } },
    },
    color: {
      control: 'select',
      options: ['default', 'subtle', 'disabled'] satisfies HeadingColor[],
      description: 'Text color.',
      table: { defaultValue: { summary: "'default'" } },
    },
    children: { control: 'text' },
  },
  args: {
    children: 'The quick brown fox',
    weight: 'bold',
    color: 'default',
  },
};

export default meta;

export const Heading1: StoryObj<typeof H1> = {
  name: 'H1',
  render: (args) => <H1 {...args} />,
};

export const Heading2: StoryObj<typeof H2> = {
  name: 'H2',
  render: (args) => <H2 {...args} />,
};

export const Heading3: StoryObj<typeof H3> = {
  name: 'H3',
  render: (args) => <H3 {...args} />,
};

export const Heading4: StoryObj<typeof H4> = {
  name: 'H4',
  render: (args) => <H4 {...args} />,
};

export const Heading5: StoryObj<typeof H5> = {
  name: 'H5',
  render: (args) => <H5 {...args} />,
};

export const Heading6: StoryObj<typeof H6> = {
  name: 'H6',
  render: (args) => <H6 {...args} />,
};

export const AllLevels: StoryObj<typeof H1> = {
  name: 'All levels',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <H1>H1 — The quick brown fox</H1>
      <H2>H2 — The quick brown fox</H2>
      <H3>H3 — The quick brown fox</H3>
      <H4>H4 — The quick brown fox</H4>
      <H5>H5 — The quick brown fox</H5>
      <H6>H6 — The quick brown fox</H6>
    </div>
  ),
};

export const Weights: StoryObj<typeof H1> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {(['regular', 'medium', 'semibold', 'bold'] as HeadingWeight[]).map((weight) => (
        <H2 key={weight} weight={weight}>
          {weight} — The quick brown fox
        </H2>
      ))}
    </div>
  ),
};

export const DecoupledSizeAndLevel: StoryObj<typeof H1> = {
  name: 'Decoupled size & level',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <H1 size="lg">H1 rendered at "lg" size (sub-heading role)</H1>
      <H2 size="3xl">H2 rendered at "3xl" size (hero treatment)</H2>
    </div>
  ),
};

export const DefaultAlias: StoryObj<typeof H1> = {
  name: 'Heading alias (H1)',
  parameters: { controls: { disable: true } },
  render: () => <Heading>Heading is an alias for H1.</Heading>,
};
