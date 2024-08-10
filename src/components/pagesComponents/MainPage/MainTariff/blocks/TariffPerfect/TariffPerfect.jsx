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
      <Tooltip
        icon={<TooltipIcon />}
        additionalClassname={`${styles.tooltip} ${styles.tooltip__info}`}
      >
        <div className={styles.tooltip__text}>
          Нереально информативный текст
        </div>
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
          <Toggle id="toggle" checked={isChecked} onChange={handleToggle} />
          <div className={styles.buttonsText}>Оптимальная скорость</div>
          <Tooltip
            additionalClassname={`${styles.tooltip} ${styles.tooltip__question}`}
            icon={<QuestionIcon />}
          >
            <div
              className={`${styles.tooltip__text} ${styles.tooltip__text_question}`}
            >
              Еще один ответ на вопрос
            </div>
          </Tooltip>
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.sum}>
            570 <span className={styles.ruble}>₽</span>
          </div>

          <Button size="small">Купить</Button>
        </div>
      </div>
    </Card>
  );
};
