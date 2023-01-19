import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';

const PreloadContext = createContext<boolean>(false);

export default function PreloadProvider({ children }: { children: ReactNode }) {
  const [preloaded, setIsPreloaded] = useState<boolean>(false);

  /** If the dom is loaded */
  useEffect(() => {
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

export const usePreloadState = () => useContext(PreloadContext);
