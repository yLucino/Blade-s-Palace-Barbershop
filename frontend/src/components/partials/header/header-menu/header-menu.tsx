import './header-menu-style.css';
import './header-menu-login-style.css'
import './header-menu-responsive.css';
import logoImage from '../../../../../public/assets/image/header-img/penteado.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

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
  
  // close/open LoginAdm
  const [isHidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post('http://localhost:8800/admin', {user, password})
    .then(res => {
      if (res.data == 'No record user or password') {
        toast.error("Usuário/Senha incorreta ou inexistente!")
      } else if (res.data == 'Login Successfully') {
        toast.success("Login feito com sucesso!")
      }
    })
    .catch(err => console.log(err));
  };

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
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/price-and-services">Preços e Serviços</a>
              </li>
              <li>
                <a href="/team">Time</a>
              </li>
              <li>
                <a href="/scheduling">Agendamento</a>
              </li>
              <li>
                <a href="/contact">Contato</a>
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
                <a onClick={toggleHidden} href="#administrador">
                  <i className='bx bx-cog'></i>
                  Administrador
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`container-adm ${isHidden ? 'hidden' : ''}`}>
          <div className={`loginAdmin ${isHidden ? 'hidden' : ''}`}>
            <div className="container-loginAdmin">
              <button onClick={toggleHidden} className='btn-close'>
                <i className='bx bx-x'></i>
              </button>
              <div className="box-content">
                <div className="adm-info">
                  <h1>Bem-vindo ADM!</h1>
                  <img className='logo' src={logoImage} alt="logo" />
                </div>
                <div className="form-inputs">
                  <form onSubmit={handleSubmit}>
                    <input onChange={e => setUser(e.target.value)} type="text" placeholder="Usuário" required/>

                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" required/>

                    <button>Entrar</button>
                  </form>
                </div>
                <div className="help-info">
                  <p>Precisa de ajuda? <a href="mailto:dev.yluciano@gmail.com" target="_blank">clique aqui!</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderMenu;