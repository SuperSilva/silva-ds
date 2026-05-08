import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductGrid } from '@design-system/product-grid';
import { ProductCard } from '@design-system/product-card';

const meta: Meta<typeof ProductGrid> = {
  title: 'Components/ProductGrid',
  component: ProductGrid,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof ProductGrid>;

const PLACEHOLDER = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=533&fit=crop';

const SAMPLE_CARDS = [
  {
    title: 'Air Max Classic',
    price: '$129.00',
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#1a1a1a', '#ffffff', '#dc2626'],
  },
  { title: 'Canvas Low-Top', price: '$65.00', sizes: ['38', '39', '40', '41'] },
  {
    title: 'Leather Chelsea Boot',
    price: '$215.00',
    badge: 'Sale',
    colors: ['#1a1a1a', '#8b7355', '#ffffff'],
  },
  {
    title: 'Ultraboost Pro',
    price: '$189.00',
    sizes: ['S', 'M', 'L'],
    colors: ['#0f172a', '#1e40af', '#7c3aed'],
  },
  { title: 'Trail Runner', price: '$149.00', badge: 'New', sizes: ['40', '41', '42', '43'] },
  { title: 'Slip-On Espadrille', price: '$79.00', colors: ['#d4a373', '#a8c5da', '#1a1a1a'] },
  { title: 'High-Top Denim', price: '$99.00', sizes: ['S', 'M', 'L', 'XL'], colors: ['#1a1a1a', '#4a90d9'] },
  { title: 'Platform Sandal', price: '$89.00', badge: 'Sale', sizes: ['36', '37', '38', '39'] },
];

export const Default: Story = {
  render: (args) => (
    <ProductGrid {...args}>
      {SAMPLE_CARDS.map((card) => (
        <ProductCard
          key={card.title}
          imageSrc={PLACEHOLDER}
          imageAlt={card.title}
          title={card.title}
          price={card.price}
          badge={card.badge}
          availableSizes={card.sizes}
          availableColors={card.colors}
          href={`/product/${card.title.toLowerCase().replace(/\s+/g, '-')}`}
        />
      ))}
    </ProductGrid>
  ),
};

export const SmGap: Story = {
  name: 'Gap — small',
  render: () => (
    <ProductGrid gap="sm">
      {SAMPLE_CARDS.slice(0, 4).map((card) => (
        <ProductCard
          key={card.title}
          imageSrc={PLACEHOLDER}
          imageAlt={card.title}
          title={card.title}
          price={card.price}
          badge={card.badge}
          availableSizes={card.sizes}
          availableColors={card.colors}
        />
      ))}
    </ProductGrid>
  ),
};

export const LgGap: Story = {
  name: 'Gap — large',
  render: () => (
    <ProductGrid gap="lg">
      {SAMPLE_CARDS.slice(0, 4).map((card) => (
        <ProductCard
          key={card.title}
          imageSrc={PLACEHOLDER}
          imageAlt={card.title}
          title={card.title}
          price={card.price}
          badge={card.badge}
          availableSizes={card.sizes}
          availableColors={card.colors}
        />
      ))}
    </ProductGrid>
  ),
};

export const CustomColumns: Story = {
  name: 'Custom columns (xs:1 sm:2 md:3 xl:5)',
  render: () => (
    <ProductGrid columns={{ xs: 1, sm: 2, md: 3, xl: 5 }}>
      {SAMPLE_CARDS.map((card) => (
        <ProductCard
          key={card.title}
          imageSrc={PLACEHOLDER}
          imageAlt={card.title}
          title={card.title}
          price={card.price}
          badge={card.badge}
          availableSizes={card.sizes}
          availableColors={card.colors}
        />
      ))}
    </ProductGrid>
  ),
};

export const TwoUp: Story = {
  name: 'Two-up (xs:1 sm:2)',
  render: () => (
    <ProductGrid columns={{ xs: 1, sm: 2, md: 2, xl: 2 }} gap="lg">
      {SAMPLE_CARDS.slice(0, 4).map((card) => (
        <ProductCard
          key={card.title}
          imageSrc={PLACEHOLDER}
          imageAlt={card.title}
          title={card.title}
          price={card.price}
          badge={card.badge}
          availableSizes={card.sizes}
          availableColors={card.colors}
        />
      ))}
    </ProductGrid>
  ),
};
