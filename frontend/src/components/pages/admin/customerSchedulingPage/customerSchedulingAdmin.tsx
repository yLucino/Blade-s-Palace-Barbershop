import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

const CustomerSchedulingAdmin = () => {
  return(
    <div className="bg-Blue h-screen flex flex-col items-center p-4">
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
      <h1 className="text-4xl font-AntonSC tracking-wider text-Yellow">Customer Scheduling Page</h1>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col items-center bg-slate-600 p-10 rounded-lg">
          <p className="text-white">Precisa do desenvolvimento desda página?</p>
          <a className="hover:underline" href="malito:dev.yluciano@gmail.com">Clique aqui e peça ajuda!</a>
        </div>
      </div>
    </div>
  )
}

export default CustomerSchedulingAdmin;