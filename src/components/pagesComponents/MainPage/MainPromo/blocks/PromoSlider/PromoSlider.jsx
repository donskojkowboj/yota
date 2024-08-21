import { useEffect, useState } from 'react';
import { Button } from '../../../../../UIComponents/Button';
import { CarouselControl } from '../../../../../UIComponents/CarouselControl';
import { Card, commonCardStyles } from '../../../../../UIComponents/Card';
import styles from './PromoSlider.module.scss';

export const PromoSlider = () => {
  const promoSliderTitle = `${commonCardStyles.title} ${commonCardStyles.title__big} ${commonCardStyles.title__white}`;
  const promoSliderDescription = `${commonCardStyles.description} ${commonCardStyles.description__big} ${commonCardStyles.description__white}`;
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickTrigger, setClickTrigger] = useState(0);
  const totalButtons = 5;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalButtons);
  };

  const handleControlClick = (index) => {
    setActiveIndex(index);
    setClickTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [clickTrigger]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{
          transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 6}px))`,
        }}
      >
        {[...Array(totalButtons)].map((_, index) => (
          <Card
            key={index}
            variant="blue"
            additionalClassname={styles.promoSlider}
          >
            <div className={styles.promoSlider__wrapper}>
              <div className={styles.promoSlider__innerWrapper}>
                <div className={styles.promoSlider__textWrapper}>
                  <h2 className={promoSliderTitle}>Семейный конструктор</h2>
                  <div className={promoSliderDescription}>
                    Выгода до 15% за объединение номеров в группу
                  </div>
                </div>

                <Button
                  additionalClassname={styles.promoSlider__btn}
                  variant="white"
                >
                  Заказать SIM-карту
                </Button>
              </div>
              <img
                className={styles.promoSlider__img}
                src="/src/assets/images/promo-simcards.png"
                alt="promo"
              />
            </div>
          </Card>
        ))}
      </div>
      <div className={styles.carouselButtons}>
        {[...Array(totalButtons)].map((_, index) => (
          <CarouselControl
            onClick={() => handleControlClick(index)}
            key={index}
            variant={index === activeIndex ? 'active' : undefined}
          />
        ))}
      </div>
    </div>
  );
};
