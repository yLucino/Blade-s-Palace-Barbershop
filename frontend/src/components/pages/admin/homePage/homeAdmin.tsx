import logo from '../../../../../public/assets/image/header-img/LogoIcon.png';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const HomeAdmin = () => {
  return(
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-Blue">
        <ToastContainer autoClose={3500} position={"bottom-left"} />
        <div className="flex items-center">
          <img className='size-48' src={logo} alt="Logo da Barbearia" />
          <div className='ml-3 mr-3 text-Yellow'>
            <h1 className='text-4xl font-AntonSC'>Blade's Palace Barbershop ( Admin )</h1>
            <p className='text-lg font-OpenSans'>Configure, analise e gerencie.</p>
          </div>
        </div>
        <nav className="mt-5 mb-10">
          <a href="/">
            <Button variant='outlined' size='large'>
              Voltar ao inicio / Logout
            </Button>
          </a>
        </nav>
        <nav>
          <div className='flex gap-3'>
            <ul className='w-56'>
              <li>
                <Link to={'/admin/management'}>
                  <Button variant='contained' sx={{width: '100%', margin: '6px'}} size='large'>Gerenciar Site</Button>
                </Link>
              </li>
              <li>
                <Link to={'/admin/customers'}>
                  <Button variant='contained' sx={{width: '100%', margin: '6px', opacity: '30%'}} size='large'>Clientes</Button>
                </Link>
              </li>
              <li>
                <Link to={'/admin/payments'}>
                  <Button variant='contained' sx={{width: '100%', margin: '6px', opacity: '30%'}} size='large'>Pagamentos</Button>
                </Link>
              </li>
            </ul>
            <ul className='w-56'>
              <li>
                <Link to={'/admin/monthly-results'}>
                  <Button variant='contained' sx={{width: '100%', margin: '6px', opacity: '30%'}} size='large'>Resultados Mensais</Button>
                </Link>
              </li>
              <li>
                <Link to={'/admin/commands'}>
                  <Button variant='contained' sx={{width: '100%', margin: '6px', opacity: '30%'}} size='large'>Comandas Abertas</Button>
                </Link>
              </li>
              <li>
                <Link to={'/admin/open-command'}>
                  <Button variant='contained' sx={{width: '100%', margin: '6px', opacity: '30%'}} size='large'>Abrir Comanda</Button>
                </Link>
              </li>
            </ul>
          </div>
          <ul >
            <li>
              <Link to={'/admin/customer-scheduling'}>
                <Button variant='contained' sx={{width: '100%', margin: '6px', opacity: '30%'}} size='large'>Agendamentos dos clientes</Button>
              </Link>
            </li>
            <li>
              <Link to={'/admin/news'}>
                <Button variant='contained' sx={{width: '100%', margin: '6px'}} size='large'>Novidades & Avisos</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
};

export default HomeAdmin;