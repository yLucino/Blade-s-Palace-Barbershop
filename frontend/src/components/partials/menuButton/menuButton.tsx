import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";

export const MenuButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return(
    <>
      <nav className="flex gap-1 absolute 1xl:top-14 top-24 border-gray-500 border rounded-full">
        <IconButton onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
        <Link to={'/'}>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </nav>
    </>
  )
}

export default MenuButton;