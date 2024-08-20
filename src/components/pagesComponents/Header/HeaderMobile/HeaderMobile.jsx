import { useWindowSize } from '../../../../hooks/useWindowSize.js';
import { BurgerMenu } from './components/BurgerMenu/index.js';
import { UserMobileIcon } from '../../../UIComponents/Icons/index.js';
import { BurgerIcon } from '../../../UIComponents/Icons/index.js';

import { Button } from '../../../UIComponents/Button/index.js';

import styles from './HeaderMobile.module.scss';
import { useState } from 'react';

export const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
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
