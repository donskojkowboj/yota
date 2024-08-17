import { useRef } from 'react';

export const useThrottle = (callback, delay = 1000) => {
  const shouldWait = useRef(false);
  return (...args) => {
    if (shouldWait.current) return;
    callback(...args);
    shouldWait.current = true;
    setTimeout(() => {
      shouldWait.current = false;
    }, delay);
  };
};
