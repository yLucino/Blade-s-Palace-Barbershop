import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Social } from '../../../../app/shared/models/social';
import { Services } from '../../../../app/shared/models/services';
import { MonthlyPlans } from '../../../../app/shared/models/monthlyPlans';
import { EmployeeTeam } from '../../../../app/shared/models/employeeTeam';
import { getSocialMedia } from '../../../services/forHomeWebSite/homePage.service';
import { getMonthlyPlans, getServicesLeft, getServicesRight } from '../../../services/forHomeWebSite/priceAndServicesPage.service';
import { getTeam } from '../../../services/forHomeWebSite/teamPage.service';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddressSection from '../../../contents/managementPage/addressSection';
import OpeningHoursSection from '../../../contents/managementPage/openingHoursSection';
import TelephoneSection from '../../../contents/managementPage/telephoneSection';

const ManagementAdmin = () => {
  const [ socialMedia, setSocialMedia ] = useState<Social[]>([]);
  const [ servicesLeft, setServicesLeft ] = useState<Services[]>([]);
  const [ servicesRight, setServicesRight ] = useState<Services[]>([]);
  const [ monthlyPlans, setMonthlyPlans ] = useState<MonthlyPlans[]>([]);
  const [ team, setTeam ] = useState<EmployeeTeam[]>([]);

  useEffect(() => {
    const getAllSocialMedia = async () => {
      try {
        const response = await getSocialMedia();
        setSocialMedia(response);
      } catch (error) {
        console.error('Error in get all social media from backend', error);
      }
    }

    const getAllServicesLeft = async () => {
      try {
        const response = await getServicesLeft();
        setServicesLeft(response);
      } catch (error) {
        console.error('Error in get all servicesLeft from backend', error);
      }
    }

    const getAllServicesRight = async () => {
      try {
        const response = await getServicesRight();
        setServicesRight(response);
      } catch (error) {
        console.error('Error in get all servicesRight from backend', error);
      }
    }

    const getAllMonthlyPlans = async () => {
      try {
        const response = await getMonthlyPlans();
        setMonthlyPlans(response);
      } catch (error) {
        console.error('Error in get all monthly plans from backend', error);
      }
    }

    const getAllTeam = async () => {
      try {
        const response = await getTeam();
        setTeam(response);
      } catch (error) {
        console.error('Error in get all team from backend', error);
      }
    }

    getAllSocialMedia();
    getAllServicesLeft();
    getAllServicesRight();
    getAllMonthlyPlans();
    getAllTeam();
  }, []);

  return(
    <div className="bg-Blue 2xl:h-screen flex flex-col items-center p-4">
      <ToastContainer autoClose={3500} position={"bottom-left"} />
      {/* Menu header bar */}
      <nav className='absolute left-10'>
        <ul className='flex gap-2'>
          <li>
            <Link to={'/admin/home'}>
              <Button variant='contained' >
                <ArrowBackIcon />
              </Button>
            </Link>
          </li>
          <li>
            <Button variant='contained' >
            <a href="/">
              <HomeIcon />
            </a>
            </Button>
          </li>
        </ul>
      </nav>
      <div className="text-center">
        <h1 className="text-4xl font-AntonSC tracking-wider text-Yellow">Gerenciamento do Site</h1>
        <p className="text-gray-900 font-medium text-sm">gerencie dados e informações essenciais que podem mudar com o tempo</p>
      </div>
      <div className="bg-BlueDarkSoft p-10 mt-3 grid 2xl:grid-cols-3 md:grid-cols-1 gap-3 rounded-md">
        {/* Estabelecimento */}
        <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl">
          <h3 className="mb-1 font-semibold text-xl text-center">Estabelecimento</h3>
          <hr className="border-black mb-3"/>

          {/* Data/Hora de funcionamento */}
          <OpeningHoursSection />

          {/* Endereços */}
          <AddressSection />

          {/* Telefones */}
          <TelephoneSection />
          
          {/* Redes Sociais */}
          <div className="flex flex-col items-start ml-2 mb-2">
            <h4 className="font-medium">Redes Sociais:</h4>
            {socialMedia.map((social, index) => (
              <div className='flex items-center gap-1 mb-1' key={index}>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-lg">
                  <p className="text-xs"><span className='text-black text-sm'>{social.name}: </span>{social.url}</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
            ))}
          </div>
        </div>

        {/* Preços, Serviços e Planos */}
        <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl relative">
          {/* Serviços */}
          <div>
            <h3 className="mb-1 font-semibold text-xl text-center">Preços, Serviços e Planos</h3>
            <hr className="border-black mb-3"/>
            <div className='2xl:flex'>
              {/* Serviços da Esquerda */}
              <div>
                <div>
                  <h4 className="font-medium mb-1">Serviços da Esquerda:</h4>
                  <div className='overflow-y-scroll overflow-x-hidden 2xl:max-h-80 max-h-40 mr-2'>
                    {servicesLeft.map((service, index) => (
                      <div className='flex mb-2' key={index}>
                        <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-lg text-sm'>
                          <h4 className='mb-1'><span className='text-black font-semibold'>Titúlo:</span> {service.title}</h4>
                          <p className='mb-1'><span className='text-black font-semibold'>Imagem URL:</span> {service.imageUrl}</p>
                          <p className='mb-1'><span className='text-black font-semibold'>Descrição:</span> {service.description}</p>
                          <p className='mb-1'><span className='text-black font-semibold'>Preço com plano:</span> R$ {service.priceInPlan}</p>
                          <p><span className='text-black font-semibold'>Preço sem plano:</span> R$ {service.priceNoPlan}</p>
                        </div>
                        <div className='flex flex-col justify-evenly'>
                          <IconButton aria-label='edit'>
                            <EditIcon />
                          </IconButton>
                          <IconButton aria-label='edit'>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='mb-4 mt-2'>
                  <Button variant='outlined'>
                    Adicionar novo serviço
                    <AddIcon />
                  </Button>
                </div>
              </div>
              {/* Serviços da Direita */}
              <div>
                <div>
                  <h4 className="font-medium mb-1">Serviços da Direita:</h4>
                  <div className='overflow-y-scroll overflow-x-hidden 2xl:max-h-80 max-h-40 ml-2'>
                    {servicesRight.map((service, index) => (
                      <div className='flex mb-2' key={index}>
                      <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-lg text-sm'>
                        <h4 className='mb-1'><span className='text-black font-semibold'>Titúlo:</span> {service.title}</h4>
                        <p className='mb-1'><span className='text-black font-semibold'>Imagem URL:</span> {service.imageUrl}</p>
                        <p className='mb-1'><span className='text-black font-semibold'>Descrição:</span> {service.description}</p>
                        <p className='mb-1'><span className='text-black font-semibold'>Preço com plano:</span> R$ {service.priceInPlan}</p>
                        <p><span className='text-black font-semibold'>Preço sem plano:</span> R$ {service.priceNoPlan}</p>
                      </div>
                      <div className='flex flex-col justify-evenly'>
                        <IconButton aria-label='edit'>
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label='edit'>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
                <div className='mb-4 mt-2'>
                  <Button variant='outlined'>
                    Adicionar novo serviço
                    <AddIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Planos Mensais */}
          <div>
            <h4 className="font-medium mb-1">Preço Plano Mensal:</h4>
            <div className='flex flex-col'>
              {monthlyPlans.map((plan, index) => (
                <div className='flex items-center text-sm gap-1' key={index}>
                  <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-full'>
                    <p><span className='text-black font-semibold'>Plano cabelo E barba:</span> R$ {plan.priceFullPlan}</p>
                  </div>
                  <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-full'>
                    <p><span className='text-black font-semibold'>Plano cabelo OU barba:</span> R$ {plan.priceHalfPlan}</p>
                  </div>
                  <IconButton aria-label='edit'>
                    <EditIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time */}
        <div className='bg-slate-300 w-auto p-5 pt-2 rounded-xl'>
          <div>
            <h3 className="mb-1 font-semibold text-xl text-center">Time</h3>
            <hr className="border-black mb-3"/>
            <div>
              <h4 className="font-medium mb-1">Barbeiros:</h4>
              <div className='overflow-y-scroll overflow-x-hidden max-h-96'>
                {team.map((barber, index) => (
                  <div className='flex' key={index}>
                    <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-lg text-sm mb-2'>
                      <p><span className='text-black font-semibold'>Nome: </span>{barber.name}</p>
                      <p><span className='text-black font-semibold'>Imagem URL: </span>{barber.imageUrl}</p>
                      <p><span className='text-black font-semibold'>Cargo: </span>{barber.jobRole}</p>
                      <p><span className='text-black font-semibold'>Endereço de Atuação:</span>{barber.businessAddress}</p>
                      <p className='text-xs'><span className='text-black font-semibold text-sm'>Instagram: </span>{barber.instagramUrl}</p>
                      <p className='text-xs'><span className='text-black font-semibold text-sm'>Facebook: </span>{barber.facebookUrl}</p>
                      <p className='text-xs'><span className='text-black font-semibold text-sm'>WhatsApp: </span>{barber.whatsappUrl}</p>
                      <p><span className='text-black font-semibold'>Descrição: </span>{barber.description}</p>
                    </div>
                    <div className='flex flex-col justify-evenly'>
                      <IconButton aria-label='edit'>
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label='edit'>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-2'>
              <Button variant='outlined'>
                Adicionar novo barbeiro
                <AddIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ManagementAdmin;