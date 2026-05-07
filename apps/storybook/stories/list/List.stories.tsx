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

const FileIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4 2h6l3 3v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path d="M10 2v3h3" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
  </svg>
);

const FolderIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2 4a1 1 0 0 1 1-1h3l2 2h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 2l1.8 3.6L14 6.4l-3 2.9.7 4.1L8 11.4l-3.7 2 .7-4.1-3-2.9 4.2-.8L8 2z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
            <FolderIcon />
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
            <FileIcon />
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
            <FileIcon />
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
              <ChevronRightIcon />
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
              <StarIcon />
            </ListItemIcon>
            <ListItemContent>
              <ListItemLabel>{label}</ListItemLabel>
              <ListItemSupportText>Step {i + 1} of 3</ListItemSupportText>
            </ListItemContent>
            <ListItemIcon>
              <ChevronRightIcon />
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
            <FileIcon />
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
            <FolderIcon />
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
                    <FileIcon />
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
