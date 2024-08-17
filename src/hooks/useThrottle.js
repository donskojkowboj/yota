import { useRef } from 'react';

export const useThrottle = (callback, delay = 1000) => {
  const lastRun = useRef(Date.now());
  return () => {
    if (Date.now() - lastRun.current >= delay) {
      callback();
      lastRun.current = Date.now();
    }
  };
};
