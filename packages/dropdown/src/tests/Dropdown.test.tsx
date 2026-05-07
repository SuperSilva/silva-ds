import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DefaultDropdown, OutlineDropdown, Dropdown } from '../Dropdown';

const Options = () => (
  <>
    <option value="a">Option A</option>
    <option value="b">Option B</option>
  </>
);

describe('DefaultDropdown', () => {
  it('renders a select element', () => {
    render(
      <DefaultDropdown>
        <Options />
      </DefaultDropdown>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders options', () => {
    render(
      <DefaultDropdown>
        <Options />
      </DefaultDropdown>,
    );
    expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(
      <DefaultDropdown disabled>
        <Options />
      </DefaultDropdown>,
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(
      <DefaultDropdown ref={ref}>
        <Options />
      </DefaultDropdown>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it('accepts a defaultValue', () => {
    render(
      <DefaultDropdown defaultValue="b">
        <Options />
      </DefaultDropdown>,
    );
    expect(screen.getByRole('combobox')).toHaveValue('b');
  });
});

describe('OutlineDropdown', () => {
  it('renders a select element', () => {
    render(
      <OutlineDropdown>
        <Options />
      </OutlineDropdown>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(
      <OutlineDropdown ref={ref}>
        <Options />
      </OutlineDropdown>,
    );
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});

describe('Dropdown alias', () => {
  it('is the same as DefaultDropdown', () => {
    expect(Dropdown).toBe(DefaultDropdown);
  });
});
