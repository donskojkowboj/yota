import { useWindowSize } from '../../../../../../hooks/useWindowSize.js';

import { Card } from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';

import styles from './TariffCreate.module.scss';

export const TariffCreate = () => {
  const { isMobile } = useWindowSize();
  return (
    <Card
      variant={isMobile ? 'blue' : 'outline'}
      additionalClassname={styles.createTariff}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Создать свой тариф</h2>
        {isMobile ? (
          <Button
            additionalClassname={styles.btn}
            size="small"
            variant="outline"
          >
            Создать
          </Button>
        ) : null}
      </div>
      <img
        className={styles.img}
        src="/src/assets/images/package-pricing.png"
        alt="img"
      />
      {!isMobile ? (
        <Button additionalClassname={styles.btn} size="small" variant="outline">
          Создать
        </Button>
      ) : null}
    </Card>
  );
};
