import './header-menu-login-style.css'
import logoImage from '../../../../../public/assets/image/header-img/LogoIcon.png';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import { TextField, Button } from '@mui/material';

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
      console.log(error);
      toast.error("Usuário/Senha incorreta ou inexistente!");
    }
  };

  return (
    <>
      <div className={`flex absolute bg-transparent justify-between w-full pl-1 pr-1 1070sw:pt-10 1070sw:pb-10 1070sw:pl-40 1070sw:pr-40 items-center top-24 1070sw:top-11 z-1100 ${isScrolled ? '!fixed !top-0 shadow-scrollOnShadow !rounded-scrollOnRadius backdrop-blur-xl' : ''}`}>
        <div>
          <a href="#">
            <img className='750sw:size-12 size-6 750sw:ml-2 ' src={logoImage} alt="logo" />
          </a>
        </div>
        <div>
          <nav>
            <ul className='flex 850sw:gap-10 750sw:gap-6 gap-2 uppercase 850sw:text-sm 750sw:text-xs text-10 font-bold text-GoldenLight'>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#novidades">Novidades</a>
              </li>
              <li>
                <a href="#precos-e-servicos">Preços e Serviços</a>
              </li>
              <li>
                <a href="#time">Time</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='box-nav-services'>
          <nav>
            <ul className='flex gap-5 transition-all uppercase text-sm font-bold text-GoldenLight'>
              <li className={`1070sw:hidden flex flex-col justify-between 750sw:w-7 w-5 h-5 cursor-pointer mr-2 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`w-full h-0.5 bg-Golden transition-all ${isOpen ? '-rotate-45 !translate-x-[-5px] !translate-y-[9px]' : ''}`}></div>
                <div className={`w-full h-0.5 bg-Golden transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-Golden transition-all ${isOpen ? 'rotate-45 !translate-x-[-5px] !translate-y-[-8px]' : ''}`}></div>
              </li>
              <li className={`1070sw:block ${!isOpen ? 'hidden' : 'block'} 1070sw:static absolute 1070sw:top-0 750sw:top-14 top-10 1070sw:right-0 right-2 w-auto 1070sw:bg-transparent bg-BlueDark hover:shadow-scrollOnShadow hover:backdrop-blur-3xl cursor-pointer rounded-xl transition-all ${isOpen ? 'open' : ''}`}>
                <a className='flex items-center 750sw:m-5 m-3 750sw:text-sm text-xs ' onClick={toggleHidden} href="#administrador">
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
                <div className="adm-info flex flex-col items-center">
                  <h1 className='text-3xl'>Bem-vindo ADM!</h1>
                  <img className='logo shadow-xl mt-3 rounded-full' src={logoImage} alt="logo" />
                </div>
                <div className="form-inputs">
                  <form onSubmit={handleSubmit}>
                    <TextField onChange={e => setUser(e.target.value)} variant='filled' sx={{marginBottom: '6px'}} size='small' label='Usuário' type='text' required autoComplete='off'/>

                    <TextField onChange={e => setPassword(e.target.value)} variant='filled' sx={{marginBottom: '20px'}} size='small' label='Senha' type='password' required autoComplete='off'/>

                    <Button type='submit' size='large' variant='contained' sx={{ color: 'black'}}>
                      Entrar
                    </Button>
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