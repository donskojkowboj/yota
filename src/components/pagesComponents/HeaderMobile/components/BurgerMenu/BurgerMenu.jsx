import { useState } from 'react';
import { HeaderSelectCity } from '../../../HeaderDesktop/components/HeaderTopBlock/HeaderSelectCity';
import { HeaderSelectClient } from '../../../HeaderDesktop/components/HeaderTopBlock/HeaderSelectClient/index.js';
import { Button } from '../../../../UIComponents/Button/index.js';
import { CloseMenuIcon } from '../../../../UIComponents/Icons/index.js';
import { HeaderServices } from '../../../HeaderDesktop/components/HeaderBottomBlock/HeaderServices/index.js';
import { HeaderNavbar } from '../../../HeaderDesktop/components/HeaderTopBlock/HeaderNavbar/index.js';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({ closeMenu }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <img
          className={styles.logo}
          src="/src/assets/images/logo.svg"
          alt="logo"
        />
        <Button
          onClick={closeMenu}
          additionalClassname={styles.close}
          variant="clear"
          iconLeft={<CloseMenuIcon />}
        />
      </div>
      <div className={styles.innerWrapper}>
        <HeaderSelectCity />
        <HeaderSelectClient />
        <HeaderServices />
        <HeaderNavbar />
        <Button additionalClassname={styles.headerButton}>
          Заказать SIM-карту
        </Button>
      </div>
    </div>
  );
};
