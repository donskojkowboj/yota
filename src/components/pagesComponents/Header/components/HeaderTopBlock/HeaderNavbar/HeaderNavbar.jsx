import styles from './HeaderNavbar.module.scss';

export const HeaderNavBar = () => {
  return (
    <nav className={styles.headerNavbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a href="#">Поддержка</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">Оплата</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">Карта покрытия</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#">Точки продаж</a>
        </li>
      </ul>
    </nav>
  );
};
