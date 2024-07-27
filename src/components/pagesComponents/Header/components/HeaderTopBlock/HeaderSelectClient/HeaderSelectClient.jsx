import { Link } from '../../../../../UIComponents/Link';
import styles from './HeaderSelectClient.module.scss';

export const HeaderSelectClient = () => {
  return (
    <div className={styles.headerSelectClient}>
      <Link variant="active" href="#">
        Частным лицам
      </Link>
      <Link href="#">Для бизнеса</Link>
    </div>
  );
};
