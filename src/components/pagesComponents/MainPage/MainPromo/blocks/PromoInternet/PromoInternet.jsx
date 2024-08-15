import { useWindowWidth } from '@react-hook/window-size/throttled';
import {
  Card,
  commonCardStyles,
} from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import commonStyles from '../../MainPromo.module.scss';
import styles from './PromoInternet.module.scss';

export const PromoInternet = () => {
  const width = useWindowWidth();
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
        {width <= 768 ? (
          <Button
            size="small"
            additionalClassname={commonCardStyles.btn}
            variant="outline"
          >
            Перейти в чат
          </Button>
        ) : null}
      </div>
      {width > 768 ? (
        <Button
          size="medium"
          additionalClassname={commonCardStyles.btn}
          variant="outline"
        >
          Перейти
        </Button>
      ) : null}
    </Card>
  );
};
