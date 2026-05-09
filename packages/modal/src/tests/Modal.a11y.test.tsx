import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { LayerProvider } from '@design-system/layers';
import { Modal } from '../Modal';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <LayerProvider>{children}</LayerProvider>;
}

describe('Modal a11y', () => {
  it('has no violations when open with labelled content', async () => {
    const { container } = render(
      <Modal aria-labelledby="modal-title">
        <h2 id="modal-title">Confirm action</h2>
        <p>Are you sure you want to proceed?</p>
      </Modal>,
      { wrapper: Wrapper },
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when rendered via trigger in open state', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Modal trigger={<button>Open modal</button>} aria-labelledby="dialog-title">
        <h2 id="dialog-title">Confirm action</h2>
        <p>Some content inside the modal.</p>
      </Modal>,
      { wrapper: Wrapper },
    );
    await user.click(screen.getByRole('button', { name: 'Open modal' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
