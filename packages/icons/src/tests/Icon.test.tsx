import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon } from '../Icon';
import { IconProvider } from '../IconContext';
import { defaultIcons } from '../icons';

describe('Icon (inline mode)', () => {
  it('renders an svg for a known icon', () => {
    const { container } = render(<Icon name="home" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('returns null for an unknown icon', () => {
    const { container } = render(<Icon name="does-not-exist" />);
    expect(container.querySelector('svg')).toBeNull();
  });

  it('applies numeric size', () => {
    const { container } = render(<Icon name="home" size={48} />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('width', '48');
    expect(svg).toHaveAttribute('height', '48');
  });

  it('applies named size md (20px)', () => {
    const { container } = render(<Icon name="home" size="md" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('width', '20');
  });

  it('is aria-hidden by default', () => {
    const { container } = render(<Icon name="home" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('exposes aria-label and removes aria-hidden when label is provided', () => {
    const { container } = render(<Icon name="home" aria-label="Home" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('aria-label', 'Home');
    expect(svg).not.toHaveAttribute('aria-hidden');
  });

  it('forwards ref to the svg element', () => {
    const ref = React.createRef<SVGSVGElement>();
    render(<Icon name="home" ref={ref} />);
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it('applies className', () => {
    const { container } = render(<Icon name="home" className="custom-icon" />);
    expect(container.querySelector('svg')).toHaveClass('custom-icon');
  });
});

describe('Icon (sprite mode via IconProvider)', () => {
  it('renders a <use> element referencing the sprite', () => {
    const { container } = render(
      <IconProvider>
        <Icon name="home" />
      </IconProvider>,
    );
    const use = container.querySelector('use');
    expect(use).toBeInTheDocument();
    expect(use).toHaveAttribute('href', '#ds-icon-home');
  });

  it('uses a custom prefix', () => {
    const { container } = render(
      <IconProvider prefix="my-icons">
        <Icon name="cart" />
      </IconProvider>,
    );
    expect(container.querySelector('use')).toHaveAttribute('href', '#my-icons-cart');
  });
});

describe('IconProvider', () => {
  it('renders a hidden svg sprite with all default icons', () => {
    const { container } = render(
      <IconProvider>
        <span />
      </IconProvider>,
    );
    const symbols = container.querySelectorAll('symbol');
    expect(symbols.length).toBe(Object.keys(defaultIcons).length);
  });

  it('merges custom icons into the registry', () => {
    const customIcon = { viewBox: '0 0 24 24', element: <circle cx="12" cy="12" r="10" /> };
    const { container } = render(
      <IconProvider icons={{ custom: customIcon }}>
        <span />
      </IconProvider>,
    );
    const ids = Array.from(container.querySelectorAll('symbol')).map((s) => s.id);
    expect(ids).toContain('ds-icon-custom');
  });
});
