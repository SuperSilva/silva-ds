import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { IconProvider, Icon } from '@design-system/icons';
import { PrimaryIconButton, GhostIconButton, ElevatedIconButton, DestructiveIconButton } from '..';

const icon = <Icon name="search" />;

function Wrapper({ children }: { children: React.ReactNode }) {
  return <IconProvider>{children}</IconProvider>;
}

describe('IconButton a11y', () => {
  it('PrimaryIconButton has no violations', async () => {
    const { container } = render(<PrimaryIconButton aria-label="Search" icon={icon} />, {
      wrapper: Wrapper,
    });
    expect(await axe(container)).toHaveNoViolations();
  });

  it('GhostIconButton has no violations', async () => {
    const { container } = render(<GhostIconButton aria-label="Search" icon={icon} />, {
      wrapper: Wrapper,
    });
    expect(await axe(container)).toHaveNoViolations();
  });

  it('ElevatedIconButton has no violations', async () => {
    const { container } = render(<ElevatedIconButton aria-label="Search" icon={icon} />, {
      wrapper: Wrapper,
    });
    expect(await axe(container)).toHaveNoViolations();
  });

  it('DestructiveIconButton has no violations', async () => {
    const { container } = render(<DestructiveIconButton aria-label="Delete item" icon={icon} />, {
      wrapper: Wrapper,
    });
    expect(await axe(container)).toHaveNoViolations();
  });
});
