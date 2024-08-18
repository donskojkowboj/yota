import { useWindowSize } from '../../../hooks/useWindowSize.js';
import { HeaderDesktop } from '../HeaderDesktop';
import { HeaderMobile } from '../HeaderMobile';
import { Footer } from '../Footer';
import { BurgerMenu } from '../HeaderMobile/components/BurgerMenu';
export const Layout = (props) => {
  const [width] = useWindowSize();
  return (
    <>
      {width <= 768 ? <HeaderMobile /> : <HeaderDesktop />}
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
