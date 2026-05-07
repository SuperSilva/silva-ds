import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalOverlay } from '@design-system/modal';
import { LayerProvider } from '@design-system/layers';
import type { ModalSize } from '@design-system/modal';

const SIZES: ModalSize[] = ['sm', 'md', 'lg'];

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LayerProvider>
        <Story />
      </LayerProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A dialog modal rendered via React portal into the `LayerProvider` container. ' +
          '`ModalOverlay` is a separate component — include it when you want a backdrop.',
      },
    },
  },
};

export default meta;

function OpenButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        background: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      Open modal
    </button>
  );
}

export const Default: StoryObj = {
  name: 'Default (no overlay)',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <OpenButton onClick={() => setOpen(true)} />
        {open && (
          <Modal onClose={() => setOpen(false)} aria-labelledby="modal-title">
            <h2 id="modal-title" style={{ margin: '0 0 8px', fontSize: '18px' }}>
              Modal title
            </h2>
            <p style={{ margin: '0 0 20px', color: '#71717a', fontSize: '14px' }}>
              This modal has no overlay. Press Escape or click Close to dismiss.
            </p>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: '8px 16px',
                background: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </Modal>
        )}
      </>
    );
  },
};

export const WithOverlay: StoryObj = {
  name: 'With overlay',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <OpenButton onClick={() => setOpen(true)} />
        {open && (
          <>
            <ModalOverlay onClick={() => setOpen(false)} />
            <Modal onClose={() => setOpen(false)} aria-labelledby="overlay-modal-title">
              <h2 id="overlay-modal-title" style={{ margin: '0 0 8px', fontSize: '18px' }}>
                Modal with overlay
              </h2>
              <p style={{ margin: '0 0 20px', color: '#71717a', fontSize: '14px' }}>
                Click the backdrop or press Escape to close.
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '8px 16px',
                    background: '#f4f4f5',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '8px 16px',
                    background: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Confirm
                </button>
              </div>
            </Modal>
          </>
        )}
      </>
    );
  },
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
        {openSize && (
          <>
            <ModalOverlay onClick={() => setOpenSize(null)} />
            <Modal size={openSize} onClose={() => setOpenSize(null)} aria-labelledby="size-modal-title">
              <h2 id="size-modal-title" style={{ margin: '0 0 8px', fontSize: '18px' }}>
                Size: {openSize}
              </h2>
              <p style={{ margin: '0 0 20px', color: '#71717a', fontSize: '14px' }}>
                This is the <strong>{openSize}</strong> modal variant.
              </p>
              <button
                onClick={() => setOpenSize(null)}
                style={{
                  padding: '8px 16px',
                  background: '#0070f3',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </Modal>
          </>
        )}
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
