import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { NeutralLabel, SuccessLabel, ErrorLabel } from '..';

describe('Label a11y', () => {
  it('NeutralLabel has no violations', async () => {
    const { container } = render(<NeutralLabel>Draft</NeutralLabel>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('SuccessLabel has no violations', async () => {
    const { container } = render(<SuccessLabel>Active</SuccessLabel>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('ErrorLabel has no violations', async () => {
    const { container } = render(<ErrorLabel>Failed</ErrorLabel>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
