import {
  Card,
  commonCardStyles,
} from '../../../../../UIComponents/Card/index.js';
import styles from '../../MainPromo.module.scss';
import { Button } from '../../../../../UIComponents/Button/index.js';

export const PromoTariff = () => {
  return (
    <Card
      variant="grey"
      direction="horizontal"
      additionalClassname={styles.chooseTariff}
    >
      <div className={styles.chooseTariff__wrapper}>
        <div className={styles.chooseTariff__textWrapper}>
          <h2 className={commonCardStyles.title}>Подобрать тариф</h2>
          <div className={commonCardStyles.description}>
            Выбери из готовых тарифов или создай свой
          </div>
        </div>
        <Button additionalClassname={commonCardStyles.btn} variant="outline">
          Выбрать
        </Button>
      </div>

      <img
        className={styles.chooseTariff__img}
        src="/src/assets/images/package-pricing.png"
        alt="img"
      />
    </Card>
  );
};
