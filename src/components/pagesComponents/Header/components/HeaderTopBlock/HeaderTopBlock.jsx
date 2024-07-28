import { HeaderSelectCity } from './HeaderSelectCity';
import { HeaderSelectClient } from './HeaderSelectClient';
import { HeaderNavbar } from './HeaderNavbar';
import styles from './HeaderTopBlock.module.scss';

export const HeaderTopBlock = () => {
  return (
    <div className={styles.border}>
      <div className={styles.headerTopBlock}>
        <HeaderSelectCity />
        <div className={styles.wrapper}>
          <HeaderSelectClient />
          <HeaderNavbar />
        </div>
      </div>
    </div>
  );
};
