import { useWindowWidth } from '@react-hook/window-size/throttled';

import {
  Card,
  commonCardStyles,
} from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import commonStyles from '../../MainPromo.module.scss';
import styles from './PromoShop.module.scss';

export const PromoShop = () => {
  const width = useWindowWidth();
  return (
    <Card variant="grey" additionalClassname={styles.netShop}>
      <img
        className={`${commonCardStyles.img} ${styles.netShop__img}`}
        src="/src/assets/images/router.png"
        alt="img"
      />
      <div className={commonStyles.textContent}>
        <h2 className={commonCardStyles.title}>Интернет магазин</h2>
        <div className={commonCardStyles.description}>
          Можно купить роутер, модем или интернет-центр для дома и офиса
        </div>
        {width <= 768 ? (
          <Button
            size="small"
            additionalClassname={commonCardStyles.btn}
            variant="outline"
          >
            Перейти в чат
          </Button>
        ) : null}
      </div>
      {width > 768 ? (
        <Button
          size="medium"
          additionalClassname={commonCardStyles.btn}
          variant="outline"
        >
          Перейти
        </Button>
      ) : null}
    </Card>
  );
};
