import './priceAndService-style.css';
import './priceAndService-responsive.css';
import imageLogo from '../../assets/image/header-img/penteado.png';
import imageHairAndBarberCut from '../../assets/image/priceAndService-img/corte-cabeloEbarba.jpg';
import imageHairCut from '../../assets/image/priceAndService-img/corte-de-cabelo.jpg'
import imageBeardCut from '../../assets/image/priceAndService-img/corte-barba.jpg';
import imageEyebrowCut from '../../assets/image/priceAndService-img/corte-sombrancelha.jpg';
import imageWaxing from '../../assets/image/priceAndService-img/depilação-com-cera.jpeg'
import imageHydrationFacial from '../../assets/image/priceAndService-img/hidratação-facial.jpg';
import imageHighlights from '../../assets/image/priceAndService-img/cabelo-com-luzes.png';
import imageHairPlatinum from '../../assets/image/priceAndService-img/cabelo-platinado.jpg';

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
                  <p>Corte de cabelo e barba por apenas 50 reais. Venha desfrutar do talento e experiência de nossos barbeiros, que garantem um visual impecável em cada visita. Cuide-se por um preço acessível.</p>
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
                  <p>Corte de cabelo por apenas 30 reais. Estamos prontos para oferecer um visual impecável a cada uma de sua visita. Aproveite essa oportunidade para cuidar do seu estilo por um preço acessível.</p>
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
                  <p>Corte de barba por apenas 30 reais. Iremos proporcionar um acabamento impecável e personalizado. Não perca a chance de cuidar do seu visual com estilo e economia. Venha conhecer!</p>
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
                <img src={imageHairPlatinum} alt="imagem corte de Cabelo Platinado" />
                <div className="text-container">
                  <h1>Cabelo Platinado</h1>
                  <p>Cabelo platinado, a partir de 150 reais. Deixe o seu cabelo com um brilho incrível e uma cor deslumbrante. Aproveite essa oportunidade para ousar e destacar-se com um novo estilo.</p>
                </div>
                <nav>
                  <div className="btn-service-label">
                    <label htmlFor="btn-service-platinado">
                      A partir de:
                    </label>
                    <a id='btn-service-platinado' href="#agendamento">
                      <button>R$ 150,00</button>
                    </a>
                  </div>
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
                <p>Exclusiva assinatura mensal, onde você pode cortar o cabelo e fazer a barba quantas vezes quiser durante todo o mês. Garantindo que você esteja sempre com o visual impecável. Estaremos prontos para atender você sempre que precisar.</p>
                <nav>
                  <label htmlFor="btn-assinatura-full">
                    Plano Completo + Descontos
                  </label>
                  <a id='btn-assinatura-full' href="#assinatura">
                    <button>R$ 80,00</button>
                  </a>
                  <label htmlFor="btn-assinatura-half">
                    Plano Cabelo ou Barba + Descontos
                  </label>
                  <a className='btn-assinatura-half' href="#assinatura">
                    <button>R$ 60,00</button>
                  </a>
                  <a href="#">
                    <button className='btn-more-options'>Saiba mais</button>
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
                  <p>Fazemos sobrancelhas por apenas 10 reais. Proporcionamos um acabamento impecável e personalizado. Aproveite essa oportunidade para cuidar do seu visual de forma acessível. </p>
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
                  <p>Depilação com cera por apenas 20 reais. Acabamento suave e duradouro. Aproveite essa oportunidade para cuidar da sua pele de forma acessível. Visite-nos e veja a diferença.</p>
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
                  <p>Hidratação facial por apenas 20 reais. Tratamento revitalizante que deixa sua pele fresca e saúdavel. Aproveite esta oportunidade para cuidar da sua pele de forma acessível.</p>
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
                <img src={imageHighlights} alt="imagem corte de Cabelo com luzes" />
                <div className="text-container">
                  <h1>Cabelo com Luzes</h1>
                  <p>Aplicação de luzes no cabelo, a partir de 120 reais. Transforme seu visual com o toque iluminado e natural. Aproveite essa oportunidade para realçar sua beleza com estilo.</p>
                </div>
                <nav>
                  <div className="btn-service-label">
                    <label htmlFor="btn-service-luzes">
                      A partir de:
                    </label>
                    <a id='btn-service-luzes' href="#agendamento">
                      <button>R$ 120,00</button>
                    </a>
                  </div>
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