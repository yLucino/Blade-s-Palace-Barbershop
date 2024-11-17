import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import NewsSection from '../../../contents/managementPage/newsSection';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewsAdmin = () => {
  return(
    <>
      <div className="bg-Blue h-screen flex flex-col items-center p-4">
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
        <div className='text-center'>
          <h1 className="text-4xl font-AntonSC tracking-wider text-Yellow">Gerencie as suas Novidades & Avisos</h1>
          <p className="text-gray-900 font-medium text-sm">Adicione, edite e remova as novidades e avisos</p>
        </div>
        <div className="bg-BlueDarkSoft p-10 mt-3 rounded-md w-5/6">
          <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl">
            <h3 className="mb-1 font-semibold text-xl text-center">Novidades e Avisos</h3>
            <hr className="border-black mb-3"/>

            <NewsSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsAdmin;