import { Card } from '../../../UIComponents/Card';
import { Button } from '../../../UIComponents/Button';
import { CarouselControl } from '../../../UIComponents/CarouselControl';
import { ArrowBottomIcon } from '../../../UIComponents/Icons';

import { commonCardStyles } from '../../../UIComponents/Card';
import styles from './MainPromo.module.scss';

export const MainPromo = () => {
  const promoSliderTitle = `${commonCardStyles.title} ${commonCardStyles.title__big} ${commonCardStyles.title__white}`;
  const promoSliderDescription = `${commonCardStyles.description} ${commonCardStyles.description__big} ${commonCardStyles.description__white}`;
  return (
    <div>
      <h1 className={styles.title}>
        можно. <span>yota</span>
      </h1>

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

      <div className={styles.grid}>
        <Card
          variant="grey"
          direction="horizontal"
          additionalClassname={styles.form}
        >
          <h2 className={`${commonCardStyles.title} ${styles.form__title}`}>
            Оплатить
            <Button
              variant="clear"
              iconRight={<ArrowBottomIcon />}
              additionalClassname={styles.clearBlue}
            >
              смартфон / планшет
            </Button>
          </h2>

          <form className={styles.form}>
            <div className={styles.form__wrapper}>
              <div className={styles.form__sum}>
                <label htmlFor="sum">Сумма</label>
                <input placeholder="500₽" type="number" id="sum" />
              </div>

              <div className={styles.form__tel}>
                <label htmlFor="phone">Номер телефона</label>
                <input placeholder="+7" type="tel" id="phone" />
              </div>
            </div>
            <Button additionalClassname={commonCardStyles.btn}>Оплатить</Button>
          </form>
        </Card>

        <Card
          variant="grey"
          direction="horizontal"
          additionalClassname={styles.chooseTariff}
        >
          <div className={styles.chooseTariff__wrapper}>
            <div className={styles.chooseTariff__textWrapper}>
              <h2 className={commonCardStyles.title}>Подобрать тариф</h2>
              <div className={commonCardStyles.description}>
                Выбери из готовых тарифов или создай свой
              </div>
            </div>
            <Button
              additionalClassname={commonCardStyles.btn}
              variant="outline"
            >
              Выбрать
            </Button>
          </div>
          <div>
            <img
              className={styles.chooseTariff__img}
              src="/src/assets/images/package-pricing.png"
              alt="img"
            />
          </div>
        </Card>

        <Card variant="grey" additionalClassname={styles.ownNumber}>
          <img
            className={commonCardStyles.img}
            src="/src/assets/images/double-sim.png"
            alt="img"
          />
          <div className={styles.textContent}>
            <h2 className={commonCardStyles.title}>
              Хочу в YOTA со своим номером
            </h2>
            <div className={commonCardStyles.description}>
              Введите номер для переноса
            </div>
          </div>
          <Button additionalClassname={commonCardStyles.btn} variant="outline">
            Перейти
          </Button>
        </Card>

        <Card variant="grey" additionalClassname={styles.internet}>
          <img
            className={commonCardStyles.img}
            src="/src/assets/images/flash-card.png"
            alt="img"
          />
          <div className={styles.textContent}>
            <h2 className={commonCardStyles.title}>Подключить интернет</h2>
            <div className={commonCardStyles.description}>
              4G интернет. Для дома, для офиса, для поездок.
            </div>
          </div>
          <Button additionalClassname={commonCardStyles.btn} variant="outline">
            Перейти
          </Button>
        </Card>

        <Card variant="grey" additionalClassname={styles.netShop}>
          <img
            className={commonCardStyles.img}
            src="/src/assets/images/router.png"
            alt="img"
          />
          <div className={styles.textContent}>
            <h2 className={commonCardStyles.title}>Интернет магазин</h2>
            <div className={commonCardStyles.description}>
              Можно купить роутер, модем или интернет-центр для дома и офиса
            </div>
          </div>
          <Button additionalClassname={commonCardStyles.btn} variant="outline">
            Перейти
          </Button>
        </Card>
      </div>
    </div>
  );
};
