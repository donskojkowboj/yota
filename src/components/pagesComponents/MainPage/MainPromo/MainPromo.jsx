import { PromoPay } from './blocks/PromoPay';
import { PromoSlider } from './blocks/PromoSlider';
import { PromoTariff } from './blocks/PromoTariff';
import { PromoNumber } from './blocks/PromoNumber';
import { PromoInternet } from './blocks/PromoInternet';
import { PromoShop } from './blocks/PromoShop';

import styles from './MainPromo.module.scss';

export const MainPromo = () => {
  return (
    <div>
      <h1 className={styles.title}>
        можно. <span>yota</span>
      </h1>
      <PromoSlider />
      <div className={styles.grid}>
        <PromoPay />
        <PromoTariff />
        <PromoNumber />
        <PromoInternet />
        <PromoShop />
      </div>
    </div>
  );
};
