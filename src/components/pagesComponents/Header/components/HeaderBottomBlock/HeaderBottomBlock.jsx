import styles from './HeaderBottomBlock.module.scss';
import { HeaderContainer } from '../HeaderContainer';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderDropdown } from './HeaderDropdown';
import { Button } from '../../../../UIComponents/Button/Button';
import { HeaderAccount } from './HeaderAccount';

export const HeaderBottomBlock = () => {
  return (
    <>
      <HeaderContainer>
        <div className={styles.headerbottomblock}>
          <HeaderLogo />
          <div className={styles.wrapper}>
            <HeaderDropdown />
            <Button />
            <HeaderAccount />
          </div>
        </div>
      </HeaderContainer>
    </>
  );
};
