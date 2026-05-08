import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Tooltip } from '..';

// Helper: the TooltipWrapper span is the first child of the container
function getWrapper(container: HTMLElement): HTMLElement {
  return container.firstChild as HTMLElement;
}

describe('Tooltip — rendering', () => {
  it('renders the trigger children', () => {
    const { container } = render(
      <Tooltip content="Hello">
        <button>Hover me</button>
      </Tooltip>,
    );
    expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
    // wrapper span present
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  it('does not show tooltip initially', () => {
    render(
      <Tooltip content="Hello">
        <button>btn</button>
      </Tooltip>,
    );
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

describe('Tooltip — hover trigger (default)', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('shows tooltip after the hover delay', () => {
    const { container } = render(
      <Tooltip content="Tooltip text" delay={400}>
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.mouseEnter(getWrapper(container));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    act(() => vi.advanceTimersByTime(400));

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip text');
  });

  it('cancels tooltip if mouse leaves before delay elapses', () => {
    const { container } = render(
      <Tooltip content="Tooltip text" delay={400}>
        <button>btn</button>
      </Tooltip>,
    );
    const wrapper = getWrapper(container);
    fireEvent.mouseEnter(wrapper);
    act(() => vi.advanceTimersByTime(200));
    fireEvent.mouseLeave(wrapper);
    act(() => vi.advanceTimersByTime(400));

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('hides tooltip on mouse leave', () => {
    const { container } = render(
      <Tooltip content="Tooltip text" delay={400}>
        <button>btn</button>
      </Tooltip>,
    );
    const wrapper = getWrapper(container);
    fireEvent.mouseEnter(wrapper);
    act(() => vi.advanceTimersByTime(400));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    fireEvent.mouseLeave(wrapper);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('does not show when disabled', () => {
    const { container } = render(
      <Tooltip content="Tooltip text" disabled>
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.mouseEnter(getWrapper(container));
    act(() => vi.advanceTimersByTime(400));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

describe('Tooltip — focus trigger', () => {
  it('shows tooltip immediately on focus', () => {
    const { container } = render(
      <Tooltip content="Focus tip">
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.focus(getWrapper(container));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('hides tooltip on blur', () => {
    const { container } = render(
      <Tooltip content="Focus tip">
        <button>btn</button>
      </Tooltip>,
    );
    const wrapper = getWrapper(container);
    fireEvent.focus(wrapper);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.blur(wrapper);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

describe('Tooltip — click trigger', () => {
  it('shows tooltip on click', () => {
    const { container } = render(
      <Tooltip content="Click tip" trigger="click">
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.click(getWrapper(container));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('toggles tooltip on repeated click', () => {
    const { container } = render(
      <Tooltip content="Click tip" trigger="click">
        <button>btn</button>
      </Tooltip>,
    );
    const wrapper = getWrapper(container);
    fireEvent.click(wrapper);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.click(wrapper);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('does not show on hover in click mode', () => {
    const { container } = render(
      <Tooltip content="Click tip" trigger="click">
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.mouseEnter(getWrapper(container));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('does not show on focus in click mode', () => {
    const { container } = render(
      <Tooltip content="Click tip" trigger="click">
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.focus(getWrapper(container));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

describe('Tooltip — both trigger', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('shows on hover and on click', () => {
    const { container } = render(
      <Tooltip content="Both tip" trigger="both" delay={200}>
        <button>btn</button>
      </Tooltip>,
    );
    const wrapper = getWrapper(container);
    fireEvent.click(wrapper);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.click(wrapper);
    fireEvent.mouseEnter(wrapper);
    act(() => vi.advanceTimersByTime(200));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});

describe('Tooltip — keyboard', () => {
  it('hides tooltip on Escape', () => {
    const { container } = render(
      <Tooltip content="Esc tip">
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.focus(getWrapper(container));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

describe('Tooltip — accessibility', () => {
  it('sets aria-describedby on the child when open', () => {
    const { container } = render(
      <Tooltip content="Desc">
        <button>btn</button>
      </Tooltip>,
    );
    const btn = screen.getByRole('button');
    expect(btn).not.toHaveAttribute('aria-describedby');

    fireEvent.focus(getWrapper(container));
    expect(btn).toHaveAttribute('aria-describedby');
    const id = btn.getAttribute('aria-describedby')!;
    expect(document.getElementById(id)).toBe(screen.getByRole('tooltip'));
  });

  it('tooltip has role="tooltip"', () => {
    const { container } = render(
      <Tooltip content="tip">
        <button>btn</button>
      </Tooltip>,
    );
    fireEvent.focus(getWrapper(container));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('removes aria-describedby when closed', () => {
    const { container } = render(
      <Tooltip content="Desc">
        <button>btn</button>
      </Tooltip>,
    );
    const wrapper = getWrapper(container);
    fireEvent.focus(wrapper);
    expect(screen.getByRole('button')).toHaveAttribute('aria-describedby');
    fireEvent.blur(wrapper);
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-describedby');
  });
});
