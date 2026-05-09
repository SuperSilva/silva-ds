import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { PrimaryButton, SecondaryButton, DestructiveButton } from '..';

describe('Button a11y', () => {
  it('PrimaryButton has no violations', async () => {
    const { container } = render(<PrimaryButton>Save</PrimaryButton>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('SecondaryButton has no violations', async () => {
    const { container } = render(<SecondaryButton>Cancel</SecondaryButton>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('DestructiveButton has no violations', async () => {
    const { container } = render(<DestructiveButton>Delete</DestructiveButton>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
