import React from 'react';
import { AccordionTriggerRoot, AccordionChevronRoot } from './Accordion.styles';
import { useAccordionItemContext } from './AccordionItem';

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
        <ChevronIcon />
      </AccordionChevronRoot>
    </AccordionTriggerRoot>
  );
};
AccordionTrigger.displayName = 'AccordionTrigger';
