import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Services } from "../../../app/shared/models/services";
import { getServicesLeftId, getServicesRightId } from "../../services/forHomeWebSite/priceAndServicesPage.service";

const InfoServiceIndex = () => {
  const { section, id } = useParams();
  const serviceID = Number(id);
  const [ service, setService ] = useState<Services>();

  useEffect(() => {
    if (section === 'right') {
      const getServiceRight = async (id: number | undefined) => {
        try {
          const response = await getServicesRightId(id);
          setService(response[0])
        } catch (error) {
          console.log('Error in get service id INDEX:', error);
        }
      }

      getServiceRight(serviceID);
    } else {
      const getServiceLeft = async (id: number | undefined) => {
        try {
          const response = await getServicesLeftId(id);
          setService(response[0])
        } catch (error) {
          console.log('Error in get service id INDEX:', error);
        }
      }

      getServiceLeft(serviceID);
    }
  }, [section, serviceID])
  
  return(
    <>
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 bg-GrayBlue p-10 rounded-md w-3/4 ml-auto mr-auto ">
        <div className="flex justify-center w-full">
          <img className="h-80 rounded-lg" src={service?.imageUrl} alt={service?.title} />
        </div>
        <div className="flex flex-col justify-center text-center items-center">
          <h1 className="text-white text-3xl font-bold mb-10">{service?.title}</h1>
          <p className="text-white font-extralight ">{service?.description}</p>
          <div className="flex flex-col mt-4 w-72 text-center gap-2">
            <p className="p-2 bg-sky-800 rounded-xl text-white text-sm font-extralight">Preço COM plano mensal: <span className="font-medium">R$ {service?.priceInPlan}</span></p>
            <p className="p-2 bg-sky-800 rounded-xl text-white text-sm font-extralight">Preço SEM plano mensal: <span className="font-medium">R$ {service?.priceNoPlan}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoServiceIndex;