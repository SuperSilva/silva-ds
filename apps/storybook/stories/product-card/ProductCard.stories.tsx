import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '@design-system/product-card';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

const PLACEHOLDER = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=533&fit=crop';

export const Default: Story = {
  args: {
    imageSrc: PLACEHOLDER,
    imageAlt: 'Red Nike sneaker',
    title: 'Air Max Classic',
    price: '$129.00',
  },
};

export const WithBadge: Story = {
  args: {
    imageSrc: PLACEHOLDER,
    imageAlt: 'Red Nike sneaker',
    title: 'Air Max Classic',
    price: '$129.00',
    badge: 'New',
  },
};

export const WithSizes: Story = {
  args: {
    imageSrc: PLACEHOLDER,
    imageAlt: 'White sneaker',
    title: 'Canvas Low-Top',
    price: '$79.00',
    availableSizes: ['36', '37', '38', '39', '40', '41', '42'],
  },
};

export const WithColors: Story = {
  args: {
    imageSrc: PLACEHOLDER,
    imageAlt: 'Leather boot',
    title: 'Leather Chelsea Boot',
    price: '$215.00',
    availableColors: ['#1a1a1a', '#8b7355', '#ffffff', '#c0392b'],
  },
};

export const FullFeatures: Story = {
  args: {
    imageSrc: PLACEHOLDER,
    imageAlt: 'Running shoe',
    title: 'Ultraboost Pro',
    price: '$189.00',
    badge: 'Sale',
    href: '/products/ultraboost-pro',
    availableSizes: ['S', 'M', 'L', 'XL'],
    availableColors: ['#0f172a', '#1e40af', '#065f46', '#7c3aed'],
  },
};

export const Grid: StoryObj = {
  decorators: [],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 20rem)', gap: 16 }}>
      <ProductCard
        imageSrc={PLACEHOLDER}
        title="Classic Sneaker"
        price="$89.00"
        badge="New"
        availableSizes={['S', 'M', 'L']}
        availableColors={['#1a1a1a', '#ffffff', '#dc2626']}
        href="/product/1"
      />
      <ProductCard
        imageSrc={PLACEHOLDER}
        title="Canvas Low-Top"
        price="$65.00"
        availableSizes={['38', '39', '40', '41']}
        href="/product/2"
      />
      <ProductCard
        imageSrc={PLACEHOLDER}
        title="Leather Chelsea Boot"
        price="$215.00"
        badge="Sale"
        availableColors={['#1a1a1a', '#8b7355']}
        href="/product/3"
      />
    </div>
  ),
};
