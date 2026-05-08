import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '..';

const BasicAccordion = ({
  type = 'single' as const,
  defaultOpen,
  onValueChange,
}: {
  type?: 'single' | 'multiple';
  defaultOpen?: string | string[];
  onValueChange?: (v: string | string[]) => void;
}) => (
  <Accordion type={type} defaultOpen={defaultOpen} onValueChange={onValueChange}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Question 1</AccordionTrigger>
      <AccordionPanel>Answer 1</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Question 2</AccordionTrigger>
      <AccordionPanel>Answer 2</AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Question 3</AccordionTrigger>
      <AccordionPanel>Answer 3</AccordionPanel>
    </AccordionItem>
  </Accordion>
);

describe('Accordion (single)', () => {
  it('renders all triggers', () => {
    render(<BasicAccordion />);
    expect(screen.getByRole('button', { name: /Question 1/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Question 2/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Question 3/i })).toBeInTheDocument();
  });

  it('panels are collapsed by default', () => {
    render(<BasicAccordion />);
    expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();
  });

  it('opens a panel on trigger click', async () => {
    const user = userEvent.setup();
    render(<BasicAccordion />);
    await user.click(screen.getByRole('button', { name: /Question 1/i }));
    expect(screen.getByText('Answer 1')).toBeInTheDocument();
  });

  it('closes an open panel on trigger click', async () => {
    const user = userEvent.setup();
    render(<BasicAccordion defaultOpen="item-1" />);
    expect(screen.getByText('Answer 1')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /Question 1/i }));
    expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();
  });

  it('closes the first item when opening a second (single mode)', async () => {
    const user = userEvent.setup();
    render(<BasicAccordion defaultOpen="item-1" />);
    await user.click(screen.getByRole('button', { name: /Question 2/i }));
    expect(screen.queryByText('Answer 1')).not.toBeInTheDocument();
    expect(screen.getByText('Answer 2')).toBeInTheDocument();
  });

  it('trigger has correct aria-expanded', async () => {
    const user = userEvent.setup();
    render(<BasicAccordion />);
    const trigger = screen.getByRole('button', { name: /Question 1/i });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('calls onValueChange when an item is opened', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<BasicAccordion onValueChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /Question 1/i }));
    expect(onChange).toHaveBeenCalledWith('item-1');
  });

  it('calls onValueChange with empty string when item is closed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<BasicAccordion defaultOpen="item-1" onValueChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /Question 1/i }));
    expect(onChange).toHaveBeenCalledWith('');
  });
});

describe('Accordion (multiple)', () => {
  it('can open multiple items simultaneously', async () => {
    const user = userEvent.setup();
    render(<BasicAccordion type="multiple" />);
    await user.click(screen.getByRole('button', { name: /Question 1/i }));
    await user.click(screen.getByRole('button', { name: /Question 2/i }));
    expect(screen.getByText('Answer 1')).toBeInTheDocument();
    expect(screen.getByText('Answer 2')).toBeInTheDocument();
  });

  it('calls onValueChange with array', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<BasicAccordion type="multiple" defaultOpen={['item-1']} onValueChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /Question 2/i }));
    expect(onChange).toHaveBeenCalledWith(expect.arrayContaining(['item-1', 'item-2']));
  });
});

describe('Accordion (controlled)', () => {
  it('respects controlled value', () => {
    render(
      <Accordion value="item-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Q1</AccordionTrigger>
          <AccordionPanel>A1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Q2</AccordionTrigger>
          <AccordionPanel>A2</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.queryByText('A1')).not.toBeInTheDocument();
    expect(screen.getByText('A2')).toBeInTheDocument();
  });
});
