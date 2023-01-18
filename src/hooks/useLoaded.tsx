import { useEffect, useState } from 'react';

import { usePreloadState } from 'src/context/PreloadProvider';

export default function useLoaded() {
  const preloaded = usePreloadState();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 400);
    }
  }, [preloaded]);

  return isLoaded;
}
