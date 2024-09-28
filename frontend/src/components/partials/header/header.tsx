import HeaderInfo from '../header/header-info/header-info';
import HeaderMenu from './header-menu/header-menu';

const Header = ({ onLoginSuccess }: { onLoginSuccess: (token: string) => void }) => {
  return (
    <>
      <HeaderInfo />
      <HeaderMenu onLoginSuccess={onLoginSuccess}/>
    </>
  )
}

export default Header;