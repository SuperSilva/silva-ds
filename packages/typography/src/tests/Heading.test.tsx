import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading, H1, H2, H3, H4, H5, H6 } from '../Heading';

const LEVELS = [
  { Component: H1, level: 1 },
  { Component: H2, level: 2 },
  { Component: H3, level: 3 },
  { Component: H4, level: 4 },
  { Component: H5, level: 5 },
  { Component: H6, level: 6 },
] as const;

describe('Heading variant exports', () => {
  LEVELS.forEach(({ Component, level }) => {
    describe(`H${level}`, () => {
      it('renders children', () => {
        render(<Component>Hello world</Component>);
        expect(screen.getByText('Hello world')).toBeInTheDocument();
      });

      it(`renders as h${level}`, () => {
        render(<Component>Title</Component>);
        expect(screen.getByRole('heading', { level })).toBeInTheDocument();
      });

      it('forwards className and data attributes', () => {
        render(
          <Component data-testid="heading" className="custom">
            Title
          </Component>,
        );
        expect(screen.getByTestId('heading')).toHaveClass('custom');
      });

      it('accepts a size override', () => {
        const { container } = render(<Component size="sm">Title</Component>);
        expect(container.querySelector(`h${level}`)).toBeInTheDocument();
      });
    });
  });

  it('Heading is an alias for H1', () => {
    expect(Heading).toBe(H1);
  });
});
