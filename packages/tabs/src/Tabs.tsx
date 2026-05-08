import React, { createContext, useContext, useState } from 'react';
import { TabsRoot } from './Tabs.styles';

export interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab components must be used inside <Tabs>');
  return ctx;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultTab?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ defaultTab = '', value, onValueChange, children, ...props }) => {
  const [internalActive, setInternalActive] = useState(defaultTab);
  const isControlled = value !== undefined;
  const activeTab = isControlled ? value : internalActive;

  const setActiveTab = (next: string) => {
    if (!isControlled) setInternalActive(next);
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <TabsRoot {...props}>{children}</TabsRoot>
    </TabsContext.Provider>
  );
};
Tabs.displayName = 'Tabs';
