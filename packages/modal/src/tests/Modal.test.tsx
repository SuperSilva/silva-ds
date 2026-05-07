import React, { useRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LayerProvider } from '@design-system/layers';
import { Modal, ModalOverlay } from '../Modal';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <LayerProvider>{children}</LayerProvider>;
}

describe('Modal', () => {
  it('renders children', () => {
    render(
      <Modal>
        <p>Modal content</p>
      </Modal>,
      { wrapper: Wrapper },
    );
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('has role="dialog" and aria-modal="true"', () => {
    render(<Modal />, { wrapper: Wrapper });
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('closes on Escape key', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Modal onClose={onClose}>content</Modal>, { wrapper: Wrapper });
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('does not throw without onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    render(<Modal>content</Modal>, { wrapper: Wrapper });
    await expect(user.keyboard('{Escape}')).resolves.not.toThrow();
  });

  it('forwards ref to the dialog element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Modal ref={ref}>content</Modal>, { wrapper: Wrapper });
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.getAttribute('role')).toBe('dialog');
  });

  it('accepts aria-labelledby', () => {
    render(
      <Modal aria-labelledby="title">
        <h2 id="title">Title</h2>
      </Modal>,
      { wrapper: Wrapper },
    );
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'title');
  });

  // Focus tests run without LayerProvider to avoid the two-stage portal mount
  // (LayerProvider first renders to body, then moves to the layer container,
  // which remounts the portal and can disrupt focus in jsdom).

  it('focuses initialFocusRef element on open', () => {
    function TestModal() {
      const btnRef = useRef<HTMLButtonElement>(null);
      return (
        <Modal initialFocusRef={btnRef}>
          <button ref={btnRef}>Focus me</button>
          <button>Other</button>
        </Modal>
      );
    }
    render(<TestModal />);
    expect(screen.getByRole('button', { name: 'Focus me' })).toHaveFocus();
  });

  it('focuses the dialog itself when no initialFocusRef is given', () => {
    render(<Modal />);
    expect(screen.getByRole('dialog')).toHaveFocus();
  });

  it('traps focus forward with Tab', async () => {
    const user = userEvent.setup();
    render(
      <Modal>
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </Modal>,
    );
    const buttons = screen.getAllByRole('button');
    buttons[2].focus();
    await user.tab();
    expect(buttons[0]).toHaveFocus();
  });

  it('traps focus backward with Shift+Tab', async () => {
    const user = userEvent.setup();
    render(
      <Modal>
        <button>First</button>
        <button>Second</button>
      </Modal>,
    );
    const buttons = screen.getAllByRole('button');
    buttons[0].focus();
    await user.tab({ shift: true });
    expect(buttons[1]).toHaveFocus();
  });
});

describe('ModalOverlay', () => {
  it('renders into the document', () => {
    render(<ModalOverlay data-testid="overlay" />, { wrapper: Wrapper });
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<ModalOverlay data-testid="overlay" onClick={onClick} style={{ pointerEvents: 'auto' }} />, {
      wrapper: Wrapper,
    });
    await user.click(screen.getByTestId('overlay'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('forwards ref to the overlay element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ModalOverlay ref={ref} />, { wrapper: Wrapper });
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
