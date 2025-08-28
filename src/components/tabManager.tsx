'use client'
import React, { useState } from 'react';
import { useTabsConfig, TabConfig } from '@/config/tabs';

const TabManager = () => {
  const { tabsConfig, setTabs } = useTabsConfig();
  const [newTabLabel, setNewTabLabel] = useState('');
  const [newTabHref, setNewTabHref] = useState('');

  const handleAddTab = () => {
    if (newTabLabel && newTabHref) {
      const newTab: TabConfig = { label: newTabLabel, href: newTabHref };
      setTabs([...tabsConfig, newTab]);
      setNewTabLabel('');
      setNewTabHref('');
    }
  };

  const handleRemoveTab = (index: number) => {
    const updatedTabs = [...tabsConfig];
    updatedTabs.splice(index, 1);
    setTabs(updatedTabs);
  };

  return (
    <div>
      <h2>Tab Management</h2>

      <div>
        <label>Label:</label>
        <input
          type="text"
          value={newTabLabel}
          onChange={(e) => setNewTabLabel(e.target.value)}
        />
      </div>

      <div>
        <label>Href:</label>
        <input
          type="text"
          value={newTabHref}
          onChange={(e) => setNewTabHref(e.target.value)}
        />
      </div>

      <button onClick={handleAddTab}>Add Tab</button>

      <h3>Existing Tabs:</h3>
      <ul>
        {tabsConfig.map((tab, index) => (
          <li key={index}>
            {tab.label} ({tab.href})
            <button onClick={() => handleRemoveTab(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabManager;