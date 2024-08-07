import { useState } from 'react';

import { Card, commonCardStyles } from '../../../../../UIComponents/Card';
import { Button } from '../../../../../UIComponents/Button';
import { ArrowBottomIcon } from '../../../../../UIComponents/Icons';
import { Input } from '../../../../../UIComponents/Input';
import { phoneMask, currencyMask } from './helpers/maskedInputsConfigs';

import styles from '../../MainPromo.module.scss';

export const PromoPay = () => {
  const [sum, setSum] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const formValidation = (sum, phone) => {
    const newErrors = {};

    if (!sum || sum.slice(0, -2).replace(',', '') < 10) {
      newErrors.sum = 'Введите сумму не менее 10₽';
    }
    if (!phone || isNaN(phone[17])) {
      newErrors.phone = 'Введите корректный номер телефона';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(`Cумма оплаты: ${sum}, номер телефона: ${phone}`);
    }
  };

  const handleSumChange = (e) => {
    setSum(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation(sum, phone);
  };

  return (
    <Card
      variant="grey"
      direction="horizontal"
      additionalClassname={styles.form}
    >
      <h2 className={`${commonCardStyles.title} ${styles.form__title}`}>
        Оплатить
        <Button
          type="submit"
          variant="clear"
          iconRight={<ArrowBottomIcon />}
          additionalClassname={styles.clearBlue}
        >
          смартфон / планшет
        </Button>
      </h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__wrapper}>
          <div className={styles.form__errorWrapper}>
            <Input
              additionalClassname={styles.form__sum}
              id="sum"
              htmlFor="sum"
              label="Сумма"
              placeholder="500₽"
              maxLength="7"
              value={sum}
              errorMessage={errors.sum}
              onChange={handleSumChange}
              mask={currencyMask}
            />
          </div>
          <div className={styles.form__errorWrapper}>
            <Input
              additionalClassname={styles.form__tel}
              name="phone"
              htmlFor="phone"
              id="phone"
              label="Номер телефона"
              placeholder="+7"
              type="tel"
              mask={phoneMask}
              value={phone}
              errorMessage={errors.phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <Button additionalClassname={commonCardStyles.btn}>Оплатить</Button>
      </form>
    </Card>
  );
};
