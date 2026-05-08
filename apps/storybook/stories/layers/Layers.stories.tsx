import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LayerProvider } from '@design-system/layers';
import { Tooltip } from '@design-system/tooltip';
import { DefaultDropdown, OutlineDropdown } from '@design-system/dropdown';
import { Modal, ModalOverlay } from '@design-system/modal';
import { NeutralLabel, SuccessLabel, InfoLabel } from '@design-system/label';
import type { DropdownOption } from '@design-system/dropdown';

function InfoIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" />
      <line x1="8" y1="7" x2="8" y2="11" />
      <circle cx="8" cy="4.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const meta: Meta = {
  title: 'Layers/All Layers',
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <LayerProvider zIndex={1000}>
        <Story />
      </LayerProvider>
    ),
  ],
};
export default meta;

const TEAM_OPTIONS: DropdownOption[] = [
  { value: 'design', label: 'Design' },
  {
    value: 'engineering',
    label: 'Engineering',
    hint: (
      <Tooltip content="Includes frontend and backend engineers" placement="right" delay={0}>
        <span style={{ display: 'inline-flex', alignItems: 'center', color: '#a1a1aa' }}>
          <InfoIcon />
        </span>
      </Tooltip>
    ),
  },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
];

const SIZE_OPTIONS: DropdownOption[] = [
  { value: 'xs', label: 'Extra Small' },
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
  { value: 'xl', label: 'Extra Large', disabled: true },
];

/* ─── Shared visual helpers ─────────────────────────────────────────────── */

function Card({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div
      style={{
        border: '1px solid #e4e4e7',
        borderRadius: 8,
        padding: 20,
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      <p
        style={{
          margin: '0 0 16px',
          fontSize: 12,
          fontWeight: 600,
          color: '#71717a',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>{children}</div>;
}

function Btn({
  children,
  onClick,
  variant = 'default',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'ghost';
}) {
  const styles: React.CSSProperties =
    variant === 'primary'
      ? {
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 500,
        }
      : variant === 'ghost'
        ? {
            background: 'none',
            color: '#0070f3',
            border: 'none',
            borderRadius: 6,
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 500,
          }
        : {
            background: '#fff',
            color: '#18181b',
            border: '1px solid #d4d4d8',
            borderRadius: 6,
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 500,
          };
  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}

/* ─── Main story ─────────────────────────────────────────────────────────── */

export const AllLayersOpen: StoryObj = {
  name: 'All Layers — tooltip + dropdown + modal',
  render: () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [team, setTeam] = useState('engineering');
    const [modalTeam, setModalTeam] = useState('design');
    const [modalSize, setModalSize] = useState('md');

    return (
      <div style={{ minHeight: '100vh', background: '#fafafa', padding: 32 }}>
        {/* ── Page header ── */}
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#18181b' }}>Layers Stress Test</h1>
            <p style={{ margin: '4px 0 0', fontSize: 13, color: '#71717a' }}>
              All floating components share one <code>LayerProvider</code>. Open them simultaneously to verify
              stacking.
            </p>
          </div>
          <Tooltip content="Opens a modal with its own dropdown and tooltip inside">
            <Btn variant="primary" onClick={() => setModalOpen(true)}>
              Open Modal
            </Btn>
          </Tooltip>
        </div>

        {/* ── Background layer content ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
          <Card title="Layer 1 — Tooltips">
            <Row>
              <Tooltip content="This tooltip is on layer 1" placement="top" trigger="click">
                <Btn>Click for tooltip ↑</Btn>
              </Tooltip>
              <Tooltip content="Tooltip below" placement="bottom" trigger="click">
                <Btn>Click for tooltip ↓</Btn>
              </Tooltip>
            </Row>
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <Tooltip content="Status: healthy" placement="right">
                <span>
                  <SuccessLabel>Active</SuccessLabel>
                </span>
              </Tooltip>
              <Tooltip content="Pending review" placement="right">
                <span>
                  <InfoLabel>Pending</InfoLabel>
                </span>
              </Tooltip>
              <Tooltip content="Archived last week" placement="right">
                <span>
                  <NeutralLabel>Archived</NeutralLabel>
                </span>
              </Tooltip>
            </div>
          </Card>

          <Card title="Layer 1 — Dropdown">
            <p style={{ margin: '0 0 8px', fontSize: 13, color: '#71717a' }}>
              Selected: <strong>{team}</strong>
            </p>
            <DefaultDropdown
              options={TEAM_OPTIONS}
              value={team}
              onChange={setTeam}
              placeholder="Select team"
            />
          </Card>

          <Card title="Layer 1 — Tooltip + Info">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                {
                  label: 'Deploy pipeline',
                  tip: 'Last ran 2 minutes ago',
                  status: <SuccessLabel size="sm">OK</SuccessLabel>,
                },
                {
                  label: 'Test suite',
                  tip: '1,204 tests passing',
                  status: <SuccessLabel size="sm">OK</SuccessLabel>,
                },
                {
                  label: 'Bundle size',
                  tip: 'Increased by 4 kB this week',
                  status: <InfoLabel size="sm">Watch</InfoLabel>,
                },
              ].map(({ label, tip, status }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: '#18181b' }}>{label}</span>
                  <Tooltip content={tip} placement="left">
                    <span>{status}</span>
                  </Tooltip>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ── Modal: layer 2 ── */}
        {modalOpen && (
          <>
            <ModalOverlay onClick={() => setModalOpen(false)} />
            <Modal onClose={() => setModalOpen(false)} size="md">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Modal header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 8,
                  }}
                >
                  <div>
                    <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#18181b' }}>
                      Modal — Layer 2
                    </h2>
                    <p style={{ margin: '4px 0 0', fontSize: 13, color: '#71717a' }}>
                      Dropdowns and tooltips inside the modal sit above the modal itself (layer 2+).
                    </p>
                  </div>
                  <Tooltip content="Close this modal" placement="left">
                    <button
                      onClick={() => setModalOpen(false)}
                      style={{
                        background: 'none',
                        border: '1px solid #e4e4e7',
                        borderRadius: 6,
                        padding: '4px 8px',
                        cursor: 'pointer',
                        fontSize: 13,
                        color: '#71717a',
                      }}
                    >
                      ✕
                    </button>
                  </Tooltip>
                </div>

                <div
                  style={{
                    borderTop: '1px solid #f4f4f5',
                    paddingTop: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  {/* Dropdown inside modal */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#18181b',
                        marginBottom: 6,
                      }}
                    >
                      Team (dropdown inside modal)
                    </label>
                    <OutlineDropdown
                      options={TEAM_OPTIONS}
                      value={modalTeam}
                      onChange={setModalTeam}
                      placeholder="Select team"
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#18181b',
                        marginBottom: 6,
                      }}
                    >
                      Size (another dropdown in modal)
                    </label>
                    <OutlineDropdown
                      options={SIZE_OPTIONS}
                      value={modalSize}
                      onChange={setModalSize}
                      placeholder="Select size"
                    />
                  </div>

                  {/* Tooltips inside modal */}
                  <div>
                    <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 500, color: '#18181b' }}>
                      Tooltips inside the modal
                    </p>
                    <Row>
                      <Tooltip
                        content="Tooltip from inside the modal — appears above everything"
                        placement="top"
                        trigger="click"
                      >
                        <Btn>Click → tooltip above modal</Btn>
                      </Tooltip>
                      <Tooltip content="Left-side tooltip" placement="left" trigger="click">
                        <Btn>Click → tooltip left</Btn>
                      </Tooltip>
                    </Row>
                  </div>
                </div>

                {/* Modal footer */}
                <div
                  style={{
                    borderTop: '1px solid #f4f4f5',
                    paddingTop: 16,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 8,
                  }}
                >
                  <Btn onClick={() => setModalOpen(false)}>Cancel</Btn>
                  <Btn variant="primary" onClick={() => setModalOpen(false)}>
                    Save
                  </Btn>
                </div>
              </div>
            </Modal>
          </>
        )}

        {/* ── Legend ── */}
        <div
          style={{
            marginTop: 32,
            padding: 16,
            background: '#f4f4f5',
            borderRadius: 8,
            fontSize: 13,
            color: '#71717a',
          }}
        >
          <strong style={{ color: '#18181b' }}>What to verify:</strong> open the dropdown in the main content,
          then open the modal — the modal should appear above the dropdown panel. Inside the modal, open a
          dropdown and a tooltip — both should appear above the modal. All portals share the same{' '}
          <code>data-ds-layers</code> container rendered by <code>LayerProvider</code>.
        </div>
      </div>
    );
  },
};

