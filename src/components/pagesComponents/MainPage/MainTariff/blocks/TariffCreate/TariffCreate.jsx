import { useWindowWidth } from '@react-hook/window-size/throttled';
import { Card } from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';

import styles from './TariffCreate.module.scss';

export const TariffCreate = () => {
  const width = useWindowWidth();

  return (
    <Card
      variant={width <= 768 ? 'blue' : 'outline'}
      additionalClassname={styles.createTariff}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Создать свой тариф</h2>
        {width <= 768 ? (
          <Button
            additionalClassname={styles.btn}
            size="small"
            variant="outline-white"
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
      {width > 768 ? (
        <Button size="small" variant="outline">
          Создать
        </Button>
      ) : null}
    </Card>
  );
};
