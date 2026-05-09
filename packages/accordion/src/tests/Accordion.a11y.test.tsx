import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '..';

describe('Accordion a11y', () => {
  it('has no violations when all panels are collapsed', async () => {
    const { container } = render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionPanel>Answer 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionPanel>Answer 2</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when a panel is expanded', async () => {
    const { container } = render(
      <Accordion type="single" defaultOpen="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Question 1</AccordionTrigger>
          <AccordionPanel>Answer 1</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Question 2</AccordionTrigger>
          <AccordionPanel>Answer 2</AccordionPanel>
        </AccordionItem>
      </Accordion>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
