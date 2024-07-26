import { Button } from '../../../../../UIComponents/Button';
import { ArrowBottomIcon } from '../../../../../UIComponents/Icons';
import styles from './HeaderServices.module.scss';

export const HeaderServices = () => {
  return (
    <div className={styles.headerServices}>
      <Button
        additionalClassname={styles.servicesButton}
        variant="clear"
        iconRight={<ArrowBottomIcon />}
      >
        Мобильная связь
      </Button>

      <Button
        additionalClassname={styles.servicesButton}
        variant="clear"
        iconRight={<ArrowBottomIcon />}
      >
        Интернет
      </Button>

      <Button
        additionalClassname={styles.servicesButton}
        variant="clear"
        iconRight={<ArrowBottomIcon />}
      >
        Сервисы
      </Button>
      <Button
        additionalClassname={styles.servicesButton}
        variant="clear"
        iconRight={<ArrowBottomIcon />}
      >
        Интернет-магазин
      </Button>
    </div>
  );
};
