import { UserIcon, ArrowBottomIcon } from '../../../../../UIComponents/Icons';
import styles from './HeaderAccount.module.scss';

export const HeaderAccount = () => {
  return (
    <div className={styles.headerAccount}>
      <UserIcon />
      Личный кабинет
      <ArrowBottomIcon />
    </div>
  );
};
