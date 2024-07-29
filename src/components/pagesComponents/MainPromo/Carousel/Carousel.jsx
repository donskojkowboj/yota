import { Button } from '../../../UIComponents/Button';
import { CarouselControl } from './CarouselControl';
import styles from './Carousel.module.scss';

export const Carousel = () => {
  let path = '/src/assets/images/promo-simcards.png';
  return (
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Семейный конструктор</h2>
            <div className={styles.descr}>
              Выгода до 15% за объединение номеров в группу
            </div>
          </div>

          <Button variant="white">Заказать SIM-карту</Button>
        </div>
        <img className={styles.img} src={path} alt="promo" />
      </div>
      <div className={styles.carouselButtons}>
        <CarouselControl variant="active" />
        <CarouselControl />
        <CarouselControl />
        <CarouselControl />
        <CarouselControl />
      </div>
    </div>
  );
};
