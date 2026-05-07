import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LayerProvider, FloatingLayer, useLayerContainer } from '../LayerProvider';

describe('LayerProvider', () => {
  it('renders children', () => {
    render(
      <LayerProvider>
        <div>content</div>
      </LayerProvider>,
    );
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('renders the layer container element', () => {
    const { container } = render(
      <LayerProvider>
        <div />
      </LayerProvider>,
    );
    expect(container.querySelector('[data-ds-layers]')).toBeInTheDocument();
  });

  it('applies custom zIndex to the container', () => {
    const { container } = render(
      <LayerProvider zIndex={2000}>
        <div />
      </LayerProvider>,
    );
    const el = container.querySelector('[data-ds-layers]') as HTMLElement;
    expect(el.style.zIndex).toBe('2000');
  });
});

describe('FloatingLayer', () => {
  it('portals children into the layer container when provider is present', () => {
    render(
      <LayerProvider>
        <FloatingLayer>
          <div data-testid="portal-child">floating</div>
        </FloatingLayer>
      </LayerProvider>,
    );
    expect(screen.getByTestId('portal-child')).toBeInTheDocument();
    expect(screen.getByTestId('portal-child').textContent).toBe('floating');
  });

  it('falls back to document.body without a provider', () => {
    render(
      <FloatingLayer>
        <div data-testid="fallback-child">fallback</div>
      </FloatingLayer>,
    );
    expect(screen.getByTestId('fallback-child')).toBeInTheDocument();
  });
});

describe('useLayerContainer', () => {
  it('returns null outside of a provider', () => {
    let captured: HTMLDivElement | null = undefined as unknown as HTMLDivElement | null;
    function Probe() {
      captured = useLayerContainer();
      return null;
    }
    render(<Probe />);
    expect(captured).toBeNull();
  });

  it('returns the container element inside a provider', () => {
    let captured: HTMLDivElement | null = null;
    function Probe() {
      captured = useLayerContainer();
      return null;
    }
    render(
      <LayerProvider>
        <Probe />
      </LayerProvider>,
    );
    // After initial render the container div may still be null (first pass).
    // The container ref is set via setState on the second paint; in jsdom this
    // happens synchronously within act(), so captured should be truthy.
    expect(captured).not.toBeNull();
  });
});
