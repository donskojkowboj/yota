import { useWindowWidth } from '@react-hook/window-size/throttled';
import {
  Card,
  commonCardStyles,
} from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import styles from './PromoTariff.module.scss';

export const PromoTariff = () => {
  const width = useWindowWidth();
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
        <Button
          size={width <= 768 ? 'small' : 'medium'}
          additionalClassname={commonCardStyles.btn}
          variant="outline"
        >
          {width <= 768 ? 'Перейти в чат' : 'Выбрать'}
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
