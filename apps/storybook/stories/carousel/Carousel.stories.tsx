import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '@design-system/carousel';
import type { CarouselConfig } from '@design-system/carousel';
import { Image, RoundedImage } from '@design-system/image';
import { ProductCard } from '@design-system/product-card';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A scroll-snap carousel that accepts any content as children. ' +
          'Configure visible items and peek fraction per breakpoint via `config`. ' +
          'Use `bleed` to extend the track to the viewport edges inside a padded container.',
      },
    },
  },
  argTypes: {
    bleed: {
      control: 'boolean',
      description: 'Extends the carousel track to the viewport edges.',
      table: { defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the carousel region.',
    },
    config: { control: false },
    children: { control: false },
  },
};

export default meta;

const PRODUCT_IMAGES = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=600&fit=crop',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=600&fit=crop',
];

const LANDSCAPE_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=500&fit=crop',
];

// Custom arg shape for the interactive playground story
interface PlaygroundArgs {
  items: number;
  scrollQueue: number;
  bleed: boolean;
  'aria-label': string;
}

export const Playground: StoryObj<PlaygroundArgs> = {
  argTypes: {
    items: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: 'Number of fully visible items.',
      table: { defaultValue: { summary: '2' } },
    },
    scrollQueue: {
      control: { type: 'range', min: 0, max: 0.5, step: 0.05 },
      description: 'Fraction of the next item that peeks (0 = none, 0.5 = half visible).',
      table: { defaultValue: { summary: '0.15' } },
    },
    bleed: {
      control: 'boolean',
      description: 'Bleeds to viewport edges. Wrap in a padded container to see the effect.',
      table: { defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      control: 'text',
    },
  },
  args: {
    items: 2,
    scrollQueue: 0.15,
    bleed: false,
    'aria-label': 'Carousel playground',
  },
  render: ({ items, scrollQueue, bleed, 'aria-label': ariaLabel }) => (
    <Carousel bleed={bleed} aria-label={ariaLabel} config={{ xs: { items, scrollQueue } }}>
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          style={{
            aspectRatio: '3 / 4',
            background: `hsl(${i * 50} 55% 65%)`,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          {i + 1}
        </div>
      ))}
    </Carousel>
  ),
};

export const ProductCards: StoryObj<typeof Carousel> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Carousel
      aria-label="Featured products"
      config={{
        xs: { items: 1, scrollQueue: 0.15 },
        sm: { items: 2, scrollQueue: 0.15 },
        md: { items: 3, scrollQueue: 0.15 },
        xl: { items: 4, scrollQueue: 0.1 },
      }}
    >
      {PRODUCT_IMAGES.map((src, i) => (
        <ProductCard key={src} imageSrc={src} imageAlt={`Product ${i + 1}`} hoverLabel="Quick view">
          <ProductCard.Title>Product {i + 1}</ProductCard.Title>
          <ProductCard.Price>€{(29 + i * 10).toFixed(2)}</ProductCard.Price>
        </ProductCard>
      ))}
    </Carousel>
  ),
};

export const ImageCarousel: StoryObj<typeof Carousel> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Carousel
      aria-label="Landscape photos"
      config={{
        xs: { items: 1, scrollQueue: 0.1 },
        sm: { items: 1, scrollQueue: 0.15 },
        md: { items: 2, scrollQueue: 0.1 },
      }}
    >
      {LANDSCAPE_IMAGES.map((src, i) => (
        <RoundedImage key={src} src={src} alt={`Landscape ${i + 1}`} fit="cover" aspectRatio="16 / 9" />
      ))}
    </Carousel>
  ),
};

export const SingleItem: StoryObj<typeof Carousel> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Carousel aria-label="Single featured image" config={{ xs: { items: 1 } }}>
      <Image
        src={LANDSCAPE_IMAGES[0]}
        alt="Featured landscape"
        fit="cover"
        aspectRatio="16 / 9"
        style={{ width: '100%' }}
      />
    </Carousel>
  ),
};

const responsiveConfig: CarouselConfig = {
  xs: { items: 1, scrollQueue: 0.2 },
  sm: { items: 2, scrollQueue: 0.15 },
  md: { items: 3, scrollQueue: 0.1 },
  xl: { items: 4, scrollQueue: 0.08 },
};

export const Responsive: StoryObj<typeof Carousel> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Carousel aria-label="Responsive carousel" config={responsiveConfig}>
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          style={{
            aspectRatio: '3 / 4',
            background: `hsl(${i * 45} 60% 70%)`,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 600,
            color: 'white',
          }}
        >
          {i + 1}
        </div>
      ))}
    </Carousel>
  ),
};

export const WithBleed: StoryObj<typeof Carousel> = {
  parameters: { controls: { disable: true } },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 32px' }}>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          Container with 32px horizontal padding — carousel bleeds to viewport edge
        </p>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Carousel
      bleed
      aria-label="Full-width carousel"
      config={{ xs: { items: 1, scrollQueue: 0.15 }, sm: { items: 2, scrollQueue: 0.1 } }}
    >
      {LANDSCAPE_IMAGES.map((src, i) => (
        <RoundedImage key={src} src={src} alt={`Landscape ${i + 1}`} fit="cover" aspectRatio="4 / 3" />
      ))}
    </Carousel>
  ),
};
