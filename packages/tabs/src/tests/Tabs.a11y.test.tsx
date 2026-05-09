import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Tabs, TabList, LineTab, PillTab, TabPanel } from '..';

describe('Tabs a11y', () => {
  it('LineTabs have no violations', async () => {
    const { container } = render(
      <Tabs defaultTab="a">
        <TabList aria-label="Main navigation">
          <LineTab value="a">Tab A</LineTab>
          <LineTab value="b">Tab B</LineTab>
        </TabList>
        <TabPanel value="a">Content A</TabPanel>
        <TabPanel value="b">Content B</TabPanel>
      </Tabs>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('PillTabs have no violations', async () => {
    const { container } = render(
      <Tabs defaultTab="x">
        <TabList aria-label="Filter options">
          <PillTab value="x">All</PillTab>
          <PillTab value="y">Active</PillTab>
        </TabList>
        <TabPanel value="x">All items</TabPanel>
        <TabPanel value="y">Active items</TabPanel>
      </Tabs>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
