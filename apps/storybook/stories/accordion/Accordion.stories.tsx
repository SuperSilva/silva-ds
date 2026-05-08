import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '@design-system/accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: () => (
    <Accordion type="single" style={{ maxWidth: 600 }}>
      <AccordionItem value="q1">
        <AccordionTrigger>What is a design system?</AccordionTrigger>
        <AccordionPanel>
          A design system is a collection of reusable components, guided by clear standards, that can be
          assembled to build any number of applications.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>Why use Linaria for styling?</AccordionTrigger>
        <AccordionPanel>
          Linaria is a zero-runtime CSS-in-JS library. Styles are extracted at build time into static CSS
          files, giving you great performance with no runtime overhead.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger>How does this accordion animate?</AccordionTrigger>
        <AccordionPanel>
          The expand/collapse animation uses CSS grid's <code>grid-template-rows</code> trick: transitioning
          from <code>0fr</code> to <code>1fr</code> provides a smooth height animation without JavaScript.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultOpen={['q1']} style={{ maxWidth: 600 }}>
      <AccordionItem value="q1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionPanel>
          Yes! In <code>multiple</code> mode, any number of accordion items can be open at the same time.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>Does it support a default open state?</AccordionTrigger>
        <AccordionPanel>
          Yes, use the <code>defaultOpen</code> prop to specify which items should be open on initial render.
          Pass an array of values in multiple mode.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger>Is it keyboard accessible?</AccordionTrigger>
        <AccordionPanel>
          Each trigger is a native <code>button</code> element, so it's fully keyboard accessible out of the
          box.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState<string>('q1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
        <div>
          Open item: <strong>{open || 'none'}</strong>
        </div>
        <Accordion type="single" value={open} onValueChange={(v) => setOpen(v as string)}>
          <AccordionItem value="q1">
            <AccordionTrigger>First item</AccordionTrigger>
            <AccordionPanel>Content for the first item.</AccordionPanel>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Second item</AccordionTrigger>
            <AccordionPanel>Content for the second item.</AccordionPanel>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Third item</AccordionTrigger>
            <AccordionPanel>Content for the third item.</AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setOpen('q1')}>Open Q1</button>
          <button onClick={() => setOpen('q2')}>Open Q2</button>
          <button onClick={() => setOpen('')}>Close all</button>
        </div>
      </div>
    );
  },
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion type="single" defaultOpen="q2" style={{ maxWidth: 600 }}>
      <AccordionItem value="q1">
        <AccordionTrigger>First question</AccordionTrigger>
        <AccordionPanel>First answer content.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger>Second question (starts open)</AccordionTrigger>
        <AccordionPanel>This item starts expanded by default via the defaultOpen prop.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger>Third question</AccordionTrigger>
        <AccordionPanel>Third answer content.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
