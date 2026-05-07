import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  List,
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
} from '../List';
import type { ListGap } from '../List';

// ─── List variants ────────────────────────────────────────────────────────────

describe('UnorderedList', () => {
  it('renders children', () => {
    render(
      <UnorderedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </UnorderedList>,
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders as ul', () => {
    const { container } = render(
      <UnorderedList>
        <ListItem>Item</ListItem>
      </UnorderedList>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('forwards className', () => {
    const { container } = render(
      <UnorderedList className="custom">
        <ListItem>Item</ListItem>
      </UnorderedList>,
    );
    expect(container.querySelector('ul')).toHaveClass('custom');
  });

  it.each<ListGap>(['sm', 'md', 'lg'])('renders gap "%s" without errors', (gap) => {
    render(
      <UnorderedList gap={gap}>
        <ListItem>Item</ListItem>
      </UnorderedList>,
    );
  });
});

describe('OrderedList', () => {
  it('renders as ol', () => {
    const { container } = render(
      <OrderedList>
        <ListItem>Item</ListItem>
      </OrderedList>,
    );
    expect(container.querySelector('ol')).toBeInTheDocument();
  });
});

describe('UnstyledList', () => {
  it('renders as ul', () => {
    const { container } = render(
      <UnstyledList>
        <ListItem>Item</ListItem>
      </UnstyledList>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });
});

describe('List alias', () => {
  it('List is an alias for UnorderedList', () => {
    expect(List).toBe(UnorderedList);
  });
});

// ─── ListItem ─────────────────────────────────────────────────────────────────

describe('ListItem', () => {
  it('renders children', () => {
    render(
      <ul>
        <ListItem>Hello</ListItem>
      </ul>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('forwards className', () => {
    render(
      <ul>
        <ListItem className="custom">Item</ListItem>
      </ul>,
    );
    expect(screen.getByText('Item')).toHaveClass('custom');
  });
});

// ─── Compound sub-components ──────────────────────────────────────────────────

describe('ListItemRow', () => {
  it('renders children in a div', () => {
    const { container } = render(
      <ul>
        <li>
          <ListItemRow>
            <span>content</span>
          </ListItemRow>
        </li>
      </ul>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});

describe('ListItemIcon', () => {
  it('renders with aria-hidden', () => {
    const { container } = render(
      <ul>
        <li>
          <ListItemIcon>
            <svg data-testid="icon" />
          </ListItemIcon>
        </li>
      </ul>,
    );
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});

describe('ListItemImage', () => {
  it('renders an img with src and alt', () => {
    render(
      <ul>
        <li>
          <ListItemImage src="/test.jpg" alt="Avatar" />
        </li>
      </ul>,
    );
    expect(screen.getByRole('img', { name: 'Avatar' })).toHaveAttribute('src', '/test.jpg');
  });
});

describe('ListItemContent + Label + SupportText', () => {
  it('renders a full complex item', () => {
    render(
      <UnstyledList>
        <ListItem>
          <ListItemRow>
            <ListItemContent>
              <ListItemLabel>Primary</ListItemLabel>
              <ListItemSupportText>Secondary</ListItemSupportText>
            </ListItemContent>
          </ListItemRow>
        </ListItem>
      </UnstyledList>,
    );
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });
});

describe('nested sub-lists', () => {
  it('renders a nested List inside a ListItem', () => {
    const { container } = render(
      <UnorderedList>
        <ListItem>
          Parent
          <UnorderedList nested>
            <ListItem>Child</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>,
    );
    const lists = container.querySelectorAll('ul');
    expect(lists).toHaveLength(2);
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
