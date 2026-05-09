import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from '..';

const items = ['Alpha', 'Beta', 'Gamma', 'Delta'];

function renderCarousel(count = 4) {
  return render(
    <Carousel aria-label="Test carousel">
      {items.slice(0, count).map((label) => (
        <div key={label}>{label}</div>
      ))}
    </Carousel>,
  );
}

describe('Carousel', () => {
  it('renders all children', () => {
    renderCarousel();
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('Delta')).toBeInTheDocument();
  });

  it('has the correct region role and label', () => {
    renderCarousel();
    expect(screen.getByRole('region', { name: 'Test carousel' })).toBeInTheDocument();
  });

  it('shows prev and next buttons when there are multiple items', () => {
    renderCarousel(3);
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
  });

  it('does not show nav buttons with a single item', () => {
    renderCarousel(1);
    expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
  });

  it('prev button is disabled initially', () => {
    renderCarousel();
    expect(screen.getByRole('button', { name: 'Previous' })).toBeDisabled();
  });

  it('next button is enabled initially', () => {
    renderCarousel();
    expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
  });

  it('renders with bleed prop without error', () => {
    const { container } = render(
      <Carousel bleed aria-label="Bleed carousel">
        <div>Item</div>
        <div>Item 2</div>
      </Carousel>,
    );
    expect(container.querySelector('[data-bleed]')).toBeInTheDocument();
  });

  it('renders with responsive config', () => {
    const { container } = render(
      <Carousel
        config={{ xs: { items: 1 }, sm: { items: 2, scrollQueue: 0.2 }, md: { items: 3 } }}
        aria-label="Responsive carousel"
      >
        <div>A</div>
        <div>B</div>
      </Carousel>,
    );
    const style = container.querySelector('style');
    expect(style?.textContent).toContain('--_items:1');
    expect(style?.textContent).toContain('--_items:2');
    expect(style?.textContent).toContain('--_items:3');
  });

  it('accepts keyboard navigation on the track', async () => {
    const user = userEvent.setup();
    renderCarousel();
    const track = screen.getByRole('region').querySelector('[tabindex="0"]')!;
    await user.click(track);
    // ArrowRight/Left should fire without throwing
    await user.keyboard('{ArrowRight}');
    await user.keyboard('{ArrowLeft}');
  });
});
