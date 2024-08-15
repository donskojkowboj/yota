import { HeaderMobile } from '../HeaderMobile';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useWindowWidth } from '@react-hook/window-size/throttled';

export const Layout = (props) => {
  const onlyWidth = useWindowWidth();

  return (
    <>
      {onlyWidth <= 768 ? <HeaderMobile /> : <Header />}
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
