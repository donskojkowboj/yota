import { useState, useEffect } from 'react';
import { useThrottle } from './useThrottle.js';

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const onResize = useThrottle(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    console.log('resize');
    return () => {
      window.removeEventListener('resize', onResize);
      console.log('return');
    };
  }, [width]);
  return [width, height];
};
