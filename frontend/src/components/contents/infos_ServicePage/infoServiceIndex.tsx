import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Services } from "../../../app/shared/models/services";
import { getServicesRightId } from "../../services/forHomeWebSite/priceAndServicesPage.service";

const InfoServiceIndex = () => {
  const { id } = useParams();
  const serviceID = Number(id);
  const [ service, setService ] = useState<Services>();

  useEffect(() => {
    const getService = async (id: number | undefined) => {
      try {
        const response = await getServicesRightId(id);
        setService(response[0])
      } catch (error) {
        console.log('Error in get service id INDEX:', error);
      }
    }

    getService(serviceID);
  }, [serviceID])
  
  return(
    <>
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
    </>
  )
}

export default InfoServiceIndex;