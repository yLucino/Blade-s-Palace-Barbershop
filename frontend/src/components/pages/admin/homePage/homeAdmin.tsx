

import logo from '../../../../../public/assets/image/header-img/penteado.png';
import { Link } from "react-router-dom";

const HomeAdmin = () => {
  return(
    <>
      <div className="container-admin">
      <div className="info-page">
        <img src={logo} alt="Logo da Barbearia" />
        <h1>Blade's Palace Barbershop (ADMIN)</h1>
        <p>Configure, analise e gerencie.</p>
      </div>
      <nav className="return-to-home">
        <a href="/">Voltar ao inicio / Logout</a>
      </nav>
      <nav className="settings-and-action-options">
        <ul>
          <li>
            <Link to={'/admin/management'}>
              <button>Gerenciar Site</button>
            </Link>
          </li>
          <li>
            <Link to={'/admin/customers'}>
              <button>Clientes</button>
            </Link>
          </li>
          <li>
            <Link to={'/admin/payments'}>
              <button>Pagamentos</button>
            </Link>
          </li>
          <li>
            <Link to={'/admin/monthly-results'}>
              <button>Resultados Mensais</button>
            </Link>
          </li>
          <li>
            <Link to={'/admin/commands'}>
              <button>Comandas Abertas</button>
            </Link>
          </li>
          <li>
            <Link to={'/admin/open-command'}>
              <button>Abrir Comanda</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
};

export default HomeAdmin;