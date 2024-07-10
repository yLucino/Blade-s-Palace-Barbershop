import './header-menu-style.css';
import './header-menu-responsive.css';
import logoImage from '../../../assets/image/header-img/penteado.png';
import { useState } from 'react';

const HeaderMenu = () => {
  // toggle animation bx-icon
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='header-menu'>
        <div className='box-logo'>
          <a href="#">
            <img className='logo' src={logoImage} alt="logo" />
          </a>
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
              <li className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </li>
              <li className={`menu-content ${isOpen ? 'open' : ''}`}>
                <a href="#login">
                  <i className='bx bx-user'></i>
                  Login
                </a>

                <a href="#administrador">
                  <i className='bx bx-cog'></i>
                  Administrador
                {/* fazer area para administrado(isaque), 
                bloqueado com usuario e senha */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HeaderMenu;