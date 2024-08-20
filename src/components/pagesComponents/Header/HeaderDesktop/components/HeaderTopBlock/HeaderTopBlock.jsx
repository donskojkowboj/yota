import { HeaderSelectCity } from './HeaderSelectCity/index.js';
import { HeaderSelectClient } from './HeaderSelectClient/index.js';
import { HeaderNavbar } from './HeaderNavbar/index.js';
import styles from './HeaderTopBlock.module.scss';
import commonStyles from '../../HeaderDesktop.module.scss';

export const HeaderTopBlock = () => {
  return (
    <div className={styles.border}>
      <div className={commonStyles.headerContainer}>
        <div className={styles.headerTopBlock}>
          <HeaderSelectCity />
          <div className={styles.wrapper}>
            <HeaderSelectClient />
            <HeaderNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};
