import { useWindowSize } from '../../../../../../../../hooks/useWindowSize.js';
import { Card } from '../../../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../../../UIComponents/Button/index.js';
import { CarouselControl } from '../../../../../../../UIComponents/CarouselControl/index.js';

import styles from './PromoSliderMobile.module.scss';

export const PromoSliderMobile = ({
  totalButtons,
  handleControlClick,
  activeIndex,
}) => {
  const { isSmallMobile } = useWindowSize();
  const translateXSmall = `translateX(calc(-${activeIndex * 341}px - ${activeIndex * 6}px))`;
  const translateX = `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 6}px))`;

  return (
    <>
      <div className={styles.carousel}>
        <div
          className={styles.inner}
          style={
            isSmallMobile
              ? {
                  transform: translateXSmall,
                }
              : {
                  transform: translateX,
                }
          }
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
                    <h2 className={styles.promoSlider__title}>
                      Семейный конструктор
                    </h2>
                    <div className={styles.promoSlider__descr}>
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
