import { Button } from '../../../UIComponents/Button';
import styles from './PackageCard.module.scss';
import commonStyles from '../MainPromo.module.scss';

export const PackageCard = () => {
  return (
    <div className={styles.packageCard}>
      <div className={commonStyles.card}>
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.packageTitle}>Подобрать тариф</h2>
            <div className={styles.descr}>
              Выбери из готовых тарифов или создай свой
            </div>
          </div>
          <Button additionalClassname={styles.packageBtn} variant="outline">
            Выбрать
          </Button>
        </div>
      </div>
    </div>
  );
};
