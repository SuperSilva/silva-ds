import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { LayerProvider } from '@design-system/layers';
import { DefaultDropdown, OutlineDropdown } from '..';

const OPTIONS = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];

function Wrapper({ children }: { children: React.ReactNode }) {
  return <LayerProvider>{children}</LayerProvider>;
}

describe('Dropdown a11y', () => {
  it('DefaultDropdown has no violations in closed state', async () => {
    const { container } = render(<DefaultDropdown options={OPTIONS} />, { wrapper: Wrapper });
    expect(await axe(container)).toHaveNoViolations();
  });

  it('OutlineDropdown has no violations in closed state', async () => {
    const { container } = render(<OutlineDropdown options={OPTIONS} />, { wrapper: Wrapper });
    expect(await axe(container)).toHaveNoViolations();
  });
});
