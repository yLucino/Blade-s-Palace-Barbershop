import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NewsAdmin = () => {
  return(
    <>
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
        <div className='text-center'>
          <h1 className="text-4xl font-AntonSC tracking-wider text-Yellow">Gerencie as suas Novidades</h1>
          <p className="text-gray-900 font-medium text-sm">Adicione, edite e remova as novidades</p>
        </div>
        <div className="bg-BlueDarkSoft p-10 mt-3 grid 2xl:grid-cols-3 md:grid-cols-1 gap-3 rounded-md">
        </div>
      </div>
    </>
  )
}

export default NewsAdmin;