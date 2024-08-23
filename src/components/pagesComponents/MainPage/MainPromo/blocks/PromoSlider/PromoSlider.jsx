import { useWindowSize } from '../../../../../../hooks/useWindowSize.js';
import { PromoSliderDesktop } from './components/PromoSliderDesktop';
import { PromoSliderMobile } from './components/PromoSliderMobile';
import { useEffect, useState } from 'react';

export const PromoSlider = () => {
  const { isMobile } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickTrigger, setClickTrigger] = useState(0);
  const totalButtons = 5;

  const handleSlideChange = () => {
    setActiveIndex((prev) => {
      if (prev === totalButtons - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleControlClick = (index) => {
    setActiveIndex(index);
    setClickTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(handleSlideChange, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [clickTrigger]);

  if (isMobile) {
    return (
      <PromoSliderMobile
        activeIndex={activeIndex}
        handleControlClick={handleControlClick}
        totalButtons={totalButtons}
      />
    );
  }
  return (
    <PromoSliderDesktop
      activeIndex={activeIndex}
      handleControlClick={handleControlClick}
      totalButtons={totalButtons}
    />
  );
};
