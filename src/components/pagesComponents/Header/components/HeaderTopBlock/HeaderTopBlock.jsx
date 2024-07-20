import { HeaderSelectCity } from './HeaderSelectCity';
import { HeaderSelectClient } from './HeaderSelectClient';
import { HeaderNavBar } from './HeaderNavbar';
import styles from './HeaderTopBlock.module.scss';

export const HeaderTopBlock = () => {
  return (
    <>
      <div className={styles.headerTopBlock}>
        <HeaderSelectCity />
        <div className={styles.wrapper}>
          <HeaderSelectClient />
          <HeaderNavBar />
        </div>
      </div>
    </>
  );
};
