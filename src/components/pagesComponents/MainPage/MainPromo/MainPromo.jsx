import { Card } from '../../../UIComponents/Card';
import styles from './MainPromo.module.scss';

export const MainPromo = () => {
  return (
    <div className={styles.promo}>
      <h1 className={styles.title}>
        можно. <span>yota</span>
      </h1>
      <div className={styles.grid}>
        <Card
          variant="blue"
          imgSrc="/src/assets/images/promo-simcards.png"
          additionalClassname={styles.blueGrid}
        />

        <Card variant="greyForm" additionalClassname={styles.greyFormGrid} />

        <Card
          variant="grey"
          title="Подобрать тариф"
          descr="Выбери из готовых тарифов или создай свой"
          btnText="Выбрать"
          btnVariant="outline"
          additionalClassname={styles.chooseTariff}
        />

        <Card
          variant="greyVertical"
          imgSrc="/src/assets/images/double-sim.png"
          title="Хочу в YOTA со своим номером"
          descr="Введите номер для переноса"
          additionalClassname={styles.ownNumber}
        />
        <Card
          variant="greyVertical"
          imgSrc="/src/assets/images/flash-card.png"
          title="Подключить интернет"
          descr="4G интернет. Для дома, для офиса, для поездок."
          additionalClassname={styles.internet}
        />
        <Card
          variant="greyVertical"
          imgSrc="/src/assets/images/router.png"
          title="Интернет магазин"
          descr="Можно купить роутер, модем или интернет-центр для дома и офиса"
          additionalClassname={styles.netShop}
        />
      </div>
    </div>
  );
};
