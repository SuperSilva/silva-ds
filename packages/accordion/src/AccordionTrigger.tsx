import React from 'react';
import { Icon } from '@design-system/icons';
import { AccordionTriggerRoot, AccordionChevronRoot } from './Accordion.styles';
import { useAccordionItemContext } from './AccordionItem';

export type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, onClick, ...props }) => {
  const { value, isOpen, toggle } = useAccordionItemContext();

  return (
    <AccordionTriggerRoot
      type="button"
      aria-expanded={isOpen}
      aria-controls={`accordion-panel-${value}`}
      id={`accordion-trigger-${value}`}
      onClick={(e) => {
        toggle();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
      <AccordionChevronRoot data-open={String(isOpen)}>
        <Icon name="chevron-down" size="sm" />
      </AccordionChevronRoot>
    </AccordionTriggerRoot>
  );
};
AccordionTrigger.displayName = 'AccordionTrigger';
