import { Button } from '../../UIComponents/Button';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      HomePage
      <div>
        <Button variant="blue">Оплатить</Button>
        <Button size="small" variant="blue">
          Оплатить
        </Button>
      </div>
      <div>
        <Button variant="white">Оплатить</Button>
        <Button size="small" variant="white">
          Оплатить
        </Button>
      </div>
      <div>
        <Button variant="outline">Создать</Button>
        <Button size="small" variant="outline">
          Создать
        </Button>
      </div>
      <div>
        <Button variant="outline-dark">Подробнее</Button>
        <Button size="small" variant="outline-dark">
          Подробнее
        </Button>
      </div>
      <div>
        <Button variant="clear">Сервисы</Button>
        <Button variant="clear" additionalClassname={styles.clearBlue}>
          Оплатить
        </Button>
      </div>
    </div>
  );
};
