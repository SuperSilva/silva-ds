import React from 'react';
import { TabPanelRoot } from './Tabs.styles';
import { useTabsContext } from './Tabs';

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ value, children, ...props }) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <TabPanelRoot
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      hidden={!isActive}
      {...props}
    >
      {isActive ? children : null}
    </TabPanelRoot>
  );
};
TabPanel.displayName = 'TabPanel';
