import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NeutralLabel, InfoLabel, SuccessLabel, WarningLabel, ErrorLabel, Label } from '..';

describe('NeutralLabel', () => {
  it('renders children', () => {
    render(<NeutralLabel>Draft</NeutralLabel>);
    expect(screen.getByText('Draft')).toBeInTheDocument();
  });

  it('renders as span', () => {
    const { container } = render(<NeutralLabel>text</NeutralLabel>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('forwards className', () => {
    render(<NeutralLabel className="custom">text</NeutralLabel>);
    expect(screen.getByText('text')).toHaveClass('custom');
  });

  it('forwards data attributes', () => {
    render(<NeutralLabel data-testid="lbl">text</NeutralLabel>);
    expect(screen.getByTestId('lbl')).toBeInTheDocument();
  });
});

describe('InfoLabel', () => {
  it('renders children', () => {
    render(<InfoLabel>Info</InfoLabel>);
    expect(screen.getByText('Info')).toBeInTheDocument();
  });
});

describe('SuccessLabel', () => {
  it('renders children', () => {
    render(<SuccessLabel>Active</SuccessLabel>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });
});

describe('WarningLabel', () => {
  it('renders children', () => {
    render(<WarningLabel>Pending</WarningLabel>);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
});

describe('ErrorLabel', () => {
  it('renders children', () => {
    render(<ErrorLabel>Error</ErrorLabel>);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});

describe('Label alias', () => {
  it('is the same as NeutralLabel', () => {
    expect(Label).toBe(NeutralLabel);
  });
});

describe('size prop', () => {
  it('renders sm size', () => {
    render(
      <NeutralLabel size="sm" data-testid="sm">
        text
      </NeutralLabel>,
    );
    expect(screen.getByTestId('sm')).toBeInTheDocument();
  });

  it('renders md size (default)', () => {
    render(
      <NeutralLabel size="md" data-testid="md">
        text
      </NeutralLabel>,
    );
    expect(screen.getByTestId('md')).toBeInTheDocument();
  });
});
