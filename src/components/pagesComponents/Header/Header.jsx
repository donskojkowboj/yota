import { HeaderTopBlock } from './components/HeaderTopBlock';
import { HeaderBottomBlock } from './components/HeaderBottomBlock';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderTopBlock />
        <HeaderBottomBlock />
      </div>
    </header>
  );
};
