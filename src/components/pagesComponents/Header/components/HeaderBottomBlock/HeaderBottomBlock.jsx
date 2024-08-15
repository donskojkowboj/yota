import { useWindowWidth } from '@react-hook/window-size/throttled';

import { HeaderLogo } from './HeaderLogo';
import { HeaderServices } from './HeaderServices';
import { HeaderAccount } from './HeaderAccount';
import { Button } from '../../../../UIComponents/Button';
import commonStyles from '../../Header.module.scss';
import styles from './HeaderBottomBlock.module.scss';

export const HeaderBottomBlock = () => {
  const width = useWindowWidth();
  return (
    <div className={commonStyles.headerContainer}>
      <div className={styles.headerBottomBlock}>
        <HeaderLogo />
        <div className={styles.wrapper}>
          <HeaderServices />

          {width > 1250 ? (
            <Button additionalClassname={styles.headerButton}>
              Заказать SIM-карту
            </Button>
          ) : null}

          <HeaderAccount />
        </div>
      </div>
    </div>
  );
};
