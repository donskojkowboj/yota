import { Button } from '../../../../../UIComponents/Button';
import { LocationIcon } from '../../../../../UIComponents/Icons';
import { DottedLineIcon } from '../../../../../UIComponents/Icons';
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
      <DottedLineIcon />
    </div>
  );
};
