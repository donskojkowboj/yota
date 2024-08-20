import { useEffect, useState } from 'react';

import { Card } from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import { CarouselControl } from '../../../../../UIComponents/CarouselControl/index.js';

import styles from './PromoSliderMobile.module.scss';

export const PromoSliderMobile = () => {
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
    <>
      <div className={styles.carousel}>
        <Card variant="blue" additionalClassname={styles.promoSlider}>
          <div className={styles.promoSlider__wrapper}>
            <div className={styles.promoSlider__textWrapper}>
              <h2 className={styles.promoSlider__title}>
                Семейный конструктор
              </h2>
              <div className={styles.promoSlider__descr}>
                Выгода до 15% за объединение номеров в группу
              </div>
            </div>

            <img
              className={styles.promoSlider__img}
              src="/src/assets/images/promo-simcards.png"
              alt="promo"
            />
          </div>
          <Button additionalClassname={styles.promoSlider__btn} variant="white">
            Заказать SIM-карту
          </Button>
        </Card>
        <Card variant="blue" additionalClassname={styles.promoSlider}>
          <div className={styles.promoSlider__wrapper}>
            <div className={styles.promoSlider__textWrapper}>
              <h2 className={styles.promoSlider__title}>
                Семейный конструктор
              </h2>
              <div className={styles.promoSlider__descr}>
                Выгода до 15% за объединение номеров в группу
              </div>
            </div>

            <img
              className={styles.promoSlider__img}
              src="/src/assets/images/promo-simcards.png"
              alt="promo"
            />
          </div>
          <Button additionalClassname={styles.promoSlider__btn} variant="white">
            Заказать SIM-карту
          </Button>
        </Card>
        <Card variant="blue" additionalClassname={styles.promoSlider}>
          <div className={styles.promoSlider__wrapper}>
            <div className={styles.promoSlider__textWrapper}>
              <h2 className={styles.promoSlider__title}>
                Семейный конструктор
              </h2>
              <div className={styles.promoSlider__descr}>
                Выгода до 15% за объединение номеров в группу
              </div>
            </div>

            <img
              className={styles.promoSlider__img}
              src="/src/assets/images/promo-simcards.png"
              alt="promo"
            />
          </div>
          <Button additionalClassname={styles.promoSlider__btn} variant="white">
            Заказать SIM-карту
          </Button>
        </Card>
        <Card variant="blue" additionalClassname={styles.promoSlider}>
          <div className={styles.promoSlider__wrapper}>
            <div className={styles.promoSlider__textWrapper}>
              <h2 className={styles.promoSlider__title}>
                Семейный конструктор
              </h2>
              <div className={styles.promoSlider__descr}>
                Выгода до 15% за объединение номеров в группу
              </div>
            </div>

            <img
              className={styles.promoSlider__img}
              src="/src/assets/images/promo-simcards.png"
              alt="promo"
            />
          </div>
          <Button additionalClassname={styles.promoSlider__btn} variant="white">
            Заказать SIM-карту
          </Button>
        </Card>
        <Card variant="blue" additionalClassname={styles.promoSlider}>
          <div className={styles.promoSlider__wrapper}>
            <div className={styles.promoSlider__textWrapper}>
              <h2 className={styles.promoSlider__title}>
                Семейный конструктор
              </h2>
              <div className={styles.promoSlider__descr}>
                Выгода до 15% за объединение номеров в группу
              </div>
            </div>

            <img
              className={styles.promoSlider__img}
              src="/src/assets/images/promo-simcards.png"
              alt="promo"
            />
          </div>
          <Button additionalClassname={styles.promoSlider__btn} variant="white">
            Заказать SIM-карту
          </Button>
        </Card>
      </div>

      <div className={styles.promoSlider__carouselButtons}>
        {[...Array(totalButtons)].map((_, index) => (
          <CarouselControl
            onClick={() => handleControlClick(index)}
            key={index}
            variant={index === activeIndex ? 'active' : undefined}
          />
        ))}
      </div>
    </>
  );
};
