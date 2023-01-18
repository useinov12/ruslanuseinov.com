import { createContext, useContext, useEffect, useState } from 'react';

type theme = 'light' | 'dark';

export const ThemeContext = createContext<{
  theme: theme;
  handleTheme: () => void;
}>({
  theme: 'light',
  handleTheme: () => 1,
});

export default function ThemeProvider(props: any) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  function handleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, handleTheme }} {...props} />;
}
export const useTheme = () => useContext(ThemeContext);
