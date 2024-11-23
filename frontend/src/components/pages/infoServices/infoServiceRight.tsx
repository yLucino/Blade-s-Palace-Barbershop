import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderInfo from "../../partials/header/header-info/header-info";
import React, { useEffect, useState } from "react";
import { getServicesLeft, getServicesRight, getServicesRightId } from "../../services/forHomeWebSite/priceAndServicesPage.service";
import { Services } from "../../../app/shared/models/services";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

export const InfoServiceRight: React.FC = () => {
  const navigate = useNavigate();
  const { title, id } = useParams();
  const serviceID = Number(id);
  const [ service, setService ] = useState<Services>();
  const [ allServiceRight, setAllServiceRight ] = useState<Services[]>([]);
  const [ allServiceLeft, setAllServiceLeft ] = useState<Services[]>([]);

  useEffect(() => {
    const getService = async (id: number | undefined) => {
      try {
        const response = await getServicesRightId(id);
        setService(response[0])
      } catch (error) {
        console.log('Error in get service id INDEX:', error);
      }
    }

    const getAllServicesRight = async () => {
      try {
        const response = await getServicesRight();
        setAllServiceRight(response)
      } catch (error) {
        console.log('Error in get all service right:', error);
      }
    }
    
    const getAllServicesLeft = async () => {
      try {
        const response = await getServicesLeft();
        setAllServiceLeft(response)
      } catch (error) {
        console.log('Error in get all service right:', error);
      }
    }

    getService(serviceID);
    getAllServicesRight();
    getAllServicesLeft();
  }, [serviceID])

  const handleBack = () => {

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return(
    <>
      <div className="bg-White w-full h-screen">
        <HeaderInfo />
        <div className="flex flex-col p-10 pt-40 h-screen justify-between">
          <nav className="flex gap-1 absolute top-14 border-gray-500 border rounded-full">
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Link to={'/'}>
              <IconButton>
                <HomeIcon />
              </IconButton>
            </Link>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 bg-GrayBlue p-10 rounded-md">
            <div className="mr-10">
              <img className="h-80 rounded-lg" src={service?.imageUrl} alt={service?.title} />
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold mb-10">{service?.title}</h1>
              <p className="text-white font-extralight w-1/3">{service?.description}</p>
              <div className="flex flex-col mt-4 w-72 text-center gap-2">
                <p className="p-2 bg-sky-800 rounded-xl text-white text-sm font-extralight">Preço COM plano mensal: <span className="font-medium">R$ {service?.priceInPlan}</span></p>
                <p className="p-2 bg-sky-800 rounded-xl text-white text-sm font-extralight">Preço SEM plano mensal: <span className="font-medium">R$ {service?.priceNoPlan}</span></p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-center text-xl text-GrayBlue font-semibold">Outros Serviços</h2>
            <ul className="flex flex-wrap justify-center gap-2 mt-4">
              {allServiceRight.map((service, index) => (
                <Link to={`/info-service/right/${service.title}/${service.id}`} key={'rightR' + index}>
                  <li className={`hover:scale-105 hover:shadow-2xl cursor-pointer transition-all flex flex-col justify-between text-center border-GrayLight border-solid border p-4 rounded-2xl h-60 ${title === service.title ? 'bg-gray-200 -translate-y-2' : ''}`}>
                    <img className="h-20 rounded-2xl object-cover" src={service.imageUrl} alt={service.title} />
                    <hr className="m-5 border-gray-400" />
                    <h1>{service.title}</h1>
                    <div className="flex flex-col gap-2 mt-4">
                      <p className="text-sm">Com plano: <span className="text-white font-semibold bg-sky-700 p-1  rounded-full">R$ {service.priceInPlan}</span></p>
                      <p className="text-sm">Sem plano: <span className="text-Blue font-semibold border border-solid border-Blue p-0.5 pr-1 pl-1 rounded-full">R$ {service.priceNoPlan}</span></p>
                    </div>
                  </li>
                </Link>
              ))}
              {allServiceLeft.map((service, index) => (
                <Link to={`/info-service/left/${service.title}/${service.id}`} key={'leftR' + index}>
                  <li className={`hover:scale-105 hover:shadow-2xl cursor-pointer transition-all flex flex-col justify-between text-center border-GrayLight border-solid border p-4 rounded-2xl h-60 ${title === service.title ? 'bg-gray-200 -translate-y-2' : ''}`} >
                    <img className="h-20 rounded-2xl object-cover" src={service.imageUrl} alt={service.title} />
                    <hr className="m-5 border-gray-400" />
                    <h1>{service.title}</h1>
                    <div className="flex flex-col gap-2 mt-4">
                      <p className="text-sm">Com plano: <span className="text-white font-semibold bg-sky-700 p-1  rounded-full">R$ {service.priceInPlan}</span></p>
                      <p className="text-sm">Sem plano: <span className="text-Blue font-semibold border border-solid border-Blue p-0.5 pr-1 pl-1 rounded-full">R$ {service.priceNoPlan}</span></p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoServiceRight;