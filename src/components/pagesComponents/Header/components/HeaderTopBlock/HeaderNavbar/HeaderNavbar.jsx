import styles from './HeaderNavbar.module.scss';

export const HeaderNavBar = () => {
  return (
    <nav className={styles.headernavbar}>
      <ul className={styles.navbarlist}>
        <li className={styles.navbaritem}>
          <a href="#">Поддержка</a>
        </li>
        <li className={styles.navbaritem}>
          <a href="#">Оплата</a>
        </li>
        <li className={styles.navbaritem}>
          <a href="#">Карта покрытия</a>
        </li>
        <li className={styles.navbaritem}>
          <a href="#">Точки продаж</a>
        </li>
      </ul>
    </nav>
  );
};
