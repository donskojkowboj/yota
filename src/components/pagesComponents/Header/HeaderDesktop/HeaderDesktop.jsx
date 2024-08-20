import { HeaderTopBlock } from './components/HeaderTopBlock/index.js';
import { HeaderBottomBlock } from './components/HeaderBottomBlock/index.js';
import styles from './HeaderDesktop.module.scss';

export const HeaderDesktop = () => {
  return (
    <header className={styles.header}>
      <HeaderTopBlock />
      <HeaderBottomBlock />
    </header>
  );
};
