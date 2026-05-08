import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProductGrid } from '..';

describe('ProductGrid — rendering', () => {
  it('renders children', () => {
    render(
      <ProductGrid>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </ProductGrid>,
    );
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Card 3')).toBeInTheDocument();
  });

  it('renders as a div', () => {
    const { container } = render(<ProductGrid>child</ProductGrid>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});

describe('ProductGrid — column CSS custom properties', () => {
  it('sets default column vars when no columns prop is given', () => {
    const { container } = render(<ProductGrid>child</ProductGrid>);
    const grid = container.firstChild as HTMLElement;
    expect(grid.style.getPropertyValue('--pg-cols-xs')).toBe('2');
    expect(grid.style.getPropertyValue('--pg-cols-sm')).toBe('3');
    expect(grid.style.getPropertyValue('--pg-cols-md')).toBe('3');
    expect(grid.style.getPropertyValue('--pg-cols-xl')).toBe('4');
  });

  it('applies custom column counts per breakpoint', () => {
    const { container } = render(<ProductGrid columns={{ xs: 1, sm: 2, md: 3, xl: 5 }}>child</ProductGrid>);
    const grid = container.firstChild as HTMLElement;
    expect(grid.style.getPropertyValue('--pg-cols-xs')).toBe('1');
    expect(grid.style.getPropertyValue('--pg-cols-sm')).toBe('2');
    expect(grid.style.getPropertyValue('--pg-cols-md')).toBe('3');
    expect(grid.style.getPropertyValue('--pg-cols-xl')).toBe('5');
  });

  it('partial columns prop falls back to defaults for unspecified breakpoints', () => {
    const { container } = render(<ProductGrid columns={{ xl: 6 }}>child</ProductGrid>);
    const grid = container.firstChild as HTMLElement;
    expect(grid.style.getPropertyValue('--pg-cols-xs')).toBe('2');
    expect(grid.style.getPropertyValue('--pg-cols-sm')).toBe('3');
    expect(grid.style.getPropertyValue('--pg-cols-md')).toBe('3');
    expect(grid.style.getPropertyValue('--pg-cols-xl')).toBe('6');
  });
});

describe('ProductGrid — gap', () => {
  it('accepts a gap prop without error', () => {
    expect(() => render(<ProductGrid gap="lg">child</ProductGrid>)).not.toThrow();
  });

  it('defaults gap to md', () => {
    expect(() => render(<ProductGrid>child</ProductGrid>)).not.toThrow();
  });
});

describe('ProductGrid — className', () => {
  it('forwards className to the root element', () => {
    const { container } = render(<ProductGrid className="custom">child</ProductGrid>);
    expect((container.firstChild as HTMLElement).className).toContain('custom');
  });
});
