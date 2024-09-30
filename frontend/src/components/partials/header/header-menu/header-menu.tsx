import './header-menu-style.css';
import './header-menu-login-style.css'
import './header-menu-responsive.css';
import logoImage from '../../../../../public/assets/image/header-img/penteado.png';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const HeaderMenu = ({ onLoginSuccess }: { onLoginSuccess: (token: string) => void }) => {
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
  
  // LoginAdm
  localStorage.removeItem('authToken');
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/admin/login`, {user, password});
      if (response.data.message == 'Login Successfully') {
        onLoginSuccess(response.data.token);
        toast.success("Login feito com sucesso!");
        navigate(`/admin/home`);
      }
    } catch (error) {
      toast.error("Usuário/Senha incorreta ou inexistente!");
    }
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
                    <input onChange={e => setUser(e.target.value)} type="text" placeholder="Usuário" required autoComplete="off"/>

                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" required autoComplete="off"/>

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