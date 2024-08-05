import { Container } from '../../pagesComponents/Container';
import { MainPromo } from '../../pagesComponents/MainPage/MainPromo';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <section className={styles.mainPromo}>
      <Container>
        <MainPromo />
      </Container>
    </section>
  );
};
