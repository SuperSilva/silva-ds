import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer, FooterColumns, FooterColumn, FooterColumnHeading, FooterBottom, FooterCopyright } from '..';

describe('Footer', () => {
  it('renders as a contentinfo landmark', () => {
    render(<Footer>content</Footer>);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('forwards className', () => {
    const { container } = render(<Footer className="custom">content</Footer>);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('renders children', () => {
    render(
      <Footer>
        <span>child</span>
      </Footer>,
    );
    expect(screen.getByText('child')).toBeInTheDocument();
  });
});

describe('FooterColumns', () => {
  it('renders children', () => {
    render(
      <FooterColumns>
        <div>col1</div>
        <div>col2</div>
      </FooterColumns>,
    );
    expect(screen.getByText('col1')).toBeInTheDocument();
    expect(screen.getByText('col2')).toBeInTheDocument();
  });

  it('defaults to 4 columns without error', () => {
    const { container } = render(
      <FooterColumns>
        <div>a</div>
      </FooterColumns>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('accepts columns 2, 3, 4 without error', () => {
    ([2, 3, 4] as const).forEach((columns) => {
      const { container } = render(
        <FooterColumns columns={columns}>
          <div>a</div>
        </FooterColumns>,
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});

describe('FooterColumn', () => {
  it('renders children', () => {
    render(
      <FooterColumn>
        <span>item</span>
      </FooterColumn>,
    );
    expect(screen.getByText('item')).toBeInTheDocument();
  });
});

describe('FooterColumnHeading', () => {
  it('renders text content', () => {
    render(<FooterColumnHeading>Company</FooterColumnHeading>);
    expect(screen.getByText('Company')).toBeInTheDocument();
  });

  it('renders as a paragraph by default', () => {
    const { container } = render(<FooterColumnHeading>Heading</FooterColumnHeading>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });
});

describe('FooterBottom', () => {
  it('renders children', () => {
    render(
      <FooterBottom>
        <span>bottom content</span>
      </FooterBottom>,
    );
    expect(screen.getByText('bottom content')).toBeInTheDocument();
  });
});

describe('FooterCopyright', () => {
  it('renders copyright text', () => {
    render(<FooterCopyright>© 2026 Acme Inc.</FooterCopyright>);
    expect(screen.getByText('© 2026 Acme Inc.')).toBeInTheDocument();
  });
});

describe('Footer composition', () => {
  it('renders a full footer without errors', () => {
    render(
      <Footer>
        <FooterColumns columns={3}>
          <FooterColumn>
            <FooterColumnHeading>Company</FooterColumnHeading>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Products</FooterColumnHeading>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnHeading>Legal</FooterColumnHeading>
          </FooterColumn>
        </FooterColumns>
        <FooterBottom>
          <FooterCopyright>© 2026 Acme Inc.</FooterCopyright>
        </FooterBottom>
      </Footer>,
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('© 2026 Acme Inc.')).toBeInTheDocument();
  });
});
