import { LogoIcon } from '../../../../../../UIComponents/Icons/index.js';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <LogoIcon />
    </div>
  );
};
