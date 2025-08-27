// src/app/page.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import { tabsConfig } from '@/config/tabs'; // Import the tab configuration

const Home = () => {
  return (
    <div>
      <h1>My Application</h1>

      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          {tabsConfig.map((tab) => (
            <li key={tab.href} style={{ margin: '0 10px' }}>
              <Link
                href={tab.href}
                style={{
                  padding: '8px 16px',
                  textDecoration: 'none',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ccc',
                }}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <p>Welcome! Click on a tab to view the corresponding page.</p>
      </div>
    </div>
  );
};

export default Home;