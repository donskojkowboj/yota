import { UserIconMobile } from '../../UIComponents/Icons';
import { BurgerIcon } from '../../UIComponents/Icons';
import { Button } from '../../UIComponents/Button';

import styles from './HeaderMobile.module.scss';
export const HeaderMobile = () => {
  return (
    <header className={styles.headerMobile}>
      <img src="/src/assets/images/logo.svg" alt="logo" />
      <div className={styles.btnsWrapper}>
        <Button variant="clear" iconLeft={<UserIconMobile />}></Button>
        <Button variant="clear" iconLeft={<BurgerIcon />}></Button>
      </div>
    </header>
  );
};
