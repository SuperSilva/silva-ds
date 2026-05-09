import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ProductGrid } from '..';

describe('ProductGrid a11y', () => {
  it('has no violations with child content', async () => {
    const { container } = render(
      <ProductGrid>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </ProductGrid>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
