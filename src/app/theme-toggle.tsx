'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const THEME_KEY = 'preferred-theme';

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = (localStorage.getItem(THEME_KEY) as Theme | null) ?? undefined;
    const initial = stored ?? 'light';
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  };

  return (
    <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
      <span style={{ color: 'var(--color-text-muted)' }}>Theme</span>
      <button className="button secondary" type="button" onClick={toggle}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}
