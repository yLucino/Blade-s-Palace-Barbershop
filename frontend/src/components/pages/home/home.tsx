import './home-style.css';
import './home-responsive.css'
import SocialMedia from '../../contents/socialMedia_HomePage/socialMedia';

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
              <a href="#novidades"><button>Novidades</button></a>
            </li>
          </ul>
        </nav>
      </div>
      <SocialMedia />
    </div>
    </>
  )
}

export default Home;