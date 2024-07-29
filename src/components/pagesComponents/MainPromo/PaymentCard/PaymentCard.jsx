import { Button } from '../../../UIComponents/Button';
import { ArrowBottomIcon } from '../../../UIComponents/Icons';
import styles from './PaymentCard.module.scss';
import commonStyles from '../MainPromo.module.scss';

export const PaymentCard = () => {
  return (
    <div className={styles.paymentCard}>
      <div className={commonStyles.card}>
        <h2 className={styles.pay}>
          Оплатить
          <Button
            variant="clear"
            iconRight={<ArrowBottomIcon />}
            additionalClassname={styles.clearBlue}
          >
            смартфон / планшет
          </Button>
        </h2>

        <form className={styles.form}>
          <div className={styles.inputsWrapper}>
            <div className={styles.sum}>
              <label htmlFor="sum">Сумма</label>
              <input placeholder="500₽" type="number" id="sum" />
            </div>

            <div className={styles.tel}>
              <label htmlFor="phone">Номер телефона</label>
              <input placeholder="+7" type="tel" id="phone" />
            </div>
          </div>
          <Button additionalClassname={styles.cardBtn}>Оплатить</Button>
        </form>
      </div>
    </div>
  );
};
