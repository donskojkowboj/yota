import { Logo } from '../../../../../UIComponents/Icons';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <Logo />
    </div>
  );
};
