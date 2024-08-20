import {
  Card,
  commonCardStyles,
} from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import commonStyles from '../../MainPromo.module.scss';
import styles from './PromoShop.module.scss';

export const PromoShop = () => {
  return (
    <Card variant="grey" additionalClassname={styles.netShop}>
      <img
        className={commonCardStyles.img}
        src="/src/assets/images/router.png"
        alt="img"
      />
      <div className={commonStyles.textContent}>
        <h2 className={commonCardStyles.title}>Интернет магазин</h2>
        <div className={commonCardStyles.description}>
          Можно купить роутер, модем или интернет-центр для дома и офиса
        </div>
      </div>
      <Button
        additionalClassname={`${commonCardStyles.btn} ${commonCardStyles.btn__maxWidth}`}
        variant="outline"
      >
        Перейти
      </Button>
    </Card>
  );
};
