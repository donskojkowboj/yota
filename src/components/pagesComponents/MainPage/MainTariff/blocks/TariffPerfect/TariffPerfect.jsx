import { useState } from 'react';

import { Card } from '../../../../../UIComponents/Card';
import { Button } from '../../../../../UIComponents/Button';
import { QuestionIcon, TooltipIcon } from '../../../../../UIComponents/Icons';
import { Tooltip } from '../../../../../UIComponents/Tooltip';
import { Toggle } from '../../../../../UIComponents/Toggle';

import styles from './TariffPerfect.module.scss';

export const TariffPerfect = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Card variant="outline" additionalClassname={styles.perfectTariff}>
      <h2 className={styles.title}>Идеальный тариф</h2>
      <Tooltip additionalClassname={styles.info}>
        Нереально информативный текст
      </Tooltip>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <div className={styles.package}>
            <span className={styles.blueNumber}>50</span>Гб
          </div>
          <div className={styles.package}>
            <span className={styles.blueNumber}>3000</span>МИН
          </div>
        </div>
        <div className={styles.messengers}>
          <img src="/src/assets/images/messengers.svg" alt="messengers" />
          <img src="/src/assets/images/unlimited-symbol.svg" alt="unlimited" />
        </div>

        <div className={styles.calls}>
          <img src="/src/assets/images/yota_icons.svg" alt="calls" />
          <div className={styles.freeCalls}>Бесплатные звонки на Yota</div>
        </div>

        <div className={styles.optimal}>
          <Toggle
            title="Оптимальная скорость"
            checked={isChecked}
            onChange={handleToggle}
          />

          <Tooltip
            icon={<QuestionIcon />}
            additionalClassname={styles.question}
          >
            Еще один ответ на вопрос
          </Tooltip>
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.sum}>
            570 <span className={styles.ruble}>₽</span>
          </div>

          <Button additionalClassname={styles.btn} size="small">
            Купить
          </Button>
        </div>
      </div>
    </Card>
  );
};
