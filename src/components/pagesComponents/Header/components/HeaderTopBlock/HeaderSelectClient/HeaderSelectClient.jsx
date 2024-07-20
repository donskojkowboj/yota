import styles from './HeaderSelectClient.module.scss';

export const HeaderSelectClient = () => {
  return (
    <div className={styles.headerSelectClient}>
      <a href="#" className={styles.selectItem}>
        Частным лицам
      </a>
      <a href="#" className={styles.selectItem}>
        Для бизнеса
      </a>
    </div>
  );
};
