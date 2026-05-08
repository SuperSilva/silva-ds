import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footnote, Caption, Body, BodyBold, Lead, Heading, Display } from '@design-system/typography';
import type { TextColor, TextWeight } from '@design-system/typography';

const meta: Meta = {
  title: 'Typography/Overview',
  parameters: {
    docs: {
      description: {
        component:
          'Semantic typography variants — each enforces its own font-size and renders as the most appropriate ' +
          'HTML element by default. Use the `as` prop to change the semantic element without changing the visual style.',
      },
    },
  },
};

export default meta;

export const AllVariants: StoryObj = {
  name: 'All variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Display>Display — page-level title</Display>
      <Heading>Heading — section heading</Heading>
      <Lead>Lead — intro paragraph or emphasized body copy</Lead>
      <Body>Body — default body text for paragraphs</Body>
      <BodyBold>BodyBold — body text with enforced bold weight</BodyBold>
      <Caption>Caption — small helper text or labels</Caption>
      <Footnote>Footnote — smallest text for legal or supplemental content</Footnote>
    </div>
  ),
};

export const DisplayStory: StoryObj = {
  name: 'Display',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Display>The quick brown fox jumps over the lazy dog</Display>
      <Display as="h2">as="h2" — same style, different semantic level</Display>
    </div>
  ),
};

export const HeadingStory: StoryObj = {
  name: 'Heading',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Heading>The quick brown fox jumps over the lazy dog</Heading>
      <Heading as="h3">as="h3" — same style, different semantic level</Heading>
    </div>
  ),
};

export const LeadStory: StoryObj = {
  name: 'Lead',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Lead>The quick brown fox jumps over the lazy dog.</Lead>
      <Lead weight="semibold">Semibold lead paragraph.</Lead>
    </div>
  ),
};

export const BodyStory: StoryObj = {
  name: 'Body',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Body>The quick brown fox jumps over the lazy dog.</Body>
      <BodyBold>BodyBold — bold enforced, no weight prop needed.</BodyBold>
    </div>
  ),
};

export const SmallTextStory: StoryObj = {
  name: 'Caption & Footnote',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Caption>Caption — helper text, labels, metadata</Caption>
      <Footnote>Footnote — legal text, disclaimers, supplemental info</Footnote>
    </div>
  ),
};

export const WeightsStory: StoryObj = {
  name: 'Weights (Body)',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['regular', 'medium', 'semibold', 'bold'] as TextWeight[]).map((weight) => (
        <Body key={weight} weight={weight}>
          {weight} — The quick brown fox jumps over the lazy dog.
        </Body>
      ))}
    </div>
  ),
};

export const ColorsStory: StoryObj = {
  name: 'Colors',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['default', 'subtle', 'disabled'] as TextColor[]).map((color) => (
        <Body key={color} color={color}>
          {color} — The quick brown fox jumps over the lazy dog.
        </Body>
      ))}
    </div>
  ),
};

export const PolymorphicStory: StoryObj = {
  name: 'Polymorphic (as)',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <Body as="p">Body as="p" — paragraph</Body>
      <Body as="span">Body as="span" — inline</Body>
      <Body as="div">Body as="div" — block div</Body>
      <Heading as="h1">Heading as="h1"</Heading>
      <Heading as="h3">Heading as="h3"</Heading>
    </div>
  ),
};

export const TruncateStory: StoryObj = {
  name: 'Truncate',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: '200px' }}>
      <Body truncate>This text is too long and will be truncated with an ellipsis at the boundary.</Body>
    </div>
  ),
};
