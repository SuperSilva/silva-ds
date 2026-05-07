import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  IconButton,
  PrimaryIconButton,
  SecondaryIconButton,
  OutlineIconButton,
  GhostIconButton,
  DestructiveIconButton,
} from '../IconButton';
import type { IconButtonSize } from '../IconButton';

const icon = <svg aria-hidden="true" data-testid="icon" />;

const VARIANTS = [
  { Component: PrimaryIconButton, name: 'PrimaryIconButton' },
  { Component: SecondaryIconButton, name: 'SecondaryIconButton' },
  { Component: OutlineIconButton, name: 'OutlineIconButton' },
  { Component: GhostIconButton, name: 'GhostIconButton' },
  { Component: DestructiveIconButton, name: 'DestructiveIconButton' },
] as const;

const SIZES: IconButtonSize[] = ['sm', 'md', 'lg'];

describe('IconButton variant exports', () => {
  VARIANTS.forEach(({ Component, name }) => {
    describe(name, () => {
      it('renders with accessible label', () => {
        render(<Component aria-label="Close" icon={icon} />);
        expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
      });

      it('renders the icon child', () => {
        render(<Component aria-label="Search" icon={icon} />);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
      });

      it('has type="button" by default', () => {
        render(<Component aria-label="Click" icon={icon} />);
        expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
      });

      it('is disabled when the disabled prop is set', () => {
        render(<Component aria-label="Close" icon={icon} disabled />);
        expect(screen.getByRole('button')).toBeDisabled();
      });

      it('calls onClick when clicked', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(<Component aria-label="Click" icon={icon} onClick={handleClick} />);
        await user.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
      });

      SIZES.forEach((size) => {
        it(`renders size="${size}" without errors`, () => {
          render(<Component aria-label={size} size={size} icon={icon} />);
          expect(screen.getByRole('button')).toBeInTheDocument();
        });
      });
    });
  });

  it('IconButton is an alias for GhostIconButton', () => {
    expect(IconButton).toBe(GhostIconButton);
  });
});
