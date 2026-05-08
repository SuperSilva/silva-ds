import React, { useRef } from 'react';
import { TabListRoot } from './Tabs.styles';

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  'aria-label'?: string;
}

export const TabList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(ref.current?.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])') ?? []);
    const idx = tabs.indexOf(document.activeElement as HTMLElement);
    if (idx === -1) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      tabs[(idx + 1) % tabs.length]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      tabs[(idx - 1 + tabs.length) % tabs.length]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      tabs[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      tabs[tabs.length - 1]?.focus();
    }
  };

  return (
    <TabListRoot ref={ref} role="tablist" onKeyDown={handleKeyDown} className={className} {...props}>
      {children}
    </TabListRoot>
  );
};
TabList.displayName = 'TabList';
