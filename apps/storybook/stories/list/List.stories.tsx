import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  UnorderedList,
  OrderedList,
  UnstyledList,
  ListItem,
  ListItemRow,
  ListItemIcon,
  ListItemImage,
  ListItemContent,
  ListItemLabel,
  ListItemSupportText,
} from '@design-system/list';
import type { ListGap } from '@design-system/list';
import { Icon } from '@design-system/icons';

const meta: Meta<typeof UnorderedList> = {
  title: 'Components/List',
  component: UnorderedList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'List variants exported as individual components: `UnorderedList`, `OrderedList`, `UnstyledList`. ' +
          'Compose `ListItemRow`, `ListItemIcon`, `ListItemImage`, `ListItemContent`, ' +
          '`ListItemLabel`, and `ListItemSupportText` for rich list items.',
      },
    },
  },
  argTypes: {
    gap: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies ListGap[],
      table: { defaultValue: { summary: "'md'" } },
    },
  },
  args: { gap: 'md' },
};

export default meta;

export const Unordered: StoryObj<typeof UnorderedList> = {
  render: (args) => (
    <UnorderedList {...args}>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </UnorderedList>
  ),
};

export const Ordered: StoryObj<typeof OrderedList> = {
  render: (args) => (
    <OrderedList {...args}>
      <ListItem>Install dependencies</ListItem>
      <ListItem>Configure theme</ListItem>
      <ListItem>Import components</ListItem>
    </OrderedList>
  ),
};

export const Unstyled: StoryObj<typeof UnstyledList> = {
  render: (args) => (
    <UnstyledList {...args}>
      <ListItem>No markers</ListItem>
      <ListItem>Clean slate</ListItem>
      <ListItem>Custom layouts</ListItem>
    </UnstyledList>
  ),
};

export const AllVariants: StoryObj<typeof UnorderedList> = {
  name: 'All list variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#71717a', display: 'block', marginBottom: '6px' }}>
          UnorderedList
        </span>
        <UnorderedList>
          <ListItem>Apples</ListItem>
          <ListItem>Oranges</ListItem>
          <ListItem>Bananas</ListItem>
        </UnorderedList>
      </div>
      <div>
        <span style={{ fontSize: '11px', color: '#71717a', display: 'block', marginBottom: '6px' }}>
          OrderedList
        </span>
        <OrderedList>
          <ListItem>Install dependencies</ListItem>
          <ListItem>Configure theme</ListItem>
          <ListItem>Import components</ListItem>
        </OrderedList>
      </div>
      <div>
        <span style={{ fontSize: '11px', color: '#71717a', display: 'block', marginBottom: '6px' }}>
          UnstyledList
        </span>
        <UnstyledList>
          <ListItem>No markers</ListItem>
          <ListItem>Clean slate</ListItem>
          <ListItem>Custom layouts</ListItem>
        </UnstyledList>
      </div>
    </div>
  ),
};

export const WithIcons: StoryObj<typeof UnstyledList> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <UnstyledList gap="sm">
      <ListItem>
        <ListItemRow>
          <ListItemIcon>
            <Icon name="folder" />
          </ListItemIcon>
          <ListItemContent>
            <ListItemLabel>Design System</ListItemLabel>
            <ListItemSupportText>12 packages, last edited 2 hours ago</ListItemSupportText>
          </ListItemContent>
        </ListItemRow>
      </ListItem>
      <ListItem>
        <ListItemRow>
          <ListItemIcon>
            <Icon name="file" />
          </ListItemIcon>
          <ListItemContent>
            <ListItemLabel>tokens.ts</ListItemLabel>
            <ListItemSupportText>CSS custom property definitions</ListItemSupportText>
          </ListItemContent>
        </ListItemRow>
      </ListItem>
      <ListItem>
        <ListItemRow>
          <ListItemIcon>
            <Icon name="file" />
          </ListItemIcon>
          <ListItemContent>
            <ListItemLabel>Button.tsx</ListItemLabel>
            <ListItemSupportText>Primary action component</ListItemSupportText>
          </ListItemContent>
        </ListItemRow>
      </ListItem>
    </UnstyledList>
  ),
};

