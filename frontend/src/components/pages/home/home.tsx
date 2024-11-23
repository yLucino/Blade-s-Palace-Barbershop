import './home-style.css';
import './home-responsive.css'
import SocialMedia from '../../contents/socialMedia_HomePage/socialMedia';

import backgroundImgDesktop from '../../../../public/assets/image/home-img/bg-image.png';
import backgroundImgLaptop from '../../../../public/assets/image/home-img/bg-image1200px.png';
import backgroundImgMobile from '../../../../public/assets/image/home-img/bg-image500px.png';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useState } from 'react';
import { getOpeningHours } from '../../services/forHomeWebSite/openingHours.service';
import { OpeningHours } from '../../../app/shared/models/openingHours';
import { Button } from '@mui/material';

const Home = () => {
  const [ hours, setHours ] = useState<OpeningHours[]>([])
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  useEffect(() => {
    const getHours = async () => {
      try {
        const response = await getOpeningHours()
        setHours(response)
      } catch (error) {
        console.log('Error in get hours:', error);
      }
    } 

    getHours();
  }, [])

  const handleHoursOpenClick = () => {
    setIsModalOpen(true)
  }

  const handleHoursCloseClick = () => {
    setIsModalOpen(false)
  }

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
              <a href="#novidades">
                <button className='flex items-center justify-center bg-ShadowDark h-50 border border-GoldenDark hover:shadow-inset-GoldenDark transition-all text-GoldenDark'>
                  Novidades
                </button>
              </a>
            </li>
            <li className='btn-to-clock' title='Horários de Atendimento'>
              <button className='flex items-center justify-center bg-ShadowDark !w-auto h-50 border border-GoldenDark hover:shadow-inset-GoldenDark transition-all' onClick={() => handleHoursOpenClick()}>
                <AccessTimeIcon sx={{color: '#977656'}}/>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <SocialMedia />
      {isModalOpen && hours && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center'>
          <div className="bg-BlueDark p-4 rounded shadow-lg w-96 flex flex-col items-center">
            <h2 className="text-lg text-GoldenLight font-bold mb-4">Horários de Atendimento</h2>

            {hours.map((day, index) => (
              <div key={index}>
                <p className='bg-Blue p-1 pr-2 pl-2 rounded-full mb-2 font-extralight text-sm text-GoldenLight'>
                  <span className='font-medium text-base'>{day.name_day_week}: </span> 
                  {day.status_open === 'Fechado' ? 'Fechado' : `das ${`${day.time_open}`} às ${day.time_close}`}
                </p>
              </div>
            ))}
            
            <div className="flex justify-end gap-1 mt-5">
              <Button variant="contained" color="error" onClick={handleHoursCloseClick}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Home;