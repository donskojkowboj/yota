import { Card } from '../../../../../UIComponents/Card/index.js';
import { Button } from '../../../../../UIComponents/Button/index.js';
import {
  QuestionIcon,
  ToggleIcon,
  TooltipIcon,
} from '../../../../../UIComponents/Icons';

import styles from './TariffPerfect.module.scss';

export const TariffPerfect = () => {
  return (
    <Card variant="outline" additionalClassname={styles.perfectTariff}>
      <h2 className={styles.title}>Идеальный тариф</h2>
      <Button
        iconLeft={<TooltipIcon />}
        variant="clear"
        additionalClassname={styles.tooltip}
      />

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
          <Button
            additionalClassname={styles.btn}
            variant="clear"
            iconLeft={<ToggleIcon />}
          />
          <div className={styles.buttonsText}>Оптимальная скорость</div>
          <Button
            additionalClassname={styles.btn}
            variant="clear"
            iconLeft={<QuestionIcon />}
          />
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
