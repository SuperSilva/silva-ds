import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalOverlay, useModal } from '@design-system/modal';
import type { ModalSize } from '@design-system/modal';

const SIZES: ModalSize[] = ['sm', 'md', 'lg'];

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A dialog modal rendered via React portal into the `LayerProvider` container. ' +
          'Pass a `trigger` element to let the Modal manage its own open/close state. ' +
          'Use `open`/`onOpenChange` for fully controlled usage. ' +
          '`overlay` adds a backdrop; `closeOnOverlayClick` (default: true) dismisses on backdrop click.',
      },
    },
  },
};

export default meta;

// ─── Inner close button (uses useModal context) ─────────────────────────────

function CloseButton({ label = 'Close' }: { label?: string }) {
  const { close } = useModal();
  return (
    <button
      onClick={close}
      style={{
        padding: '8px 16px',
        background: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}

// ─── Stories ─────────────────────────────────────────────────────────────────

export const WithTrigger: StoryObj = {
  name: 'With trigger (self-managed)',
  parameters: { controls: { disable: true } },
  render: () => (
    <Modal
      trigger={
        <button
          style={{
            padding: '8px 16px',
            background: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Open modal
        </button>
      }
      overlay
      aria-labelledby="trigger-modal-title"
    >
      <h2 id="trigger-modal-title" style={{ margin: '0 0 8px', fontSize: '18px' }}>
        Self-managed modal
      </h2>
      <p style={{ margin: '0 0 20px', color: '#71717a', fontSize: '14px' }}>
        The modal manages its own open/close state. Click the backdrop or press Escape to dismiss. Use{' '}
        <code>useModal()</code> inside to access <code>close()</code>.
      </p>
      <CloseButton />
    </Modal>
  ),
};

export const Controlled: StoryObj = {
  name: 'Controlled (open / onOpenChange)',
  parameters: { controls: { disable: true } },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '8px 16px',
            background: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Open modal
        </button>
        <Modal open={open} onOpenChange={setOpen} overlay aria-labelledby="controlled-title">
          <h2 id="controlled-title" style={{ margin: '0 0 8px', fontSize: '18px' }}>
            Controlled modal
          </h2>
          <p style={{ margin: '0 0 20px', color: '#71717a', fontSize: '14px' }}>
            Parent owns the open state. Press Escape or click the backdrop to close.
          </p>
          <CloseButton />
        </Modal>
      </>
    );
  },
};

export const NoOverlay: StoryObj = {
  name: 'No overlay',
  parameters: { controls: { disable: true } },
  render: () => (
    <Modal
      trigger={
        <button
          style={{
            padding: '8px 16px',
            background: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Open modal
        </button>
      }
      overlay={false}
      aria-labelledby="no-overlay-title"
    >
      <h2 id="no-overlay-title" style={{ margin: '0 0 8px', fontSize: '18px' }}>
        No overlay
      </h2>
      <p style={{ margin: '0 0 20px', color: '#71717a', fontSize: '14px' }}>
        Press Escape or click Close to dismiss.
      </p>
      <CloseButton />
    </Modal>
  ),
};

export const Sizes: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [openSize, setOpenSize] = useState<ModalSize | null>(null);
    return (
      <>
        <div style={{ display: 'flex', gap: '8px' }}>
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setOpenSize(size)}
              style={{
                padding: '8px 16px',
                background: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Open {size}
            </button>
          ))}
        </div>
        <Modal
          open={openSize !== null}
          onOpenChange={(o) => {
            if (!o) setOpenSize(null);
          }}
          size={openSize ?? 'md'}
          overlay
          aria-labelledby="size-modal-title"
        >
          <h2 id="size-modal-title" style={{ margin: '0 0 8px', fontSize: '18px' }}>
            Size: {openSize}
          </h2>
          <p style={{ margin: '0 0 20px', color: '#71717a', fontSize: '14px' }}>
            This is the <strong>{openSize}</strong> modal variant.
          </p>
          <CloseButton />
        </Modal>
      </>
    );
  },
};

export const OverlayOnly: StoryObj = {
  name: 'ModalOverlay standalone',
  parameters: { controls: { disable: true } },
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <button
          onClick={() => setVisible((v) => !v)}
          style={{
            padding: '8px 16px',
            background: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Toggle overlay
        </button>
        {visible && <ModalOverlay onClick={() => setVisible(false)} />}
      </>
    );
  },
};
