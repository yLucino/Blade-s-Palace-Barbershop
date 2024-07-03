import './home-style.css';
import './home-responsive.css';
import backgroundImg from '../../assets/image/backgound16-9.jpg';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <img className="backgroundImg" src={backgroundImg} alt="background image" />
      <div className='home-content-text'>
        <h1>Blade's Palace Barbershop</h1>
        <h2>Corte de cabelo e barba & serviços especiais</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam doloremque minima modi sed dolore saepe. Labore et, exercitationem iure cumque nostrum dolore quasi quisquam aperiam voluptates minus officia iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam doloremque minima modi sed dolore saepe. Labore et, exercitationem iure cumque nostrum dolore quasi quisquam aperiam voluptates minus officia iusto?</p>
      </div>
      <div className='nav-home-buttons'>
        <nav>
          <ul>
            <li className='btn-book-haircut'>
              <a href=""><button>Opções de Cortes</button></a>
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
              <a href="https://www.instagram.com/bladespalacebarbershop/">
                <i className='bx bxl-instagram-alt'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://www.facebook.com/search/top?q=blade’s%20palace%20barbershop&locale=pt_BR">
                <i className='bx bxl-facebook-circle'></i>
              </a>
            </li>
            <li className='btn-social'>
              <a href="https://api.whatsapp.com/message/OQPYP5XUZGU7E1?autoload=1&app_absent=0">
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