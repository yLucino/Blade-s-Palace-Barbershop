import './home-style.css';
import './home-responsive.css'

import backgroundImgDesktop from '../../../../public/assets/image/home-img/bg-image.png';
import backgroundImgLaptop from '../../../../public/assets/image/home-img/bg-image1200px.png';
import backgroundImgMobile from '../../../../public/assets/image/home-img/bg-image500px.png';

const Home = () => {
  return (
    <>
    <div className='home' id='inicio'>
      <picture>
        <source className="backgroundImg" srcSet={backgroundImgDesktop} media="(min-width: 1250px)"/>
        <source className="backgroundImg" srcSet={backgroundImgLaptop} media="(min-width: 730px)"/>
        <img className="backgroundImg" src={backgroundImgMobile} />
      </picture>
      <div className='home-content-text'>
        <h1>Blade's Palace Barbershop</h1>
        <h2>Corte de cabelo e barba & serviços especiais</h2>
        <p>Bem-vindo ao Blade's Palace Barbershop, o seu destino definitivo para um estilo impecável e cuidados excepcionais. Aqui, combinamos a tradição da barbearia com um toque moderno para oferecer uma experiência de grooming inigualável. Oferecemos: Corte de Cabelo, Barba & Serviços Especiais</p>
      </div>
      <div className='nav-home-buttons'>
        <nav>
          <ul>
            <li className='btn-book-haircut'>
              <a href="#precos-e-servicos"><button>Serviços</button></a>
            </li>
            <li className='btn-to-schedule'>
              <a href="#agendamento"><button>Agendamento</button></a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='nav-home-social'>
        <nav>
          <ul>
            <li className='btn-social'>
              <a href="https://www.instagram.com/bladespalacebarbershop/" target='_blank'>
                <i className='bx bxl-instagram-alt'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://www.facebook.com/search/top?q=blade’s%20palace%20barbershop&locale=pt_BR" target='_blank'>
                <i className='bx bxl-facebook-circle'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://api.whatsapp.com/message/OQPYP5XUZGU7E1?autoload=1&app_absent=0" target='_blank'>
                <i className='bx bxl-whatsapp'></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Home;