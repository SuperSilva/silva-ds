import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Icon, IconProvider } from '..';

describe('Icon a11y', () => {
  it('decorative icon (aria-hidden) has no violations', async () => {
    const { container } = render(
      <IconProvider>
        <Icon name="home" />
      </IconProvider>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('meaningful icon with aria-label has no violations', async () => {
    const { container } = render(
      <IconProvider>
        <Icon name="home" aria-label="Home" />
      </IconProvider>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
