import { Button } from '../../../../../../UIComponents/Button/index.js';
import { LocationIcon } from '../../../../../../UIComponents/Icons/index.js';
import styles from './HeaderSelectCity.module.scss';

export const HeaderSelectCity = () => {
  return (
    <div className={styles.headerSelectCity}>
      <Button
        additionalClassname={styles.locationButton}
        variant="clear"
        iconLeft={<LocationIcon />}
      >
        Москва
      </Button>
    </div>
  );
};
