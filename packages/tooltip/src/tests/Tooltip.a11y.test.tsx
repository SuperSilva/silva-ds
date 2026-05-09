import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Tooltip } from '..';

describe('Tooltip a11y', () => {
  it('has no violations when tooltip is hidden', async () => {
    const { container } = render(
      <Tooltip content="More information">
        <button>Info</button>
      </Tooltip>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when tooltip is visible', async () => {
    const { container } = render(
      <Tooltip content="More information">
        <button>Info</button>
      </Tooltip>,
    );
    fireEvent.focus(container.firstChild as HTMLElement);
    expect(await axe(container)).toHaveNoViolations();
  });
});
