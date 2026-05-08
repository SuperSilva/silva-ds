import React, { createContext, useContext } from 'react';
import { AccordionItemRoot } from './Accordion.styles';
import { useAccordionContext } from './Accordion';

export interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
  toggle: () => void;
}

export const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export function useAccordionItemContext(): AccordionItemContextValue {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) throw new Error('AccordionTrigger/AccordionPanel must be used inside <AccordionItem>');
  return ctx;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, ...props }) => {
  const { openItems, toggle } = useAccordionContext();
  const isOpen = openItems.has(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, toggle: () => toggle(value) }}>
      <AccordionItemRoot {...props}>{children}</AccordionItemRoot>
    </AccordionItemContext.Provider>
  );
};
AccordionItem.displayName = 'AccordionItem';
