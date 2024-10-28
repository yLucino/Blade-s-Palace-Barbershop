import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { MonthlyPlans } from '../../../../app/shared/models/monthlyPlans';
import { EmployeeTeam } from '../../../../app/shared/models/employeeTeam';
import { getMonthlyPlans } from '../../../services/forHomeWebSite/priceAndServicesPage.service';
import { getTeam } from '../../../services/forHomeWebSite/teamPage.service';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddressSection from '../../../contents/managementPage/addressSection';
import OpeningHoursSection from '../../../contents/managementPage/openingHoursSection';
import TelephoneSection from '../../../contents/managementPage/telephoneSection';
import SocialMediaSection from '../../../contents/managementPage/socialMideaSection';
import PriceAndServicesLeftSection from '../../../contents/managementPage/priceAndServiceLeftSection';
import PriceAndServicesRightSection from '../../../contents/managementPage/priceAndServiceRightSection';

const ManagementAdmin = () => {
  const [ monthlyPlans, setMonthlyPlans ] = useState<MonthlyPlans[]>([]);
  const [ team, setTeam ] = useState<EmployeeTeam[]>([]);

  useEffect(() => {


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

          <OpeningHoursSection />
          <AddressSection />
          <TelephoneSection />
          <SocialMediaSection />
        </div>

        {/* Preços, Serviços e Planos */}
        <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl relative">
          <div>
            <h3 className="mb-1 font-semibold text-xl text-center">Preços, Serviços e Planos</h3>
            <hr className="border-black mb-3"/>
            <div className='2xl:flex'>
              <PriceAndServicesLeftSection />
              <PriceAndServicesRightSection />
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