export const WithImages: StoryObj<typeof UnstyledList> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <UnstyledList gap="sm">
      {[
        { name: 'Alice Martin', role: 'Design Lead', color: 'c7d2fe/4f46e5' },
        { name: 'Bob Chen', role: 'Frontend Engineer', color: 'bbf7d0/16a34a' },
        { name: 'Carol Smith', role: 'Product Manager', color: 'fde68a/d97706' },
      ].map(({ name, role, color }) => (
        <ListItem key={name}>
          <ListItemRow>
            <ListItemImage src={`https://placehold.co/40x40/${color}?text=${name[0]}`} alt={name} size="md" />
            <ListItemContent>
              <ListItemLabel>{name}</ListItemLabel>
              <ListItemSupportText>{role}</ListItemSupportText>
            </ListItemContent>
            <ListItemIcon>
              <Icon name="chevron-right" />
            </ListItemIcon>
          </ListItemRow>
        </ListItem>
      ))}
    </UnstyledList>
  ),
};

export const WithIconsAndTrailingSlot: StoryObj<typeof UnstyledList> = {
  name: 'Leading icon + trailing action',
  parameters: { controls: { disable: true } },
  render: () => (
    <UnstyledList gap="sm">
      {['Design tokens', 'Component library', 'Storybook setup'].map((label, i) => (
        <ListItem key={label}>
          <ListItemRow>
            <ListItemIcon>
              <Icon name="star" />
            </ListItemIcon>
            <ListItemContent>
              <ListItemLabel>{label}</ListItemLabel>
              <ListItemSupportText>Step {i + 1} of 3</ListItemSupportText>
            </ListItemContent>
            <ListItemIcon>
              <Icon name="chevron-right" />
            </ListItemIcon>
          </ListItemRow>
        </ListItem>
      ))}
    </UnstyledList>
  ),
};

export const TopAlignedRows: StoryObj<typeof UnstyledList> = {
  name: 'Row alignment: start',
  parameters: { controls: { disable: true } },
  render: () => (
    <UnstyledList gap="md">
      <ListItem>
        <ListItemRow align="start">
          <ListItemIcon>
            <Icon name="file" />
          </ListItemIcon>
          <ListItemContent>
            <ListItemLabel>Multi-line content</ListItemLabel>
            <ListItemSupportText>
              This item has a longer description that wraps across multiple lines, so the icon aligns to the
              top of the row.
            </ListItemSupportText>
          </ListItemContent>
        </ListItemRow>
      </ListItem>
      <ListItem>
        <ListItemRow align="start">
          <ListItemIcon>
            <Icon name="folder" />
          </ListItemIcon>
          <ListItemContent>
            <ListItemLabel>Another item</ListItemLabel>
            <ListItemSupportText>Short description.</ListItemSupportText>
          </ListItemContent>
        </ListItemRow>
      </ListItem>
    </UnstyledList>
  ),
};

export const SubLists: StoryObj<typeof UnorderedList> = {
  name: 'Nested sub-lists',
  parameters: { controls: { disable: true } },
  render: () => (
    <UnorderedList>
      <ListItem>
        Frontend
        <UnorderedList nested>
          <ListItem>React</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>
            Styling
            <UnorderedList nested>
              <ListItem>Linaria</ListItem>
              <ListItem>CSS custom properties</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>
        Tooling
        <OrderedList nested>
          <ListItem>Vite</ListItem>
          <ListItem>Vitest</ListItem>
          <ListItem>Storybook</ListItem>
        </OrderedList>
      </ListItem>
    </UnorderedList>
  ),
};

export const Gaps: StoryObj<typeof UnstyledList> = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: '40px' }}>
      {(['sm', 'md', 'lg'] as ListGap[]).map((gap) => (
        <div key={gap}>
          <span style={{ fontSize: '11px', color: '#71717a', marginBottom: '4px', display: 'block' }}>
            gap={gap}
          </span>
          <UnstyledList gap={gap}>
            {['Item one', 'Item two', 'Item three'].map((label) => (
              <ListItem key={label}>
                <ListItemRow>
                  <ListItemIcon>
                    <Icon name="file" />
                  </ListItemIcon>
                  <ListItemLabel>{label}</ListItemLabel>
                </ListItemRow>
              </ListItem>
            ))}
          </UnstyledList>
        </div>
      ))}
    </div>
  ),
};
