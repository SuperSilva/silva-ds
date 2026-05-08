import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FootnoteLink, CaptionLink, BodyLink, LeadLink, HeadingLink, DisplayLink } from '@design-system/link';

const meta: Meta = {
  title: 'Components/Link',
  parameters: { layout: 'padded' },
};
export default meta;

export const Scale: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DisplayLink href="#">Display Link — 24px bold</DisplayLink>
      <HeadingLink href="#">Heading Link — 20px bold</HeadingLink>
      <LeadLink href="#">Lead Link — 16px regular</LeadLink>
      <BodyLink href="#">Body Link — 14px regular</BodyLink>
      <CaptionLink href="#">Caption Link — 13px regular</CaptionLink>
      <FootnoteLink href="#">Footnote Link — 11px regular</FootnoteLink>
    </div>
  ),
};

export const Weights: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <BodyLink href="#" weight="regular">
        Regular weight body link
      </BodyLink>
      <BodyLink href="#" weight="medium">
        Medium weight body link
      </BodyLink>
      <BodyLink href="#" weight="semibold">
        Semibold weight body link
      </BodyLink>
    </div>
  ),
};

export const External: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <BodyLink href="https://example.com" external>
        Opens in new tab (external)
      </BodyLink>
      <CaptionLink href="https://example.com" external>
        Caption external link
      </CaptionLink>
    </div>
  ),
};

export const Truncated: StoryObj = {
  render: () => (
    <div style={{ width: 200, border: '1px dashed #d4d4d8', padding: 8 }}>
      <BodyLink href="#" truncate>
        This is a very long link text that will be truncated with an ellipsis
      </BodyLink>
    </div>
  ),
};

export const InlineUsage: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 480, fontSize: 14, lineHeight: 1.6, color: '#18181b' }}>
      <p>
        By continuing, you agree to our <BodyLink href="#">Terms of Service</BodyLink> and{' '}
        <BodyLink href="#">Privacy Policy</BodyLink>.
      </p>
      <p style={{ fontSize: 13, color: '#71717a' }}>
        Need help? <CaptionLink href="#">Visit our support centre</CaptionLink> or{' '}
        <CaptionLink href="#">contact us</CaptionLink>.
      </p>
    </div>
  ),
};