/* ─── Focused stories for each layer boundary ──────────────────────────── */

export const TooltipOverDropdown: StoryObj = {
  name: 'Tooltip over open Dropdown',
  render: () => {
    const [value, setValue] = useState('design');
    return (
      <div style={{ padding: 40, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        <div>
          <p style={{ margin: '0 0 8px', fontSize: 13, color: '#71717a' }}>
            Open the dropdown, then hover the tooltip →
          </p>
          <DefaultDropdown options={TEAM_OPTIONS} value={value} onChange={setValue} />
        </div>
        <Tooltip content="I should appear above the dropdown panel" placement="top" delay={0}>
          <Btn>Tooltip trigger</Btn>
        </Tooltip>
      </div>
    );
  },
};

export const ModalOverAll: StoryObj = {
  name: 'Modal over tooltips and dropdowns',
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('design');
    return (
      <div style={{ padding: 40 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
          <DefaultDropdown
            options={TEAM_OPTIONS}
            value={value}
            onChange={setValue}
            placeholder="Open me first"
          />
          <Tooltip content="I sit on layer 1" placement="top" delay={0}>
            <Btn>Hover me</Btn>
          </Tooltip>
          <Btn variant="primary" onClick={() => setOpen(true)}>
            Open Modal (covers everything)
          </Btn>
        </div>

        {open && (
          <>
            <ModalOverlay onClick={() => setOpen(false)} />
            <Modal onClose={() => setOpen(false)} size="sm">
              <h2 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 700 }}>I am layer 2</h2>
              <p style={{ margin: '0 0 16px', fontSize: 14, color: '#71717a' }}>
                The dropdown and tooltip behind me should be fully covered by the modal overlay.
              </p>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <Btn onClick={() => setOpen(false)}>Close</Btn>
              </div>
            </Modal>
          </>
        )}
      </div>
    );
  },
};
