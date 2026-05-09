import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Carousel } from '..';

describe('Carousel a11y', () => {
  it('has no violations with multiple items', async () => {
    const { container } = render(
      <Carousel aria-label="Featured products">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Carousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations with a single item', async () => {
    const { container } = render(
      <Carousel aria-label="Featured product">
        <div>Only item</div>
      </Carousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations with bleed enabled', async () => {
    const { container } = render(
      <Carousel bleed aria-label="Full-width carousel">
        <div>Item A</div>
        <div>Item B</div>
      </Carousel>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
