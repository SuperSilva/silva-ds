import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Body, Heading, Display } from '..';

describe('Typography a11y', () => {
  it('Body has no violations', async () => {
    const { container } = render(<Body>This is body text content.</Body>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Heading has no violations', async () => {
    const { container } = render(<Heading as="h2">Section title</Heading>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Display has no violations', async () => {
    const { container } = render(<Display as="h1">Page title</Display>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
