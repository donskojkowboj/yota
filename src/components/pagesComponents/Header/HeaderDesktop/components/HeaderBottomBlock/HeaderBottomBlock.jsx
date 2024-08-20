import { useWindowSize } from '../../../../../../hooks/useWindowSize.js';
import { HeaderLogo } from './HeaderLogo/index.js';
import { HeaderServices } from './HeaderServices/index.js';
import { HeaderAccount } from './HeaderAccount/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import styles from './HeaderBottomBlock.module.scss';
import commonStyles from '../../HeaderDesktop.module.scss';

export const HeaderBottomBlock = () => {
  const { isTablet } = useWindowSize();
  return (
    <div className={commonStyles.headerContainer}>
      <div className={styles.headerBottomBlock}>
        <HeaderLogo />
        <div className={styles.wrapper}>
          <HeaderServices />
          {!isTablet && (
            <Button additionalClassname={styles.headerButton}>
              Заказать SIM-карту
            </Button>
          )}
          <HeaderAccount />
        </div>
      </div>
    </div>
  );
};
