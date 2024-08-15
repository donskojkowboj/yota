import { useWindowWidth } from '@react-hook/window-size/throttled';
import { Card, commonCardStyles } from '../../../../../UIComponents/Card';
import { Button } from '../../../../../UIComponents/Button';
import commonStyles from '../../MainPromo.module.scss';
import styles from './PromoNumber.module.scss';

export const PromoNumber = () => {
  const width = useWindowWidth();
  return (
    <Card variant="grey" additionalClassname={styles.ownNumber}>
      <div className={styles.ownNumber__superWrapper}>
        <img
          className={`${commonCardStyles.img} ${styles.ownNumber__img}`}
          src="/src/assets/images/double-sim.png"
          alt="img"
        />
        <div className={commonStyles.textContent}>
          <div className={styles.ownNumber__wrapper}>
            <h2 className={commonCardStyles.title}>
              Хочу в YOTA со своим номером
            </h2>
            <div
              className={`${commonCardStyles.description} ${styles.ownNumber__description}`}
            >
              {width <= 768
                ? 'Введите номер, который хотите перенести'
                : ' Введите номер для переноса'}
            </div>
          </div>
        </div>
      </div>

      <Button
        additionalClassname={`${commonCardStyles.btn} ${styles.ownNumber__btn}`}
        variant="outline"
      >
        Перейти
      </Button>
    </Card>
  );
};
