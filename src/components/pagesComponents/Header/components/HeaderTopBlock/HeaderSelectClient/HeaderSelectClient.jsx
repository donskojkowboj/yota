import { Link } from '../../../../../UIComponents/Link';
import styles from './HeaderSelectClient.module.scss';

export const HeaderSelectClient = () => {
  return (
    <div className={styles.headerSelectClient}>
      <Link>Частным лицам</Link>
      <Link>Для бизнеса</Link>
    </div>
  );
};
