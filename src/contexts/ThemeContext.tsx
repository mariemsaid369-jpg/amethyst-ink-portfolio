import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'black' | 'purple';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('black');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'purple') {
      root.classList.add('purple');
    } else {
      root.classList.remove('purple');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'black' ? 'purple' : 'black');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
