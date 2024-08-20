import { useWindowSize } from '../../../hooks/useWindowSize.js';
import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

export const Header = () => {
  const { isMobile } = useWindowSize();
  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
};
