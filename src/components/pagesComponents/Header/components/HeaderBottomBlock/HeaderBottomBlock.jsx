import { HeaderLogo } from './HeaderLogo';
import { HeaderServices } from './HeaderServices';
import { HeaderAccount } from './HeaderAccount';
import { Button } from '../../../../UIComponents/Button';
import styles from './HeaderBottomBlock.module.scss';
import commonStyles from '../../Header.module.scss';

export const HeaderBottomBlock = () => {
  const handleClick = () => {
    console.log('Проверка кнопки');
  };

  return (
    <div className={commonStyles.headerContainer}>
      <div className={styles.headerBottomBlock}>
        <HeaderLogo />
        <div className={styles.wrapper}>
          <HeaderServices />
          <Button
            additionalClassname={styles.headerButton}
            onClick={() => handleClick()}
          >
            Заказать SIM-карту
          </Button>
          <HeaderAccount />
        </div>
      </div>
    </div>
  );
};
