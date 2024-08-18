import { HeaderTopBlock } from './components/HeaderTopBlock';
import { HeaderBottomBlock } from './components/HeaderBottomBlock';
import styles from './HeaderDesktop.module.scss';

export const HeaderDesktop = () => {
  return (
    <header className={styles.header}>
      <HeaderTopBlock />
      <HeaderBottomBlock />
    </header>
  );
};
