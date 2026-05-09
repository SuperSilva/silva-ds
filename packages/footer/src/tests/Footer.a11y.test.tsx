import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Footer, FooterColumns, FooterColumn, FooterColumnHeading, FooterBottom, FooterCopyright } from '..';

describe('Footer a11y', () => {
  it('full footer has no violations', async () => {
    const { container } = render(
      <Footer>
        <FooterColumns columns={4}>
          <FooterColumn>
            <FooterColumnHeading>Company</FooterColumnHeading>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Products</FooterColumnHeading>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Support</FooterColumnHeading>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Legal</FooterColumnHeading>
          </FooterColumn>
        </FooterColumns>
        <FooterBottom>
          <FooterCopyright>© 2026 Acme Inc. All rights reserved.</FooterCopyright>
        </FooterBottom>
      </Footer>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('simple footer has no violations', async () => {
    const { container } = render(
      <Footer>
        <FooterBottom>
          <FooterCopyright>© 2026 Acme Inc.</FooterCopyright>
        </FooterBottom>
      </Footer>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
