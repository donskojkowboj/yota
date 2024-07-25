import { Button } from '../../UIComponents/Button';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      HomePage
      <div style={{ alignItems: 'center' }}>
        <Button variant="blue">Заказать SIM-карту</Button>
        <Button size="small" variant="blue">
          Купить
        </Button>
      </div>
      <div style={{ alignItems: 'center' }}>
        <Button variant="white">Оплатить</Button>
        <Button size="small" variant="white">
          Оплатить
        </Button>
      </div>
      <div style={{ alignItems: 'center' }}>
        <Button variant="outline">Создать</Button>
        <Button size="small" variant="outline">
          Создать
        </Button>
      </div>
      <div style={{ alignItems: 'center' }}>
        <Button variant="outline-dark">Подробнее</Button>
        <Button size="small" variant="outline-dark">
          Подробнее
        </Button>
      </div>
      <div style={{ alignItems: 'center' }}>
        <Button variant="clear">Сервисы</Button>
        <Button variant="clear" additionalClassname={styles.clearBlue}>
          Оплатить
        </Button>
      </div>
    </div>
  );
};
