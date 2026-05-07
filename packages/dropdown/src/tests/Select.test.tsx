import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LayerProvider } from '@design-system/layers';
import { DefaultSelect, OutlineSelect, Select } from '../Select';

const OPTIONS = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C', disabled: true },
];

function Wrapper({ children }: { children: React.ReactNode }) {
  return <LayerProvider>{children}</LayerProvider>;
}

describe('DefaultSelect', () => {
  it('renders the trigger button', () => {
    render(<DefaultSelect options={OPTIONS} />, { wrapper: Wrapper });
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows placeholder text by default', () => {
    render(<DefaultSelect options={OPTIONS} placeholder="Pick one" />, { wrapper: Wrapper });
    expect(screen.getByRole('combobox')).toHaveTextContent('Pick one');
  });

  it('opens the listbox on click', async () => {
    const user = userEvent.setup();
    render(<DefaultSelect options={OPTIONS} />, { wrapper: Wrapper });
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('lists all options when open', async () => {
    const user = userEvent.setup();
    render(<DefaultSelect options={OPTIONS} />, { wrapper: Wrapper });
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option C' })).toBeInTheDocument();
  });

  it('selects an option and closes the panel', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DefaultSelect options={OPTIONS} onChange={onChange} />, { wrapper: Wrapper });
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByRole('option', { name: 'Option B' }));
    expect(onChange).toHaveBeenCalledWith('b');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveTextContent('Option B');
  });

  it('does not select a disabled option', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DefaultSelect options={OPTIONS} onChange={onChange} />, { wrapper: Wrapper });
    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByRole('option', { name: 'Option C' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('respects a controlled value', () => {
    render(<DefaultSelect options={OPTIONS} value="b" onChange={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByRole('combobox')).toHaveTextContent('Option B');
  });

  it('respects a defaultValue', () => {
    render(<DefaultSelect options={OPTIONS} defaultValue="a" />, { wrapper: Wrapper });
    expect(screen.getByRole('combobox')).toHaveTextContent('Option A');
  });

  it('renders a hidden input when name is provided', () => {
    const { container } = render(<DefaultSelect options={OPTIONS} name="dept" defaultValue="a" />, {
      wrapper: Wrapper,
    });
    const hidden = container.querySelector('input[type="hidden"]') as HTMLInputElement;
    expect(hidden).not.toBeNull();
    expect(hidden.name).toBe('dept');
    expect(hidden.value).toBe('a');
  });

  it('can be disabled', () => {
    render(<DefaultSelect options={OPTIONS} disabled />, { wrapper: Wrapper });
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    render(<DefaultSelect options={OPTIONS} />, { wrapper: Wrapper });
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('forwards ref to the trigger button', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<DefaultSelect options={OPTIONS} ref={ref} />, { wrapper: Wrapper });
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

describe('OutlineSelect', () => {
  it('renders a trigger button', () => {
    render(<OutlineSelect options={OPTIONS} />, { wrapper: Wrapper });
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});

describe('Select alias', () => {
  it('is the same as DefaultSelect', () => {
    expect(Select).toBe(DefaultSelect);
  });
});
