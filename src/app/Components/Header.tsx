// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  // Load theme and current page from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    setCurrentPage(pathname || '/');
  }, [pathname]);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/escape-room', label: 'Escape Room' },
    { href: '/coding-races', label: 'Coding Races' },
    { href: '/court-room', label: 'Court Room' },
  ];

  return (
    <header
      style={{
        padding: '10px 20px',
        backgroundColor: isDarkMode ? '#333' : '#eee',
        color: isDarkMode ? '#fff' : '#000',
        position: 'relative',
        borderBottom: `2px solid ${isDarkMode ? '#555' : '#ddd'}`,
        zIndex: 999,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ margin: 0 }}>My LMS App</h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px 12px',
              backgroundColor: isDarkMode ? '#555' : '#ddd',
              color: isDarkMode ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '30px',
              height: '30px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label="Menu"
          >
            <span
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: isDarkMode ? '#fff' : '#000',
                transition: '0.3s',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)',
              }}
            />
            <span
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: isDarkMode ? '#fff' : '#000',
                transition: '0.3s',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: isDarkMode ? '#fff' : '#000',
                transition: '0.3s',
                transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0)',
              }}
            />
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <nav
          style={{
            position: 'absolute',
            top: '100%',
            right: '20px',
            backgroundColor: isDarkMode ? '#444' : '#fff',
            border: `1px solid ${isDarkMode ? '#555' : '#ddd'}`,
            borderRadius: '4px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 1000,
            minWidth: '180px',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: '10px 0' }}>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setCurrentPage(item.href);
                      setIsMenuOpen(false);
                    }}
                    style={{
                      display: 'block',
                      padding: '10px 20px',
                      color: isDarkMode ? '#fff' : '#000',
                      textDecoration: 'none',
                      backgroundColor: isActive ? (isDarkMode ? '#555' : '#f0f0f0') : 'transparent',
                      borderLeft: isActive ? `4px solid ${isDarkMode ? '#4da6ff' : '#0066cc'}` : '4px solid transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
