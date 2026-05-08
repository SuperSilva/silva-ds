import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import {
  TextInput,
  EmailInput,
  PasswordInput,
  NumberInput,
  SearchInput,
  Textarea,
  Checkbox,
  Radio,
  Input,
} from '..';

describe('TextInput', () => {
  it('renders a text input', () => {
    render(<TextInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<TextInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('accepts a placeholder', () => {
    render(<TextInput placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<TextInput disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders type="text"', () => {
    const { container } = render(<TextInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
  });
});

describe('EmailInput', () => {
  it('renders type="email"', () => {
    const { container } = render(<EmailInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'email');
  });
});

describe('PasswordInput', () => {
  it('renders type="password"', () => {
    const { container } = render(<PasswordInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'password');
  });
});

describe('NumberInput', () => {
  it('renders type="number"', () => {
    const { container } = render(<NumberInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'number');
  });
});

describe('SearchInput', () => {
  it('renders type="search"', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'search');
  });
});

describe('Textarea', () => {
  it('renders a textarea', () => {
    render(<Textarea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('can be disabled', () => {
    render(<Textarea disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

describe('Checkbox', () => {
  it('renders a checkbox', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('can be toggled', async () => {
    const user = userEvent.setup();
    render(<Checkbox />);
    const cb = screen.getByRole('checkbox');
    await user.click(cb);
    expect(cb).toBeChecked();
    await user.click(cb);
    expect(cb).not.toBeChecked();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

describe('Radio', () => {
  it('renders a radio button', () => {
    render(<Radio />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('can be selected', async () => {
    const user = userEvent.setup();
    render(<Radio name="test" />);
    const radio = screen.getByRole('radio');
    await user.click(radio);
    expect(radio).toBeChecked();
  });
});

describe('Input alias', () => {
  it('is the same as TextInput', () => {
    expect(Input).toBe(TextInput);
  });
});
