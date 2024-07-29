import { Container } from '../../pagesComponents/Container';
import { MainPromo } from '../../pagesComponents/MainPromo';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <Container>
      <div className={styles.homepage}>
        <MainPromo />
      </div>
    </Container>
  );
};
