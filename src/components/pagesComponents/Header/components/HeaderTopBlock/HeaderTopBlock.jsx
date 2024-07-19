import styles from './HeaderTopBlock.module.scss';
import { HeaderContainer } from '../HeaderContainer';
import { HeaderSelectCity } from './HeaderSelectCity';
import { HeaderSelectClient } from './HeaderSelectClient/HeaderSelectClient';
import { HeaderNavBar } from './HeaderNavbar/HeaderNavbar';

export const HeaderTopBlock = () => {
  return (
    <>
      <HeaderContainer>
        <div className={styles.headertopblock}>
          <HeaderSelectCity />
          <div className={styles.wrapper}>
            <HeaderSelectClient />
            <HeaderNavBar />
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};
