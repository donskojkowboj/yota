import { Card } from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';

import styles from './TariffCreate.module.scss';

export const TariffCreate = () => {
  return (
    <Card variant="outline" additionalClassname={styles.createTariff}>
      <h2 className={styles.title}>Создать свой тариф</h2>
      <img
        className={styles.img}
        src="/src/assets/images/package-pricing.png"
        alt="img"
      />
      <Button size="small" variant="outline">
        Создать
      </Button>
    </Card>
  );
};
