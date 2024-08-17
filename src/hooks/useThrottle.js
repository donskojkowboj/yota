import { useRef, useEffect } from 'react';

export const useThrottle = (callback, delay = 1000) => {
  const shouldWait = useRef(false);
  const timerId = useRef(null);

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  return () => {
    if (shouldWait.current) return;
    callback();

    shouldWait.current = true;
    timerId.current = setTimeout(() => {
      shouldWait.current = false;
    }, delay);
  };
};
