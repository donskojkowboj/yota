import { DropdownIcon } from '../../../../../UIComponents/Icons';
import styles from './HeaderServices.module.scss';

export const HeaderServices = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.item}>
        Мобильная связь
        <DropdownIcon />
      </div>
      <div className={styles.item}>
        Интернет
        <DropdownIcon />
      </div>
      <div className={styles.item}>
        Сервисы
        <DropdownIcon />
      </div>
      <div className={styles.item}>
        Интернет-магазин
        <DropdownIcon />
      </div>
    </div>
  );
};
