import { Link } from '../../../../../../UIComponents/Link/index.js';
import styles from './HeaderNavbar.module.scss';

export const HeaderNavbar = () => {
  return (
    <nav>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="#">Поддержка</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="#">Оплата</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="#">Карта покрытия</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="#">Точки продаж</Link>
        </li>
      </ul>
    </nav>
  );
};
