import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextXs, TextSm, TextMd, TextLg, TextXl } from '@design-system/typography';
import type { TextWeight, TextColor } from '@design-system/typography';

const meta: Meta<typeof TextMd> = {
  title: 'Typography/Text',
  component: TextMd,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Text size variants exported as individual components. ' +
          'All are polymorphic via `as` and accept `weight`, `color`, and `truncate` props.',
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'strong', 'em'],
      description: 'The HTML element to render.',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'] satisfies TextWeight[],
      description: 'Font weight.',
      table: { defaultValue: { summary: "'regular'" } },
    },
    color: {
      control: 'select',
      options: ['default', 'subtle', 'disabled'] satisfies TextColor[],
      description: 'Text color from the theme palette.',
      table: { defaultValue: { summary: "'default'" } },
    },
    truncate: {
      control: 'boolean',
      description: 'Clamps text to one line with an ellipsis.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: { control: 'text' },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    weight: 'regular',
    color: 'default',
  },
};

export default meta;

export const Xs: StoryObj<typeof TextXs> = {
  render: (args) => <TextXs {...args} />,
};

export const Sm: StoryObj<typeof TextSm> = {
  render: (args) => <TextSm {...args} />,
};

export const Md: StoryObj<typeof TextMd> = {
  render: (args) => <TextMd {...args} />,
};

export const Lg: StoryObj<typeof TextLg> = {
  render: (args) => <TextLg {...args} />,
};

export const Xl: StoryObj<typeof TextXl> = {
  render: (args) => <TextXl {...args} />,
};

export const AllSizes: StoryObj<typeof TextMd> = {
  name: 'All size variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <TextXs>TextXs — The quick brown fox jumps over the lazy dog.</TextXs>
      <TextSm>TextSm — The quick brown fox jumps over the lazy dog.</TextSm>
      <TextMd>TextMd — The quick brown fox jumps over the lazy dog.</TextMd>
      <TextLg>TextLg — The quick brown fox jumps over the lazy dog.</TextLg>
      <TextXl>TextXl — The quick brown fox jumps over the lazy dog.</TextXl>
    </div>
  ),
};

export const Weights: StoryObj<typeof TextMd> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['regular', 'medium', 'semibold', 'bold'] as TextWeight[]).map((weight) => (
        <TextMd key={weight} weight={weight}>
          {weight} — The quick brown fox jumps over the lazy dog.
        </TextMd>
      ))}
    </div>
  ),
};

export const Colors: StoryObj<typeof TextMd> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['default', 'subtle', 'disabled'] as TextColor[]).map((color) => (
        <TextMd key={color} color={color}>
          {color} — The quick brown fox jumps over the lazy dog.
        </TextMd>
      ))}
    </div>
  ),
};

export const Truncate: StoryObj<typeof TextMd> = {
  render: () => (
    <div style={{ width: '200px' }}>
      <TextMd truncate>This text is too long and will be truncated with an ellipsis at the boundary.</TextMd>
    </div>
  ),
};

export const PolymorphicAs: StoryObj<typeof TextMd> = {
  name: 'Polymorphic (as)',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <TextMd as="p">as="p" — paragraph</TextMd>
      <TextMd as="span">as="span" — inline</TextMd>
      <TextMd as="strong" weight="bold">
        as="strong" — bold
      </TextMd>
      <TextMd as="em">as="em" — emphasis</TextMd>
    </div>
  ),
};

export const DefaultAlias: StoryObj<typeof TextMd> = {
  name: 'Text alias (TextMd)',
  parameters: { controls: { disable: true } },
  render: () => <Text>Text is an alias for TextMd.</Text>,
};
