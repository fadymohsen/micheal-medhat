'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'navy' | 'forest';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'navy',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('navy');

  useEffect(() => {
    // Read from localStorage (or URL param) on first mount
    const params = new URLSearchParams(window.location.search);
    let stored: string | null = null;
    try { stored = localStorage.getItem('mm-theme'); } catch {}
    const resolved = (params.get('theme') || stored || 'navy') as Theme;
    const valid: Theme = ['navy', 'forest'].includes(resolved) ? resolved : 'navy';
    apply(valid);
    setThemeState(valid);
  }, []);

  function apply(t: Theme) {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('mm-theme', t); } catch {}
  }

  function setTheme(t: Theme) {
    apply(t);
    setThemeState(t);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
