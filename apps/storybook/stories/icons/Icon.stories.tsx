import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@design-system/icons';
import { IconProvider } from '@design-system/icons';
import { defaultIcons } from '@design-system/icons';
import type { IconSize } from '@design-system/icons';
import type { DefaultIconName } from '@design-system/icons';

const ICON_NAMES = Object.keys(defaultIcons) as DefaultIconName[];
const SIZES: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'SVG icon component backed by a sprite sheet. Wrap your app in `<IconProvider>` to render icons via ' +
          '`<use href>` (one DOM node per symbol). Without a provider the icon renders inline as a fallback.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
      description: 'Icon name from the default registry or a custom registry.',
    },
    size: {
      control: 'select',
      options: SIZES,
      description: 'Named size or a numeric pixel value.',
      table: { defaultValue: { summary: "'md'" } },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label. Omit for decorative icons (aria-hidden is set automatically).',
    },
  },
  args: { name: 'home', size: 'md' },
};

export default meta;

export const Default: StoryObj<typeof Icon> = {
  render: (args) => (
    <IconProvider>
      <Icon {...args} />
    </IconProvider>
  ),
};

export const InlineFallback: StoryObj<typeof Icon> = {
  parameters: {
    docs: {
      description: { story: 'Renders inline SVG when no `<IconProvider>` is in the tree.' },
    },
  },
  render: (args) => <Icon {...args} />,
};

export const Sizes: StoryObj<typeof Icon> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <IconProvider>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {SIZES.map((size) => (
          <div
            key={size}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            <Icon name="home" size={size} />
            <span style={{ fontSize: '11px', color: '#666' }}>{size}</span>
          </div>
        ))}
      </div>
    </IconProvider>
  ),
};

export const AllIcons: StoryObj<typeof Icon> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <IconProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {ICON_NAMES.map((name) => (
          <div
            key={name}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '6px' }}
          >
            <Icon name={name} size="lg" />
            <span style={{ fontSize: '11px', color: '#666', maxWidth: '80px', wordBreak: 'break-all' }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </IconProvider>
  ),
};

export const CustomIcon: StoryObj<typeof Icon> = {
  parameters: {
    docs: {
      description: { story: 'Custom icons merged via the `icons` prop on `<IconProvider>`.' },
    },
    controls: { disable: true },
  },
  render: () => {
    const customRegistry = {
      diamond: {
        viewBox: '0 0 24 24',
        element: <polygon points="12 2 22 12 12 22 2 12" />,
      },
    };
    return (
      <IconProvider icons={customRegistry}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Icon name="diamond" size="lg" />
          <span>Custom &quot;diamond&quot; icon injected via IconProvider</span>
        </div>
      </IconProvider>
    );
  },
};
