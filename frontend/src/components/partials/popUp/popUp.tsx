import { Button, IconButton } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import CircleIcon from '@mui/icons-material/Circle';
import Logo from "../../../../public/assets/image/header-img/Logo.png"
import { useEffect, useState } from "react";
import { getNews } from "../../services/forHomeWebSite/newsPage.service";
import { NewsModel } from "../../../app/shared/models/news";

export const PopUp = () => {
  const [ displayHidden, setDisplayHidden ] = useState(true);
  const [ allNews, setAllNews ] = useState<NewsModel[]>([])

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const response = await getNews();
        setAllNews(response)
      } catch (error) {
        console.log('Error in get all news (info) for POPUP', error);
      }
    }

    getAllNews()
  }, [])

  useEffect(() => {
    if (allNews.length > 0) {
      setDisplayHidden(false)
    } else {
      setDisplayHidden(true)
    }
  }, [allNews]);

  const handleCloseANDSeeNowClick = () => {
    setDisplayHidden(true);
  }

  return(
    <>
      <div className={`${displayHidden === true ? 'hidden' : 'fixed'} z-1100 right-8 top-40 bg-white rounded-md shadow-2xl`}>
        <div className="relative p-5">
          <div className="absolute left-1 top-0">
            <CircleIcon color="primary" fontSize="small"/>
          </div>
          <div className="absolute right-0 top-0">
            <IconButton onClick={() => handleCloseANDSeeNowClick()}>
              <ClearIcon />
            </IconButton>
          </div>
          <div className="flex justify-center">
            <img className="w-52" src={Logo} alt="Imagem da Logo" />
          </div>
          <div className="w-full text-center mr-5 mt-5">
            <h1 className="text-BlueLight">Temos novidades para você!</h1>
            <p className="text-sm">Novos Serviços e Avisos</p>
          </div>
          <div className="flex mt-2 justify-center">
            <a href="#novidades">
              <Button variant="contained" size="small" onClick={() => handleCloseANDSeeNowClick()}>
                Ver agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopUp