import './header-menu-style.css';
import './header-menu-responsive.css';
import logoImage from '../../../../../public/assets/image/header-img/penteado.png';
import React, { useState, useEffect } from 'react';

const HeaderMenu: React.FC = () => {
  // toggle animation bx-icon
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  // scroll to add className(scrollOn) in HeaderMenu, to Fixed in screen
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    }
    
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div className={`header-menu ${isScrolled ? 'scrollOn' : ''}`}>
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
                <a href="#administrador">
                  <i className='bx bx-cog'></i>
                  Administrador
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