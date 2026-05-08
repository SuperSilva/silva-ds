import React, { createContext, useContext, useState } from 'react';
import { AccordionRoot } from './Accordion.styles';

export type AccordionType = 'single' | 'multiple';

export interface AccordionContextValue {
  type: AccordionType;
  openItems: Set<string>;
  toggle: (value: string) => void;
}

export const AccordionContext = createContext<AccordionContextValue | null>(null);

export function useAccordionContext(): AccordionContextValue {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('Accordion sub-components must be used inside <Accordion>');
  return ctx;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType;
  defaultOpen?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  defaultOpen,
  value,
  onValueChange,
  children,
  ...props
}) => {
  const toSet = (v: string | string[] | undefined): Set<string> =>
    new Set(v === undefined ? [] : Array.isArray(v) ? v : [v]);

  const [internalOpen, setInternalOpen] = useState<Set<string>>(() => toSet(defaultOpen));
  const isControlled = value !== undefined;
  const openItems = isControlled ? toSet(value) : internalOpen;

  const toggle = (itemValue: string) => {
    const next = new Set(openItems);
    if (next.has(itemValue)) {
      next.delete(itemValue);
    } else {
      if (type === 'single') next.clear();
      next.add(itemValue);
    }

    if (!isControlled) setInternalOpen(next);

    const result = type === 'single' ? (next.values().next().value ?? '') : [...next];
    onValueChange?.(result);
  };

  return (
    <AccordionContext.Provider value={{ type, openItems, toggle }}>
      <AccordionRoot {...props}>{children}</AccordionRoot>
    </AccordionContext.Provider>
  );
};
Accordion.displayName = 'Accordion';
