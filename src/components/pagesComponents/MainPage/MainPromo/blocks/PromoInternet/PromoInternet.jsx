import { useWindowSize } from '../../../../../../hooks/useWindowSize.js';
import {
  Card,
  commonCardStyles,
} from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import commonStyles from '../../MainPromo.module.scss';
import styles from './PromoInternet.module.scss';

export const PromoInternet = () => {
  const { isMobile } = useWindowSize();
  return (
    <Card variant="grey" additionalClassname={styles.internet}>
      <img
        className={commonCardStyles.img}
        src="/src/assets/images/flash-card.png"
        alt="img"
      />
      <div className={commonStyles.textContent}>
        <h2 className={commonCardStyles.title}>Подключить интернет</h2>
        <div className={commonCardStyles.description}>
          4G интернет. Для дома, для офиса, для поездок.
        </div>
      </div>
      <Button
        additionalClassname={`${commonCardStyles.btn} ${commonCardStyles.btn__maxWidth}`}
        variant="outline"
      >
        {isMobile ? 'Перейти в чат' : 'Выбрать'}
      </Button>
    </Card>
  );
};
