import styles from './MainPromo.module.scss';
import { Carousel } from './Carousel';
import { PaymentCard } from './PaymentCard/index.js';
import { PackageCard } from './PackageCard/index.js';
import { ExtraCard } from './ExtraCard/index.js';

export const MainPromo = () => {
  return (
    <div className={styles.promo}>
      <h1 className={styles.title}>
        можно. <span>yota</span>
      </h1>
      <div className={styles.grid}>
        <Carousel />
        <PaymentCard />
        <PackageCard />
        <ExtraCard
          additionalClassname={styles.first}
          imgSrc="/src/assets/images/double-sim.png"
          title="Хочу в YOTA со своим номером"
          descr="Введите номер для переноса"
        />
        <ExtraCard
          additionalClassname={styles.second}
          imgSrc="/src/assets/images/flash-card.png"
          title="Подключить интернет"
          descr="4G интернет. Для дома, для офиса, для поездок."
        />
        <ExtraCard
          additionalClassname={styles.third}
          imgSrc="/src/assets/images/router.png"
          title="Интернет магазин"
          descr="Можно купить роутер, модем или интернет-центр для дома и офиса"
        />
      </div>
    </div>
  );
};
