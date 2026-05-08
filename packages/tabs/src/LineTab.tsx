import React from 'react';
import { cx } from '@linaria/core';
import { TabBase, lineTabActiveStyle } from './Tabs.styles';
import { useTabsContext } from './Tabs';

export interface LineTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const LineTab: React.FC<LineTabProps> = ({ value, className, onClick, children, ...props }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <TabBase
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      className={cx(isActive && lineTabActiveStyle, className)}
      onClick={(e) => {
        setActiveTab(value);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </TabBase>
  );
};
LineTab.displayName = 'LineTab';
