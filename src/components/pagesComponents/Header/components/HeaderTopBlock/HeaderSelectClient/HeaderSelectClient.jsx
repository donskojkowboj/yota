import { Link } from '../../../../../UIComponents/Link';
import styles from './HeaderSelectClient.module.scss';

export const HeaderSelectClient = () => {
  return (
    <div className={styles.headerSelectClient}>
      <Link additionalClass={styles.selected} href="#">
        Частным лицам
      </Link>
      <Link href="#">Для бизнеса</Link>
    </div>
  );
};
