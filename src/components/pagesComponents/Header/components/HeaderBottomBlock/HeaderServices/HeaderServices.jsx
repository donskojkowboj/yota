import { ArrowBottomIcon } from '../../../../../UIComponents/Icons';
import styles from './HeaderServices.module.scss';

export const HeaderServices = () => {
  return (
    <div className={styles.headerServices}>
      <div className={styles.item}>
        Мобильная связь
        <ArrowBottomIcon />
      </div>
      <div className={styles.item}>
        Интернет
        <ArrowBottomIcon />
      </div>
      <div className={styles.item}>
        Сервисы
        <ArrowBottomIcon />
      </div>
      <div className={styles.item}>
        Интернет-магазин
        <ArrowBottomIcon />
      </div>
    </div>
  );
};
