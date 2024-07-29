import { Button } from '../../../UIComponents/Button';
import styles from './ExtraCard.module.scss';

export const ExtraCard = ({ additionalClassname, title, descr, imgSrc }) => {
  return (
    <div className={additionalClassname}>
      <div className={styles.serviceCard}>
        <div className={styles.wrapper}>
          <img className={styles.img} src={imgSrc} alt="img" />
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.descr}>{descr}</div>
          </div>
        </div>

        <Button additionalClassname={styles.btn} variant="outline">
          Перейти
        </Button>
      </div>
    </div>
  );
};
