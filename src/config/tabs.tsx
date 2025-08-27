// src/config/tabs.ts
import { useLocalStorage } from 'use-local-storage';
import { useEffect, useState } from 'react';

export interface TabConfig {
  label: string;
  href: string;
}

const defaultTabsConfig: TabConfig[] = [
  { label: 'Escape Room', href: '/escape-room' },
  { label: 'Coding Races', href: '/coding-races' },
  { label: 'Court Room', href: '/court-room' },
];

export const useTabsConfig = () => {
  const [tabs, setTabs] = useLocalStorage<TabConfig[]>('tabsConfig', defaultTabsConfig);
  const [tabsConfig, setTabsConfig] = useState<TabConfig[]>(tabs || defaultTabsConfig);

  useEffect(() => {
    if (tabs) {
      setTabsConfig(tabs);
    }
  }, [tabs]);

  return { tabsConfig, setTabs: setTabsConfig };
};