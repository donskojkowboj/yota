import { useWindowSize } from '../../../hooks/useWindowSize.js';
import { HeaderDesktop } from '../HeaderDesktop';
import { HeaderMobile } from '../HeaderMobile';
import { Footer } from '../Footer';

export const Layout = (props) => {
  const { isMobile } = useWindowSize();
  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
