import './priceAndService-style.css';
import './priceAndService-responsive.css';
import imageLogo from '../../assets/image/header-img/penteado.png';
import imageHairAndBarberCut from '../../assets/image/priceAndService-img/corte-cabeloEbarba.jpg';
import imageHairCut from '../../assets/image/priceAndService-img/corte-de-cabelo.jpg'
import imageBeardCut from '../../assets/image/priceAndService-img/corte-barba.jpg';
import imageEyebrowCut from '../../assets/image/priceAndService-img/corte-sombrancelha.jpg';
import imageWaxing from '../../assets/image/priceAndService-img/depilação-com-cera.jpeg'
import imageHydrationFacial from '../../assets/image/priceAndService-img/hidratação-facial.jpg';

const PriceAndService = () => {
  return (
    <>
      <div className="price-and-service" id="precos-e-servicos">
        <div className="title">
          <h1>Preços e Serviços</h1>
        </div>
        <div className="container-cards">
          <div className="box-cards-left">
            <ul>
              <li>
                <img src={imageHairAndBarberCut} alt="imagem corte de cabelo e barba" />
                <div className="text-container">
                  <h1>Cabelo e Barba</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat perferendis voluptas cupiditate, molestiae sunt aspernatur rem accusamus, atque iste vel nam voluptate blanditiis rerum minima harum maiores sit nihil.</p>
                </div>
                <nav>
                  <a href="#agendamento">
                    <button>R$ 50,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Ver opções</button>
                  </a>
                </nav>
              </li>
              <li>
                <img src={imageHairCut} alt="imagem corte de barba" />
                <div className="text-container">
                  <h1>Corte de Cabelo</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat perferendis voluptas cupiditate, molestiae sunt aspernatur rem accusamus, atque iste vel nam voluptate blanditiis rerum minima harum maiores sit nihil.</p>
                </div>
                <nav>
                  <a href="#agendamento">
                    <button>R$ 30,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Ver opções</button>
                  </a>
                </nav>
              </li>
              <li>
                <img src={imageBeardCut} alt="imagem corte de Barba" />
                <div className="text-container">
                  <h1>Corte de Barba</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat perferendis voluptas cupiditate, molestiae sunt aspernatur rem accusamus, atque iste vel nam voluptate blanditiis rerum minima harum maiores sit nihil.</p>
                </div>
                <nav>
                  <a href="#agendamento">
                    <button>R$ 30,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Ver opções</button>
                  </a>
                </nav>
              </li>
            </ul>
          </div>
          <div className='box-card-middle'>
            <ul>
              <li>
                <h1>Assinatura Mensal</h1>
                <img src={imageLogo} alt="imagem Logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat perferendis voluptas cupiditate, molestiae sunt aspernatur rem accusamus, atque iste vel nam voluptate blanditiis rerum minima harum maiores sit nihil.</p>
                <nav>
                  <label htmlFor="btn-assinatura-full">
                    Plano Completo
                  </label>
                  <a id='btn-assinatura-full' href="#assinatura">
                    <button>R$ 80,00</button>
                  </a>
                  <label htmlFor="btn-assinatura-half">
                    Plano Cabelo ou Barba
                  </label>
                  <a className='btn-assinatura-half' href="#assinatura">
                    <button>R$ 60,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Ver mais</button>
                  </a>
                </nav>
              </li>
            </ul>
          </div>
          <div className="box-cards-right">
            <ul>
              <li>
                <img src={imageEyebrowCut} alt="imagem corte de Sobrancelha" />
                <div className="text-container">
                  <h1>Sobrancelha</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat perferendis voluptas cupiditate, molestiae sunt aspernatur rem accusamus, atque iste vel nam voluptate blanditiis rerum minima harum maiores sit nihil.</p>
                </div>
                <nav>
                  <a href="#agendamento">
                    <button>R$ 10,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Ver opções</button>
                  </a>
                </nav>
              </li>
              <li>
                <img src={imageWaxing} alt="imagem Depilação com cera " />
                <div className="text-container">
                  <h1>Depilação com Cera </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat perferendis voluptas cupiditate, molestiae sunt aspernatur rem accusamus, atque iste vel nam voluptate blanditiis rerum minima harum maiores sit nihil.</p>
                </div>
                <nav>
                  <a href="#agendamento">
                    <button>R$ 20,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Ver opções</button>
                  </a>
                </nav>
              </li>
              <li>
                <img src={imageHydrationFacial} alt="imagem corte de Sobrancelha" />
                <div className="text-container">
                  <h1>Hidratação Facial</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat perferendis voluptas cupiditate, molestiae sunt aspernatur rem accusamus, atque iste vel nam voluptate blanditiis rerum minima harum maiores sit nihil.</p>
                </div>
                <nav>
                  <a href="#agendamento">
                    <button>R$ 20,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Ver opções</button>
                  </a>
                </nav>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceAndService