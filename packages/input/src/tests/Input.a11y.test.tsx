import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { TextInput, Checkbox, Radio, Textarea } from '..';

describe('Input a11y', () => {
  it('TextInput with associated label has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="name">Full name</label>
        <TextInput id="name" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Textarea with associated label has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="bio">Biography</label>
        <Textarea id="bio" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Checkbox with associated label has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="agree">I agree to the terms</label>
        <Checkbox id="agree" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Radio with associated label has no violations', async () => {
    const { container } = render(
      <div>
        <label htmlFor="opt-a">Option A</label>
        <Radio id="opt-a" name="options" />
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
