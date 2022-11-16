import React from 'react';

type theme = 'light' | 'dark'


export const ThemeContext = React.createContext<{
    theme:theme, 
    setTheme: React.Dispatch<any>
}>({
    theme:'light',
    setTheme: ()=>{}
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
