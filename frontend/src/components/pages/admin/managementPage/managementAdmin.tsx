import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddressSection from '../../../contents/managementPage/addressSection';
import OpeningHoursSection from '../../../contents/managementPage/openingHoursSection';
import TelephoneSection from '../../../contents/managementPage/telephoneSection';
import SocialMediaSection from '../../../contents/managementPage/socialMideaSection';
import PriceAndServicesLeftSection from '../../../contents/managementPage/priceAndServiceLeftSection';
import PriceAndServicesRightSection from '../../../contents/managementPage/priceAndServiceRightSection';
import MonthlyPlanPriceSection from '../../../contents/managementPage/monthlyPlanPriceSection';
import TeamSection from '../../../contents/managementPage/teamSection';
import SummaryDayServiceSection from '../../../contents/managementPage/summaryDayServiceSection';

const ManagementAdmin = () => {


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

          <SummaryDayServiceSection />
          <OpeningHoursSection />
          <AddressSection />
          <TelephoneSection />
          <SocialMediaSection />
        </div>

        {/* Preços, Serviços e Planos */}
        <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl relative">
          {/* Preços, Serviços */}
          <h3 className="mb-1 font-semibold text-xl text-center">Preços, Serviços e Planos</h3>
          <hr className="border-black mb-3"/>
          <div className='2xl:flex'>
            <PriceAndServicesLeftSection />
            <PriceAndServicesRightSection />
          </div>

          {/* Planos Mensais */}
          <MonthlyPlanPriceSection />
        </div>

        {/* Time */}
        <div className='bg-slate-300 w-full p-5 pt-2 rounded-xl'>
          <div>
            <h3 className="mb-1 font-semibold text-xl text-center">Time</h3>
            <hr className="border-black mb-3"/>
            
            <TeamSection />
          </div>
        </div>
      </div>
    </div>
  )
};

export default ManagementAdmin;