import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabList, LineTab, PillTab, TabPanel } from '@design-system/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultTab="overview">
      <TabList aria-label="Product tabs">
        <LineTab value="overview">Overview</LineTab>
        <LineTab value="specs">Specifications</LineTab>
        <LineTab value="reviews">Reviews</LineTab>
        <LineTab value="support" disabled>
          Support
        </LineTab>
      </TabList>
      <TabPanel value="overview">
        <p>This is the overview tab content. It shows a general description of the product.</p>
      </TabPanel>
      <TabPanel value="specs">
        <p>Technical specifications and detailed measurements go here.</p>
      </TabPanel>
      <TabPanel value="reviews">
        <p>Customer reviews and ratings are displayed in this panel.</p>
      </TabPanel>
      <TabPanel value="support">
        <p>Support documentation and contact information.</p>
      </TabPanel>
    </Tabs>
  ),
};

export const PillVariant: Story = {
  render: () => (
    <Tabs defaultTab="all">
      <TabList aria-label="Filter tabs">
        <PillTab value="all">All</PillTab>
        <PillTab value="active">Active</PillTab>
        <PillTab value="draft">Draft</PillTab>
        <PillTab value="archived">Archived</PillTab>
      </TabList>
      <TabPanel value="all">Showing all items.</TabPanel>
      <TabPanel value="active">Showing active items only.</TabPanel>
      <TabPanel value="draft">Showing draft items only.</TabPanel>
      <TabPanel value="archived">Showing archived items only.</TabPanel>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [tab, setTab] = useState('a');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          Active tab: <strong>{tab}</strong>
        </div>
        <Tabs value={tab} onValueChange={setTab}>
          <TabList aria-label="Controlled tabs">
            <LineTab value="a">Tab A</LineTab>
            <LineTab value="b">Tab B</LineTab>
            <LineTab value="c">Tab C</LineTab>
          </TabList>
          <TabPanel value="a">Content for A</TabPanel>
          <TabPanel value="b">Content for B</TabPanel>
          <TabPanel value="c">Content for C</TabPanel>
        </Tabs>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setTab('a')}>Go to A</button>
          <button onClick={() => setTab('b')}>Go to B</button>
          <button onClick={() => setTab('c')}>Go to C</button>
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div>
        <h3 style={{ marginBottom: 16, fontSize: 14, fontWeight: 600, color: '#666' }}>Line Tabs</h3>
        <Tabs defaultTab="tab1">
          <TabList aria-label="Line tabs demo">
            <LineTab value="tab1">Dashboard</LineTab>
            <LineTab value="tab2">Analytics</LineTab>
            <LineTab value="tab3">Reports</LineTab>
          </TabList>
          <TabPanel value="tab1">Dashboard content</TabPanel>
          <TabPanel value="tab2">Analytics content</TabPanel>
          <TabPanel value="tab3">Reports content</TabPanel>
        </Tabs>
      </div>
      <div>
        <h3 style={{ marginBottom: 16, fontSize: 14, fontWeight: 600, color: '#666' }}>Pill Tabs</h3>
        <Tabs defaultTab="tab1">
          <TabList aria-label="Pill tabs demo">
            <PillTab value="tab1">Dashboard</PillTab>
            <PillTab value="tab2">Analytics</PillTab>
            <PillTab value="tab3">Reports</PillTab>
          </TabList>
          <TabPanel value="tab1">Dashboard content</TabPanel>
          <TabPanel value="tab2">Analytics content</TabPanel>
          <TabPanel value="tab3">Reports content</TabPanel>
        </Tabs>
      </div>
    </div>
  ),
};
