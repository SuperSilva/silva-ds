import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Image, RoundedImage, CircularImage } from '..';

describe('Image a11y', () => {
  it('Image has no violations', async () => {
    const { container } = render(<Image src="/photo.jpg" alt="A scenic mountain view" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('RoundedImage has no violations', async () => {
    const { container } = render(<RoundedImage src="/photo.jpg" alt="A rounded photo" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('CircularImage has no violations', async () => {
    const { container } = render(<CircularImage src="/avatar.jpg" alt="User avatar" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
