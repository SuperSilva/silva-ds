import React from 'react';
import { AccordionPanelRoot, AccordionPanelInner } from './Accordion.styles';
import { useAccordionItemContext } from './AccordionItem';

export type AccordionPanelProps = React.HTMLAttributes<HTMLDivElement>;

export const AccordionPanel: React.FC<AccordionPanelProps> = ({ children, ...props }) => {
  const { value, isOpen } = useAccordionItemContext();

  return (
    <AccordionPanelRoot
      role="region"
      id={`accordion-panel-${value}`}
      aria-labelledby={`accordion-trigger-${value}`}
      data-open={String(isOpen)}
      {...props}
    >
      {isOpen && <AccordionPanelInner>{children}</AccordionPanelInner>}
    </AccordionPanelRoot>
  );
};
AccordionPanel.displayName = 'AccordionPanel';
