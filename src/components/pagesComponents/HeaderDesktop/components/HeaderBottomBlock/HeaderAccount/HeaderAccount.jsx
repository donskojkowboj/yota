import { Button } from '../../../../../UIComponents/Button';
import { UserIcon, ArrowBottomIcon } from '../../../../../UIComponents/Icons';
import styles from './HeaderAccount.module.scss';

export const HeaderAccount = () => {
  return (
    <div className={styles.headerAccount}>
      <Button
        iconLeft={<UserIcon />}
        iconRight={<ArrowBottomIcon />}
        variant="clear"
        additionalClassname={styles.clearBlue}
      >
        Личный кабинет
      </Button>
    </div>
  );
};
