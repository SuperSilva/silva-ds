import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { FootnoteLink, BodyLink, HeadingLink } from '..';

describe('Link a11y', () => {
  it('FootnoteLink has no violations', async () => {
    const { container } = render(<FootnoteLink href="/footnote">See footnote</FootnoteLink>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('BodyLink has no violations', async () => {
    const { container } = render(<BodyLink href="/about">About us</BodyLink>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('HeadingLink has no violations', async () => {
    const { container } = render(<HeadingLink href="/section">Section title</HeadingLink>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
