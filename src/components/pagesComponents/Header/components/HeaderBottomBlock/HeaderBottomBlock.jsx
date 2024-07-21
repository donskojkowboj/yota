import { HeaderLogo } from './HeaderLogo';
import { HeaderServices } from './HeaderServices';
import { HeaderAccount } from './HeaderAccount';
import { Button } from '../../../../UIComponents/Button';
import styles from './HeaderBottomBlock.module.scss';

export const HeaderBottomBlock = () => {
  return (
    <>
      <div className={styles.headerBottomBlock}>
        <HeaderLogo />
        <div className={styles.wrapper}>
          <HeaderServices />
          <Button
            label="Заказать SIM-карту"
            backgroundColor="#00AEEF"
            color="#FFF"
          />
          <HeaderAccount />
        </div>
      </div>
    </>
  );
};
