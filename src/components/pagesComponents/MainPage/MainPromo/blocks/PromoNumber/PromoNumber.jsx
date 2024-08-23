import { useWindowSize } from '../../../../../../hooks/useWindowSize.js';
import { Card, commonCardStyles } from '../../../../../UIComponents/Card';
import { Button } from '../../../../../UIComponents/Button';
import commonStyles from '../../MainPromo.module.scss';
import styles from './PromoNumber.module.scss';

export const PromoNumber = () => {
  const { isMobile } = useWindowSize();
  return (
    <Card variant="grey" additionalClassname={styles.ownNumber}>
      <div className={styles.ownNumber__wrapper}>
        <img
          className={`${commonCardStyles.img} ${styles.ownNumber__img}`}
          src="/src/assets/images/double-sim.png"
          alt="img"
        />
        <div className={commonStyles.textContent}>
          <h2 className={commonCardStyles.title}>
            Хочу в YOTA со своим номером
          </h2>
          <div
            className={`${commonCardStyles.description} ${styles.ownNumber__descr}`}
          >
            {isMobile
              ? 'Введите номер, который хотите перенести'
              : 'Введите номер для переноса'}
          </div>
        </div>
      </div>

      <Button
        additionalClassname={`${commonCardStyles.btn} ${commonCardStyles.btn__maxWidth} ${styles.ownNumber__btn}`}
        variant="outline"
      >
        Перейти
      </Button>
    </Card>
  );
};
