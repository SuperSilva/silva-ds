import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { UnorderedList, OrderedList, ListItem } from '..';

describe('List a11y', () => {
  it('UnorderedList has no violations', async () => {
    const { container } = render(
      <UnorderedList>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
      </UnorderedList>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('OrderedList has no violations', async () => {
    const { container } = render(
      <OrderedList>
        <ListItem>Step one</ListItem>
        <ListItem>Step two</ListItem>
      </OrderedList>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
