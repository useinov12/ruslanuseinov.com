import { createContext, ReactNode, useContext, useState } from 'react';

export const ThemeContext = createContext<{
  theme: 'light' | 'dark';
  handleTheme: () => void;
}>({
  theme: 'light',
  handleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  function handleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
