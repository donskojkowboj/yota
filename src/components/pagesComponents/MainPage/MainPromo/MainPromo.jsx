import { PromoSlider } from './blocks/PromoSlider';
import { Container } from '../../../pagesComponents/Container';
import { PromoPay } from './blocks/PromoPay';
import { PromoTariff } from './blocks/PromoTariff';
import { PromoNumber } from './blocks/PromoNumber';
import { PromoInternet } from './blocks/PromoInternet';
import { PromoShop } from './blocks/PromoShop';
import styles from './MainPromo.module.scss';

export const MainPromo = () => {
  return (
    <section className={styles.mainPromo}>
      <Container>
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
      </Container>
    </section>
  );
};
