import './team-style.css';
import './team-responsive.css'
import React from 'react';

import imageProfile1 from '../../../../public/assets/image/team-img/profile-img.jpg'
import imageBackground from '../../../../public/assets/image/team-img/bg-image.png';

const Team: React.FC = () => {
  return (
    <>
      <div className='team' id='time'>
        <img src={imageBackground} />
        <div className='title'>
          <h1>Time</h1>
        </div>
        <div className='container-profiles'>
          <div className="btn-arrow-carousel">
            <i className='bx bx-chevron-left bx-md left'></i>
          </div>
          <div className="profile disabled">
            <img src={imageProfile1} alt="" />
            <h2>Matheus</h2>
            <h3>Barbeiro Profissional</h3>
            <nav>
              <ul>
                <li className='btn-social'>
                  <a href="https://www.instagram.com/matheuserickcoelho/" target='_blank'>
                    <i className='bx bxl-instagram-alt'></i>
                  </a>
                </li>
                <li className='btn-social'>
                  <a href="https://www.facebook.com/matheus.coelho.752487?locale=pt_BR" target='_blank'>
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
            <p>Barbeiro uma sólida experiência de 2 anos no setor, trazendo um vasto conhecimento e habilidade para cada serviço oferecido. Atencioso a todas as suas petições, ele se dedica a entender suas necessidades e a garantir que você receba o melhor atendimento possível.</p>
          </div>
          <div className="profile">
            <img src={imageProfile1} alt="" />
            <h2>Isaque</h2>
            <h3>Barbeiro Prof. | Fundador</h3>
            <nav>
              <ul>
                <li className='btn-social'>
                  <a href="https://www.instagram.com/isaqueluizsilva/" target='_blank'>
                    <i className='bx bxl-instagram-alt'></i>
                  </a>
                </li>
                <li className='btn-social'>
                  <a href="https://www.facebook.com/isaque.luizsilva.9?locale=pt_BR" target='_blank'>
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
            <p>Barbeiro com 3 anos de experiência e dedicado a estudar e entender todas as necessidades dos clientes, garantindo um serviço personalizado e de alta qualidade. Ele está sempre atualizado com as últimas tendências e técnicas para oferecer o melhor atendimento possível.</p>
          </div>
          <div className="profile disabled">
            <img src={imageProfile1} alt="" />
            <h2>Vinicius</h2>
            <h3>Barbeiro Profissional</h3>
            <nav>
              <ul>
                <li className='btn-social'>
                  <a href="https://www.instagram.com/viniiii_oliveira/" target='_blank'>
                    <i className='bx bxl-instagram-alt'></i>
                  </a>
                </li>
                <li className='btn-social'>
                  <a href="https://www.facebook.com/?locale=pt_BR" target='_blank'>
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
            <p>Barbeiro com um ano de experiência, está em constante busca para fornecer sempre a melhor experiência para cada cliente. Com dedicação e atenção aos detalhes, esforçado para entender e atender às necessidades individuais, garantindo que cada visita seja única e satisfatória. </p>
          </div>
          <div className="btn-arrow-carousel">
            <i className='bx bx-chevron-right bx-md right'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;