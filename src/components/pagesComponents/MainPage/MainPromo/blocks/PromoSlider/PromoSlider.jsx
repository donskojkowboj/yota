import { Button } from '../../../../../UIComponents/Button';
import { CarouselControl } from '../../../../../UIComponents/CarouselControl';
import { Card, commonCardStyles } from '../../../../../UIComponents/Card';
import styles from './PromoSlider.module.scss';

export const PromoSlider = () => {
  const promoSliderTitle = `${commonCardStyles.title} ${commonCardStyles.title__big} ${commonCardStyles.title__white}`;
  const promoSliderDescription = `${commonCardStyles.description} ${commonCardStyles.description__big} ${commonCardStyles.description__white}`;

  return (
    <Card variant="blue" additionalClassname={styles.promoSlider}>
      <div className={styles.promoSlider__wrapper}>
        <div className={styles.promoSlider__innerWrapper}>
          <div className={styles.promoSlider__textWrapper}>
            <h2 className={promoSliderTitle}>Семейный конструктор</h2>
            <div className={promoSliderDescription}>
              Выгода до 15% за объединение номеров в группу
            </div>
          </div>

          <Button variant="white">Заказать SIM-карту</Button>
        </div>
        <img
          className={styles.promoSlider__img}
          src="/src/assets/images/promo-simcards.png"
          alt="promo"
        />
      </div>
      <div className={styles.promoSlider__carouselButtons}>
        <CarouselControl variant="active" />
        <CarouselControl />
        <CarouselControl />
        <CarouselControl />
        <CarouselControl />
      </div>
    </Card>
  );
};
