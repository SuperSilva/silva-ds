import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@design-system/tooltip';
import { Icon } from '@design-system/icons';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <button>Hover over me</button>
    </Tooltip>
  ),
};

export const Placements: StoryObj = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 24,
        alignItems: 'center',
        justifyItems: 'center',
        padding: 64,
      }}
    >
      <div />
      <Tooltip content="Tooltip on top" placement="top">
        <button>Top</button>
      </Tooltip>
      <div />

      <Tooltip content="Tooltip on the left" placement="left">
        <button>Left</button>
      </Tooltip>
      <div
        style={{
          width: 80,
          height: 40,
          background: '#f4f4f5',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          color: '#71717a',
        }}
      >
        trigger
      </div>
      <Tooltip content="Tooltip on the right" placement="right">
        <button>Right</button>
      </Tooltip>

      <div />
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <button>Bottom</button>
      </Tooltip>
      <div />
    </div>
  ),
};

export const ClickTrigger: Story = {
  render: () => (
    <Tooltip content="Appears on click, closes on click outside or Escape" trigger="click">
      <button>Click me</button>
    </Tooltip>
  ),
};

export const BothTrigger: Story = {
  render: () => (
    <Tooltip content="Works on hover and click" trigger="both" delay={200}>
      <button>Hover or click</button>
    </Tooltip>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <span>
          <strong>Keyboard shortcut</strong>
          <br />
          Press{' '}
          <kbd
            style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '0 4px',
              borderRadius: 3,
              fontFamily: 'monospace',
            }}
          >
            ⌘ K
          </kbd>{' '}
          to open
        </span>
      }
      placement="bottom"
    >
      <button>Rich tooltip</button>
    </Tooltip>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Tooltip content="This tooltip works" placement="top">
        <button>Enabled</button>
      </Tooltip>
      <Tooltip content="This tooltip is disabled" placement="top" disabled>
        <button>Disabled tooltip</button>
      </Tooltip>
    </div>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Tooltip content="Instant (0ms delay)" delay={0}>
        <button>Instant</button>
      </Tooltip>
      <Tooltip content="Default (400ms delay)" delay={400}>
        <button>Default</button>
      </Tooltip>
      <Tooltip content="Slow (800ms delay)" delay={800}>
        <button>Slow</button>
      </Tooltip>
    </div>
  ),
};

export const OnVariousElements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Tooltip on a link">
        <a href="#" onClick={(e) => e.preventDefault()}>
          A link
        </a>
      </Tooltip>
      <Tooltip content="Tooltip on a badge" placement="bottom">
        <span
          style={{
            background: '#dcfce7',
            color: '#15803d',
            padding: '2px 8px',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          Active
        </span>
      </Tooltip>
      <Tooltip content="Copy to clipboard" placement="top">
        <button
          style={{
            background: 'none',
            border: '1px solid #d4d4d8',
            borderRadius: 6,
            padding: '6px 8px',
            cursor: 'pointer',
          }}
        >
          <Icon name="copy" size={16} />
        </button>
      </Tooltip>
    </div>
  ),
};

export const Controlled: StoryObj = {
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <Tooltip content="I'm a controlled-ish tooltip" trigger="click" placement="bottom">
          <button onClick={() => setLog((l) => [...l, `clicked at ${new Date().toLocaleTimeString()}`])}>
            Click to open
          </button>
        </Tooltip>
        {log.length > 0 && (
          <ul style={{ fontSize: 13, color: '#71717a', margin: 0, padding: '0 0 0 16px' }}>
            {log.slice(-3).map((entry, i) => (
              <li key={i}>{entry}</li>
            ))}
          </ul>
        )}
      </div>
    );
  },
};
