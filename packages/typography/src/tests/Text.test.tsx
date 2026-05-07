import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text, TextXs, TextSm, TextMd, TextLg, TextXl } from '../Text';
import type { TextWeight, TextColor } from '../Text';

const VARIANTS = [
  { Component: TextXs, name: 'TextXs', tag: 'p' },
  { Component: TextSm, name: 'TextSm', tag: 'p' },
  { Component: TextMd, name: 'TextMd', tag: 'p' },
  { Component: TextLg, name: 'TextLg', tag: 'p' },
  { Component: TextXl, name: 'TextXl', tag: 'p' },
] as const;

describe('Text variant exports', () => {
  VARIANTS.forEach(({ Component, name, tag }) => {
    describe(name, () => {
      it('renders children', () => {
        render(<Component>Hello world</Component>);
        expect(screen.getByText('Hello world')).toBeInTheDocument();
      });

      it(`renders as a ${tag} by default`, () => {
        const { container } = render(<Component>Hello</Component>);
        expect(container.querySelector(tag)).toBeInTheDocument();
      });

      it('renders as the specified element via as prop', () => {
        const { container } = render(<Component as="span">Hello</Component>);
        expect(container.querySelector('span')).toBeInTheDocument();
      });

      it('forwards className and data attributes', () => {
        render(
          <Component data-testid="text" className="custom">
            Hello
          </Component>,
        );
        expect(screen.getByTestId('text')).toHaveClass('custom');
      });
    });
  });

  it.each<TextWeight>(['regular', 'medium', 'semibold', 'bold'])(
    'renders weight "%s" without errors',
    (weight) => {
      render(<TextMd weight={weight}>text</TextMd>);
      expect(screen.getByText('text')).toBeInTheDocument();
    },
  );

  it.each<TextColor>(['default', 'subtle', 'disabled'])('renders color "%s" without errors', (color) => {
    render(<TextMd color={color}>text</TextMd>);
    expect(screen.getByText('text')).toBeInTheDocument();
  });

  it('Text is an alias for TextMd', () => {
    expect(Text).toBe(TextMd);
  });
});
