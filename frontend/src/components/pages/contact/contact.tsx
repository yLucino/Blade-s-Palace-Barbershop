import './contact-style.css';
import './contact-responsive.css';
import Header from '../../partials/header/header';

const Contact = () => {
  return (
    <>
      <Header />
      <div className='contact' id='contato'>
        <div className='title'>
          <h1>Contato</h1>
        </div>
        <nav>
          <ul>
            <li className='btn-social'>
              <a href="https://www.instagram.com/bladespalacebarbershop/" title="Instagram Blade's Palace BarberShop" target='_blank'>
                <i className='bx bxl-instagram-alt'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://www.instagram.com/canalagenteviu/" title='Instagram Canal AgenteViu!' target='_blank'>
                <i className='bx bxl-instagram-alt'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://www.facebook.com/search/top?q=blade’s%20palace%20barbershop&locale=pt_BR" title="Facebook Blade's Palace BarberShop" target='_blank'>
                <i className='bx bxl-facebook-circle'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://www.tiktok.com/@agente.viu?_t=8mLWgZBrwnO&_r=1" title='TikTok AgenteViu' target='_blank'>
                <i className='bx bxl-tiktok'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://www.youtube.com/@AGENTEVIU" title='Youtube AgenteViu' target='_blank'>
                <i className='bx bxl-youtube'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://api.whatsapp.com/message/OQPYP5XUZGU7E1?autoload=1&app_absent=0" title="Whatsapp Blade's Palace BarberShop" target='_blank'>
                <i className='bx bxl-whatsapp'></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="container-text">
          <div className="location">
            <p>Estabelecimento 1, R. Frederico Jensen, 3020 - Sala - 02 - Itoupavazinha, Blumenau - SC, 89066-302</p>
            <p>Estabelecimento 2, R. Franz Volles, 1636 - Edifício - Itoupava Central, Blumenau - SC, 89066-101</p>
          </div>
          <div className="opening-hours">
            <p>Terça a Sexta das <span>09h00 as 19h30</span> | Sábados das <span>08h00 as 18h30</span> | Segundas e Domingos estamos <span>fechados</span>.</p>
          </div>
          <div className="copyright">
            <p>Copyright &copy; by Blade’s Palace Barbershop | All Rights Reserved.</p>
          </div>
          <div className="developerBy">
            <p>WebSite developed by <a href="https://github.com/yLucino" target='_blank'>yLucino</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;