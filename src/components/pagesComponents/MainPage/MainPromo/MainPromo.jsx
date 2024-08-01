import { Card } from '../../../UIComponents/Card';
import { Button } from '../../../UIComponents/Button';
import { CarouselControl } from '../../../UIComponents/CarouselControl';
import { ArrowBottomIcon } from '../../../UIComponents/Icons';

import greyStyles from './Grey.module.scss';
import greyFormStyles from './GreyForm.module.scss';
import greyVerticalStyles from './GreyVertical.module.scss';
import styles from './MainPromo.module.scss';
import blueStyles from './Blue.module.scss';

export const MainPromo = () => {
  return (
    <div className={styles.promo}>
      <h1 className={styles.title}>
        можно. <span>yota</span>
      </h1>

      <div className={styles.grid}>
        <Card variant="blue" additionalClassname={styles.blueGrid}>
          <div className={blueStyles.wrapper}>
            <div className={blueStyles.innerWrapper}>
              <div className={blueStyles.textWrapper}>
                <h2 className={blueStyles.title}>Семейный конструктор</h2>
                <div className={blueStyles.descr}>
                  Выгода до 15% за объединение номеров в группу
                </div>
              </div>

              <Button variant="white">Заказать SIM-карту</Button>
            </div>
            <img
              className={blueStyles.img}
              src="/src/assets/images/promo-simcards.png"
              alt="promo"
            />
          </div>
          <div className={blueStyles.carouselButtons}>
            <CarouselControl variant="active" />
            <CarouselControl />
            <CarouselControl />
            <CarouselControl />
            <CarouselControl />
          </div>
        </Card>

        <Card variant="grey" additionalClassname={styles.greyFormGrid}>
          <h2 className={greyFormStyles.title}>
            Оплатить
            <Button
              variant="clear"
              iconRight={<ArrowBottomIcon />}
              additionalClassname={greyFormStyles.clearBlue}
            >
              смартфон / планшет
            </Button>
          </h2>

          <form className={greyFormStyles.form}>
            <div className={greyFormStyles.inputsWrapper}>
              <div className={greyFormStyles.sum}>
                <label htmlFor="sum">Сумма</label>
                <input placeholder="500₽" type="number" id="sum" />
              </div>

              <div className={greyFormStyles.tel}>
                <label htmlFor="phone">Номер телефона</label>
                <input placeholder="+7" type="tel" id="phone" />
              </div>
            </div>
            <Button additionalClassname={greyFormStyles.btn}>Оплатить</Button>
          </form>
        </Card>

        <Card variant="grey" additionalClassname={styles.chooseTariff}>
          <div className={greyStyles.textWrapper}>
            <h2 className={greyStyles.title}>Подобрать тариф</h2>
            <div className={greyStyles.descr}>
              Выбери из готовых тарифов или создай свой
            </div>
          </div>
          <Button additionalClassname={greyStyles.packageBtn} variant="outline">
            Выбрать
          </Button>
        </Card>

        <Card
          variant="grey"
          additionalClassname={styles.vertical + ' ' + styles.ownNumber}
        >
          <img
            className={greyVerticalStyles.img}
            src="/src/assets/images/double-sim.png"
            alt="img"
          />
          <div className={greyVerticalStyles.textContent}>
            <h2 className={greyVerticalStyles.title}>
              Хочу в YOTA со своим номером
            </h2>
            <div className={greyVerticalStyles.descr}>
              Введите номер для переноса
            </div>
          </div>
          <Button additionalClassname={greyFormStyles.btn} variant="outline">
            Перейти
          </Button>
        </Card>

        <Card
          variant="grey"
          additionalClassname={styles.vertical + ' ' + styles.internet}
        >
          <img
            className={greyVerticalStyles.img}
            src="/src/assets/images/flash-card.png"
            alt="img"
          />
          <div className={greyVerticalStyles.textContent}>
            <h2 className={greyVerticalStyles.title}>Подключить интернет</h2>
            <div className={greyVerticalStyles.descr}>
              4G интернет. Для дома, для офиса, для поездок.
            </div>
          </div>
          <Button additionalClassname={greyFormStyles.btn} variant="outline">
            Перейти
          </Button>
        </Card>

        <Card
          variant="grey"
          additionalClassname={styles.vertical + ' ' + styles.netShop}
        >
          <img
            className={greyVerticalStyles.img}
            src="/src/assets/images/router.png"
            alt="img"
          />
          <div className={greyVerticalStyles.textContent}>
            <h2 className={greyVerticalStyles.title}>Интернет магазин</h2>
            <div className={greyVerticalStyles.descr}>
              Можно купить роутер, модем или интернет-центр для дома и офиса
            </div>
          </div>
          <Button additionalClassname={greyFormStyles.btn} variant="outline">
            Перейти
          </Button>
        </Card>
      </div>
    </div>
  );
};
