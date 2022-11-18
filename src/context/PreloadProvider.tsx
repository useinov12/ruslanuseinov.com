import clsx from 'clsx';
import * as React from 'react';

const PreloadContext = React.createContext<boolean>(false);

export default  function PreloadProvider({ children }: { children: React.ReactNode }) {
  /** If the dom is loaded */
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    // setTimeout(() => {
      
    // }, 100);

    document.addEventListener('DOMContentLoaded', (event) => {
      setIsPreloaded(true);
    });

  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => React.useContext(PreloadContext);