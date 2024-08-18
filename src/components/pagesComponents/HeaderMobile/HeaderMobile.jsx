import { useWindowSize } from '../../../hooks/useWindowSize';
import { BurgerMenu } from './components/BurgerMenu';
import { UserMobileIcon } from '../../UIComponents/Icons';
import { BurgerIcon } from '../../UIComponents/Icons';

import { Button } from '../../UIComponents/Button';

import styles from './HeaderMobile.module.scss';
import { useState } from 'react';

export const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className={styles.headerMobile}>
      {isMenuOpen && <BurgerMenu closeMenu={closeMenu} />}

      <div className={styles.topSection}>
        <img
          className={styles.logo}
          src="/src/assets/images/logo.svg"
          alt="logo"
        />
      </div>
      <div className={styles.btnsWrapper}>
        <Button variant="clear" iconLeft={<UserMobileIcon />}></Button>
        <Button
          onClick={toggleMenu}
          variant="clear"
          iconLeft={<BurgerIcon />}
        ></Button>
      </div>
    </header>
  );
};
