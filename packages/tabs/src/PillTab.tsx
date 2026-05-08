import React from 'react';
import { cx } from '@linaria/core';
import { TabBase, pillTabActiveStyle, pillTabHoverStyle } from './Tabs.styles';
import { useTabsContext } from './Tabs';

export interface PillTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const PillTab: React.FC<PillTabProps> = ({ value, className, onClick, children, ...props }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <TabBase
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      className={cx(pillTabHoverStyle, isActive && pillTabActiveStyle, className)}
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
PillTab.displayName = 'PillTab';
