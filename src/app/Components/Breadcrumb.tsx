// components/Breadcrumb.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Breadcrumb() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  // Generate breadcrumb items based on pathname
  const generateBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', href: '/' }];
    let currentPath = '';

    segments.forEach(segment => {
      currentPath += `/${segment}`;
      const label = segment
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({ label, href: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav
      aria-label="breadcrumb"
      style={{
        padding: '10px 20px',
        backgroundColor: isDarkMode ? '#2a2a2a' : '#f8f9fa',
        borderBottom: `1px solid ${isDarkMode ? '#444' : '#dee2e6'}`,
        fontSize: '14px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4px',
        }}
      >
        <span
          style={{
            color: isDarkMode ? '#aaa' : '#666',
            marginRight: '8px',
          }}
        >
          📍 You are here:
        </span>
        {breadcrumbs.map((breadcrumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <span key={breadcrumb.href} style={{ display: 'flex', alignItems: 'center' }}>
              {idx > 0 && (
                <span style={{ margin: '0 8px', color: isDarkMode ? '#666' : '#999' }}>
                  /
                </span>
              )}
              {isLast ? (
                <span style={{ color: isDarkMode ? '#fff' : '#000', fontWeight: 'bold' }}>
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  style={{ color: isDarkMode ? '#4da6ff' : '#0066cc', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                >
                  {breadcrumb.label}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
