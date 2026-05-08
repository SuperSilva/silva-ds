import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PrimaryButton, SecondaryButton, OutlineButton, GhostButton, DestructiveButton, Button } from '..';
import type { ButtonSize } from '../Button.styles';

const VARIANTS = [
  { Component: PrimaryButton, name: 'PrimaryButton' },
  { Component: SecondaryButton, name: 'SecondaryButton' },
  { Component: OutlineButton, name: 'OutlineButton' },
  { Component: GhostButton, name: 'GhostButton' },
  { Component: DestructiveButton, name: 'DestructiveButton' },
] as const;

const SIZES: ButtonSize[] = ['sm', 'md', 'lg'];

describe('Button variant exports', () => {
  VARIANTS.forEach(({ Component, name }) => {
    describe(name, () => {
      it('renders children', () => {
        render(<Component>Click me</Component>);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
      });

      it('forwards native button attributes', () => {
        render(
          <Component type="submit" aria-label="Submit form">
            Submit
          </Component>,
        );
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit');
        expect(button).toHaveAttribute('aria-label', 'Submit form');
      });

      it('is disabled when disabled prop is set', () => {
        render(<Component disabled>Disabled</Component>);
        expect(screen.getByRole('button')).toBeDisabled();
      });

      it('calls onClick when clicked', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(<Component onClick={handleClick}>Click</Component>);
        await user.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
      });

      it('does not call onClick when disabled', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(
          <Component onClick={handleClick} disabled>
            Disabled
          </Component>,
        );
        await user.pointer({ target: screen.getByRole('button'), keys: '[MouseLeft]' });
        expect(handleClick).not.toHaveBeenCalled();
      });

      SIZES.forEach((size) => {
        it(`renders size="${size}" without errors`, () => {
          render(<Component size={size}>text</Component>);
          expect(screen.getByRole('button')).toBeInTheDocument();
        });
      });
    });
  });

  it('Button is an alias for PrimaryButton', () => {
    expect(Button).toBe(PrimaryButton);
  });
});
