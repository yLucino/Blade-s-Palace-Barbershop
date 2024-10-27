import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const CommandsAdmin = () => {
  return(
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
      <h1 className="text-4xl font-AntonSC tracking-wider text-Yellow">Commands Page</h1>
    </div>
  )
};

export default CommandsAdmin;