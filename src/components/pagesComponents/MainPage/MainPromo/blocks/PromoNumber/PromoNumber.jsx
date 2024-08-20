import { Card, commonCardStyles } from '../../../../../UIComponents/Card';
import { Button } from '../../../../../UIComponents/Button';
import commonStyles from '../../MainPromo.module.scss';
import styles from './PromoNumber.module.scss';

export const PromoNumber = () => {
  return (
    <Card variant="grey" additionalClassname={styles.ownNumber}>
      <img
        className={commonCardStyles.img}
        src="/src/assets/images/double-sim.png"
        alt="img"
      />
      <div className={commonStyles.textContent}>
        <h2 className={commonCardStyles.title}>Хочу в YOTA со своим номером</h2>
        <div className={commonCardStyles.description}>
          Введите номер для переноса
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
