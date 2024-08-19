import { useState, useEffect } from 'react';
import { Breakpoints } from '../../lib/breakpoints.js';

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const isMobile = width <= Breakpoints.md;
  const isDesktop = width <= Breakpoints.xl;

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return { width, height, isMobile, isDesktop };
};
