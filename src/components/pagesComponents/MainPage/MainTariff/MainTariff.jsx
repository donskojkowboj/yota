import { Container } from '../../Container';
import { TariffCreate } from './blocks/TariffCreate';
import { TariffPerfect } from './blocks/TariffPerfect';

import styles from './MainTariff.module.scss';

export const MainTariff = () => {
  return (
    <section>
      <Container>
        <div className={styles.mainTariffContainer}>
          <h1 className={styles.title}>
            Выбери идеальный тариф или
            <span className={`${styles.title} ${styles.title__create}`}>
              создай
            </span>
            свой
          </h1>

          <div className={styles.cardsWrapper}>
            <TariffCreate />
            <TariffPerfect />
          </div>
        </div>
      </Container>
    </section>
  );
};
