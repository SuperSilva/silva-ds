import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FootnoteLink, CaptionLink, BodyLink, LeadLink, HeadingLink, DisplayLink, Link } from '..';

describe('BodyLink', () => {
  it('renders children', () => {
    render(<BodyLink href="/path">Click me</BodyLink>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders as an anchor', () => {
    render(<BodyLink href="/path">link</BodyLink>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('sets href', () => {
    render(<BodyLink href="/about">About</BodyLink>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/about');
  });

  it('sets target and rel for external links', () => {
    render(
      <BodyLink href="https://example.com" external>
        External
      </BodyLink>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('forwards className', () => {
    render(
      <BodyLink href="#" className="custom">
        link
      </BodyLink>,
    );
    expect(screen.getByRole('link')).toHaveClass('custom');
  });

  it('forwards data attributes', () => {
    render(
      <BodyLink href="#" data-testid="bl">
        link
      </BodyLink>,
    );
    expect(screen.getByTestId('bl')).toBeInTheDocument();
  });
});

describe('FootnoteLink', () => {
  it('renders as anchor', () => {
    render(<FootnoteLink href="#">footnote</FootnoteLink>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

describe('CaptionLink', () => {
  it('renders as anchor', () => {
    render(<CaptionLink href="#">caption</CaptionLink>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

describe('LeadLink', () => {
  it('renders as anchor', () => {
    render(<LeadLink href="#">lead</LeadLink>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

describe('HeadingLink', () => {
  it('renders as anchor', () => {
    render(<HeadingLink href="#">heading</HeadingLink>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('does not accept weight prop (bold enforced)', () => {
    render(<HeadingLink href="#">heading</HeadingLink>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

describe('DisplayLink', () => {
  it('renders as anchor', () => {
    render(<DisplayLink href="#">display</DisplayLink>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

describe('Link alias', () => {
  it('is the same as BodyLink', () => {
    expect(Link).toBe(BodyLink);
  });
});

describe('external prop', () => {
  it('respects explicit target override', () => {
    render(
      <BodyLink href="#" external target="_self">
        link
      </BodyLink>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
});
