import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ProductCard } from '..';

const baseProps = {
  imageSrc: 'https://example.com/product.jpg',
  imageAlt: 'White sneaker',
  title: 'Classic Sneaker',
  price: '$89.00',
};

describe('ProductCard', () => {
  it('renders title and price', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.getByText('Classic Sneaker')).toBeInTheDocument();
    expect(screen.getByText('$89.00')).toBeInTheDocument();
  });

  it('renders the image with correct src and alt', () => {
    render(<ProductCard {...baseProps} />);
    const img = screen.getByAltText('White sneaker');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/product.jpg');
  });

  it('renders badge when provided', () => {
    render(<ProductCard {...baseProps} badge="New" />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('does not render badge when not provided', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.queryByText('New')).not.toBeInTheDocument();
  });

  it('renders available sizes', () => {
    render(<ProductCard {...baseProps} availableSizes={['S', 'M', 'L', 'XL']} />);
    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('XL')).toBeInTheDocument();
  });

  it('renders color swatches for each color', () => {
    render(<ProductCard {...baseProps} availableColors={['#ff0000', '#00ff00', '#0000ff']} />);
    const swatches = document.querySelectorAll('[title="#ff0000"], [title="#00ff00"], [title="#0000ff"]');
    expect(swatches).toHaveLength(3);
  });

  it('does not render sizes section when not provided', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.queryByText('Sizes')).not.toBeInTheDocument();
  });

  it('does not render colors section when not provided', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.queryByText('Colors')).not.toBeInTheDocument();
  });

  it('renders a stretched link when href is provided', () => {
    render(<ProductCard {...baseProps} href="/product/1" />);
    const link = screen.getByRole('link', { name: 'Classic Sneaker' });
    expect(link).toHaveAttribute('href', '/product/1');
  });

  it('does not render a link when href is not provided', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('calls onClick when card is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ProductCard {...baseProps} onClick={onClick} />);
    await user.click(screen.getByText('Classic Sneaker'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('forwards className', () => {
    const { container } = render(<ProductCard {...baseProps} className="my-card" />);
    expect(container.firstChild).toHaveClass('my-card');
  });
});
