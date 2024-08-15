import { useWindowWidth } from '@react-hook/window-size/throttled';

import { Container } from '../../../pagesComponents/Container';
import { PromoPay } from './blocks/PromoPay';
import { PromoSlider } from './blocks/PromoSlider';
import { PromoTariff } from './blocks/PromoTariff';
import { PromoNumber } from './blocks/PromoNumber';
import { PromoInternet } from './blocks/PromoInternet';
import { PromoShop } from './blocks/PromoShop';
import { PromoSliderMobile } from './blocks/PromoSliderMobile';

import styles from './MainPromo.module.scss';

export const MainPromo = () => {
  const onlyWidth = useWindowWidth();
  return (
    <section className={styles.mainPromo}>
      <h1 className={styles.title}>
        можно. <span>yota</span>
      </h1>
      {onlyWidth <= 768 ? (
        <PromoSliderMobile />
      ) : (
        <Container>
          <PromoSlider />
        </Container>
      )}
      <Container>
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
