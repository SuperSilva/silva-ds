import React from 'react';
import { render, screen } from '@testing-library/react';
import { Image, RoundedSmImage, RoundedImage, RoundedLgImage, CircularImage } from '../Image';

const VARIANTS = [
  { Component: Image, name: 'Image' },
  { Component: RoundedSmImage, name: 'RoundedSmImage' },
  { Component: RoundedImage, name: 'RoundedImage' },
  { Component: RoundedLgImage, name: 'RoundedLgImage' },
  { Component: CircularImage, name: 'CircularImage' },
] as const;

describe('Image variant exports', () => {
  VARIANTS.forEach(({ Component, name }) => {
    describe(name, () => {
      it('renders with src and alt', () => {
        render(<Component src="/test.jpg" alt="Test image" />);
        const img = screen.getByRole('img', { name: 'Test image' });
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/test.jpg');
      });

      it('applies width and height via inline style', () => {
        render(<Component src="/test.jpg" alt="Test" width={200} height={150} />);
        const img = screen.getByRole('img');
        expect(img.style.width).toBe('200px');
        expect(img.style.height).toBe('150px');
      });

      it('applies aspectRatio and objectFit via inline style', () => {
        render(<Component src="/test.jpg" alt="Test" aspectRatio="16/9" fit="cover" />);
        const img = screen.getByRole('img');
        expect(img.style.aspectRatio).toBe('16/9');
        expect(img.style.objectFit).toBe('cover');
      });

      it('merges consumer style with internal style', () => {
        render(<Component src="/test.jpg" alt="Test" style={{ border: '1px solid red' }} />);
        expect(screen.getByRole('img').style.border).toBe('1px solid red');
      });

      it('forwards additional attributes', () => {
        render(<Component src="/test.jpg" alt="Test" data-testid="img" loading="lazy" />);
        expect(screen.getByTestId('img')).toHaveAttribute('loading', 'lazy');
      });
    });
  });
});
