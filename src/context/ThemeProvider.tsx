import React from 'react';

type theme = 'light' | 'dark'


export const ThemeContext = React.createContext<{
    theme:theme, 
    handleTheme:()=>void
}>({
    theme:'light',
    handleTheme: ()=>1
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  function handleTheme(){
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  React.useEffect(()=>{
    console.log(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
