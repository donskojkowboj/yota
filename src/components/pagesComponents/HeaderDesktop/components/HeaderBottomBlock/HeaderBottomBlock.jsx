import { useWindowSize } from '../../../../../hooks/useWindowSize';
import { HeaderLogo } from './HeaderLogo';
import { HeaderServices } from './HeaderServices';
import { HeaderAccount } from './HeaderAccount';
import { Button } from '../../../../UIComponents/Button';
import styles from './HeaderBottomBlock.module.scss';
import commonStyles from '../../HeaderDesktop.module.scss';

export const HeaderBottomBlock = () => {
  const { isDesktop } = useWindowSize();
  return (
    <div className={commonStyles.headerContainer}>
      <div className={styles.headerBottomBlock}>
        <HeaderLogo />
        <div className={styles.wrapper}>
          <HeaderServices />
          {!isDesktop && (
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
