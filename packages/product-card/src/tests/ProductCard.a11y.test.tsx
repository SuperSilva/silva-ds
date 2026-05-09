import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ProductCard } from '..';

const baseProps = {
  imageSrc: 'https://example.com/product.jpg',
  imageAlt: 'White sneaker',
  title: 'Classic Sneaker',
  price: '$89.00',
};

describe('ProductCard a11y', () => {
  it('has no violations in default state', async () => {
    const { container } = render(<ProductCard {...baseProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when rendered as a link', async () => {
    const { container } = render(<ProductCard {...baseProps} href="/product/1" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
