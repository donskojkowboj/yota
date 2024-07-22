import styles from './HomePage.module.scss';
import { Button } from '../../UIComponents/Button';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      HomePage
      <Button size="large" variant="blue">
        Оплатить
      </Button>
      <Button size="medium" variant="white">
        Оплатить
      </Button>
      <Button variant="outline">Создать</Button>
      <Button variant="outlineDark">Подробнее</Button>
      <Button size="small" variant="clear">
        Сервисы
      </Button>
      <Button
        size="small"
        variant="clear"
        additionalClassname={styles.clearBlue}
      >
        Оплатить
      </Button>
    </div>
  );
};
