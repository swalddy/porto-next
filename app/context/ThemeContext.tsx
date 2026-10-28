'use client';

import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  ReactNode,
  useCallback,
  useRef,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = 'theme-preference';
const DEFAULT_THEME: Theme = 'light';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const initializedRef = useRef(false);

  // Initialize theme on client side to avoid hydration mismatch
  useLayoutEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    try {
      const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      const initialTheme = savedTheme || systemTheme;

      // Apply theme to DOM
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
      document.documentElement.setAttribute('data-theme', initialTheme);

      // Update state (this is safe here as we only initialize once)
      // eslint-disable-next-line
      setThemeState(initialTheme);
    } catch (error) {
      console.warn('Failed to initialize theme:', error);
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme: Theme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      // Update DOM
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      document.documentElement.setAttribute('data-theme', newTheme);

      // Persist preference
      try {
        localStorage.setItem(THEME_KEY, newTheme);
      } catch (error) {
        console.warn('Failed to save theme preference:', error);
      }

      return newTheme;
    });
  }, []);

  const value: ThemeContextType = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
