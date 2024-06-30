import './header-menu-style.css';
import './header-menu-responsive.css';
import logoImage from '../../../assets/image/penteado.png';

const HeaderMenu = () => {
  return (
    <>
      <div className='header-menu'>
        <div className='box-logo'>
          <img className='logo' src={logoImage} alt="logo" />
        </div>
        <div className='box-nav-menu'>
          <nav>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#precos-e-servicos">Preços e Serviços</a>
              </li>
              <li>
                <a href="#time">Time</a>
              </li>
              <li>
                <a href="#agendamento">Agendamento</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='box-nav-services'>
          <nav>
            <ul>
              <li>
                <a href="#login">
                  <i className='bx bx-user'></i>
                  Login
                </a>
              </li>
              <li>
                <a href="#administrador">
                  <i className='bx bx-cog'></i>
                  Administrador
                </a>
                {/* fazer area para administrado(isaque), 
                bloqueado com usuario e senha */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HeaderMenu;