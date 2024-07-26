import { Link } from '../../../../../UIComponents/Link';
import styles from './HeaderNavbar.module.scss';

export const HeaderNavbar = () => {
  return (
    <nav className={styles.headerNavbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link>Поддержка</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link>Оплата</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link>Карта покрытия</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link>Точки продаж</Link>
        </li>
      </ul>
    </nav>
  );
};
