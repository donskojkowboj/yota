import styles from './HeaderSelectClient.module.scss';

export const HeaderSelectClient = () => {
  return (
    <div className={styles.headerselectclient}>
      <a href="#" className={styles.selectitem}>
        Частным лицам
      </a>
      <a href="#" className={styles.selectitem}>
        Для бизнеса
      </a>
    </div>
  );
};
