import { Button } from '../../../../../../../UIComponents/Button/index.js';
import { CarouselControl } from '../../../../../../../UIComponents/CarouselControl/index.js';
import {
  Card,
  commonCardStyles,
} from '../../../../../../../UIComponents/Card/index.js';
import styles from './PromoSliderDesktop.module.scss';

export const PromoSliderDesktop = ({
  totalButtons,
  handleControlClick,
  activeIndex,
}) => {
  const promoSliderTitle = `${commonCardStyles.title} ${commonCardStyles.title__big} ${commonCardStyles.title__white}`;
  const promoSliderDescription = `${commonCardStyles.description} ${commonCardStyles.description__big} ${commonCardStyles.description__white}`;
  const translateX = `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 6}px))`;

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{
          transform: translateX,
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
