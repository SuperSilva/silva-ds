import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Image, RoundedSmImage, RoundedImage, RoundedLgImage, CircularImage } from '@design-system/image';
import type { ImageFit } from '@design-system/image';

const placeholder = (w: number, h: number, label = 'Image') =>
  `https://placehold.co/${w}x${h}/e4e4e7/71717a?text=${encodeURIComponent(label)}`;

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Image variants exported as individual components based on border-radius. ' +
          'Built on the native `<img>` element. Supports `object-fit`, and CSS `aspect-ratio`.',
      },
    },
  },
  argTypes: {
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'] satisfies ImageFit[],
      description: 'CSS `object-fit` value.',
    },
    aspectRatio: {
      control: 'text',
      description: 'CSS `aspect-ratio` value (e.g. `16/9`, `1/1`).',
    },
    width: { control: 'text', description: 'CSS width.' },
    height: { control: 'text', description: 'CSS height.' },
    alt: { control: 'text' },
    src: { control: 'text' },
  },
  args: {
    src: placeholder(400, 300),
    alt: 'Placeholder image',
    fit: 'cover',
  },
};

export default meta;

export const Default: StoryObj<typeof Image> = {
  render: (args) => <Image {...args} />,
};

export const Rounded: StoryObj<typeof RoundedImage> = {
  render: (args) => <RoundedImage {...args} />,
};

export const RoundedSm: StoryObj<typeof RoundedSmImage> = {
  render: (args) => <RoundedSmImage {...args} />,
};

export const RoundedLg: StoryObj<typeof RoundedLgImage> = {
  render: (args) => <RoundedLgImage {...args} />,
};

export const Circular: StoryObj<typeof CircularImage> = {
  args: { src: placeholder(300, 300), width: 80, height: 80 },
  render: (args) => <CircularImage {...args} />,
};

export const AllVariants: StoryObj<typeof Image> = {
  name: 'All radius variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {[
        { Component: Image, label: 'Image' },
        { Component: RoundedSmImage, label: 'RoundedSmImage' },
        { Component: RoundedImage, label: 'RoundedImage' },
        { Component: RoundedLgImage, label: 'RoundedLgImage' },
        { Component: CircularImage, label: 'CircularImage' },
      ].map(({ Component, label }) => (
        <div key={label} style={{ textAlign: 'center' }}>
          <Component src={placeholder(80, 80)} alt={label} width={80} height={80} fit="cover" />
          <span style={{ fontSize: '10px', color: '#71717a', display: 'block', marginTop: '4px' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const AspectRatios: StoryObj<typeof Image> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
      {['16/9', '4/3', '1/1', '3/4'].map((ratio) => (
        <div key={ratio}>
          <RoundedImage
            src={placeholder(400, 300, ratio)}
            alt={`${ratio} aspect ratio`}
            aspectRatio={ratio}
            width={120}
            fit="cover"
          />
          <span style={{ fontSize: '11px', color: '#71717a', marginTop: '4px', display: 'block' }}>
            {ratio}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const ObjectFit: StoryObj<typeof Image> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      {(['cover', 'contain', 'fill', 'scale-down'] as ImageFit[]).map((fit) => (
        <div key={fit}>
          <span style={{ fontSize: '11px', color: '#71717a', marginBottom: '4px', display: 'block' }}>
            {fit}
          </span>
          <RoundedSmImage
            src={placeholder(400, 200)}
            alt={`object-fit: ${fit}`}
            fit={fit}
            width={120}
            height={90}
          />
        </div>
      ))}
    </div>
  ),
};
