import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footnote } from '../Footnote';
import { Caption } from '../Caption';
import { Body } from '../Body';
import { BodyBold } from '../BodyBold';
import { Lead } from '../Lead';
import { Heading } from '../Heading';
import { Display } from '../Display';

describe('Footnote', () => {
  it('renders children', () => {
    render(<Footnote>Footnote text</Footnote>);
    expect(screen.getByText('Footnote text')).toBeInTheDocument();
  });

  it('renders as span by default', () => {
    const { container } = render(<Footnote>text</Footnote>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders as specified element via as prop', () => {
    const { container } = render(<Footnote as="p">text</Footnote>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('forwards className and data attributes', () => {
    render(
      <Footnote data-testid="fn" className="custom">
        text
      </Footnote>,
    );
    expect(screen.getByTestId('fn')).toHaveClass('custom');
  });
});

describe('Caption', () => {
  it('renders children', () => {
    render(<Caption>Caption text</Caption>);
    expect(screen.getByText('Caption text')).toBeInTheDocument();
  });

  it('renders as span by default', () => {
    const { container } = render(<Caption>text</Caption>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders as specified element via as prop', () => {
    const { container } = render(<Caption as="div">text</Caption>);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});

describe('Body', () => {
  it('renders children', () => {
    render(<Body>Body text</Body>);
    expect(screen.getByText('Body text')).toBeInTheDocument();
  });

  it('renders as p by default', () => {
    const { container } = render(<Body>text</Body>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders as specified element via as prop', () => {
    const { container } = render(<Body as="span">text</Body>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('forwards className and data attributes', () => {
    render(
      <Body data-testid="body" className="custom">
        text
      </Body>,
    );
    expect(screen.getByTestId('body')).toHaveClass('custom');
  });
});

describe('BodyBold', () => {
  it('renders children', () => {
    render(<BodyBold>Bold body text</BodyBold>);
    expect(screen.getByText('Bold body text')).toBeInTheDocument();
  });

  it('renders as p by default', () => {
    const { container } = render(<BodyBold>text</BodyBold>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders as specified element via as prop', () => {
    const { container } = render(<BodyBold as="span">text</BodyBold>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});

describe('Lead', () => {
  it('renders children', () => {
    render(<Lead>Lead paragraph</Lead>);
    expect(screen.getByText('Lead paragraph')).toBeInTheDocument();
  });

  it('renders as p by default', () => {
    const { container } = render(<Lead>text</Lead>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders as specified element via as prop', () => {
    const { container } = render(<Lead as="div">text</Lead>);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});

describe('Heading', () => {
  it('renders children', () => {
    render(<Heading>Section heading</Heading>);
    expect(screen.getByText('Section heading')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders as specified heading level via as prop', () => {
    render(<Heading as="h3">Title</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('renders as h1 via as prop', () => {
    render(<Heading as="h1">Title</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('forwards className and data attributes', () => {
    render(
      <Heading data-testid="heading" className="custom">
        Title
      </Heading>,
    );
    expect(screen.getByTestId('heading')).toHaveClass('custom');
  });
});

describe('Display', () => {
  it('renders children', () => {
    render(<Display>Page title</Display>);
    expect(screen.getByText('Page title')).toBeInTheDocument();
  });

  it('renders as h1 by default', () => {
    render(<Display>Title</Display>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders as specified heading level via as prop', () => {
    render(<Display as="h2">Title</Display>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('forwards className and data attributes', () => {
    render(
      <Display data-testid="display" className="custom">
        Title
      </Display>,
    );
    expect(screen.getByTestId('display')).toHaveClass('custom');
  });
});
