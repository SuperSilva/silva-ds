import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Footer,
  FooterColumns,
  FooterColumn,
  FooterColumnHeading,
  FooterBottom,
  FooterCopyright,
} from '@design-system/footer';
import { CaptionLink } from '@design-system/link';

const meta: Meta = {
  title: 'Components/Footer',
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Columnar: StoryObj = {
  render: () => (
    <div style={{ padding: '0 48px' }}>
      <Footer>
        <FooterColumns columns={4}>
          <FooterColumn>
            <FooterColumnHeading>Company</FooterColumnHeading>
            <CaptionLink href="#">About us</CaptionLink>
            <CaptionLink href="#">Blog</CaptionLink>
            <CaptionLink href="#">Careers</CaptionLink>
            <CaptionLink href="#">Press</CaptionLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Products</FooterColumnHeading>
            <CaptionLink href="#">Shoes</CaptionLink>
            <CaptionLink href="#">Clothing</CaptionLink>
            <CaptionLink href="#">Accessories</CaptionLink>
            <CaptionLink href="#">New arrivals</CaptionLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Support</FooterColumnHeading>
            <CaptionLink href="#">Help center</CaptionLink>
            <CaptionLink href="#">Returns</CaptionLink>
            <CaptionLink href="#">Track order</CaptionLink>
            <CaptionLink href="#">Contact us</CaptionLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Legal</FooterColumnHeading>
            <CaptionLink href="#">Privacy policy</CaptionLink>
            <CaptionLink href="#">Terms of service</CaptionLink>
            <CaptionLink href="#">Cookie policy</CaptionLink>
          </FooterColumn>
        </FooterColumns>
        <FooterBottom>
          <FooterCopyright>© 2026 Acme Inc. All rights reserved.</FooterCopyright>
          <div style={{ display: 'flex', gap: 16 }}>
            <CaptionLink href="#">Privacy</CaptionLink>
            <CaptionLink href="#">Terms</CaptionLink>
            <CaptionLink href="#">Cookies</CaptionLink>
          </div>
        </FooterBottom>
      </Footer>
    </div>
  ),
};

export const Simple: StoryObj = {
  render: () => (
    <div style={{ padding: '0 48px' }}>
      <Footer>
        <FooterBottom>
          <FooterCopyright>© 2026 Acme Inc.</FooterCopyright>
          <div style={{ display: 'flex', gap: 16 }}>
            <CaptionLink href="#">Privacy</CaptionLink>
            <CaptionLink href="#">Terms</CaptionLink>
            <CaptionLink href="#">Contact</CaptionLink>
          </div>
        </FooterBottom>
      </Footer>
    </div>
  ),
};

export const TwoColumns: StoryObj = {
  render: () => (
    <div style={{ padding: '0 48px' }}>
      <Footer>
        <FooterColumns columns={2}>
          <FooterColumn>
            <FooterColumnHeading>Quick links</FooterColumnHeading>
            <CaptionLink href="#">Home</CaptionLink>
            <CaptionLink href="#">Shop</CaptionLink>
            <CaptionLink href="#">About</CaptionLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Help</FooterColumnHeading>
            <CaptionLink href="#">FAQ</CaptionLink>
            <CaptionLink href="#">Shipping</CaptionLink>
            <CaptionLink href="#">Returns</CaptionLink>
          </FooterColumn>
        </FooterColumns>
        <FooterBottom>
          <FooterCopyright>© 2026 Acme Inc.</FooterCopyright>
        </FooterBottom>
      </Footer>
    </div>
  ),
};
