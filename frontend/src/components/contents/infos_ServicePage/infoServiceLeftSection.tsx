import { Link, useParams } from "react-router-dom";
import { Services } from "../../../app/shared/models/services";
import { useEffect, useState } from "react";
import { getServicesLeft } from "../../services/forHomeWebSite/priceAndServicesPage.service";

const InfoServiceLeftSection = () => {
  const { title } = useParams();

  const [ allServiceLeft, setAllServiceLeft ] = useState<Services[]>([]);

  useEffect(() => {
    const getAllServicesLeft = async () => {
      try {
        const response = await getServicesLeft();
        setAllServiceLeft(response)
      } catch (error) {
        console.log('Error in get all service right:', error);
      }
    }

    getAllServicesLeft();
  }, [])

  return(
    <>
      {allServiceLeft.map((service, index) => (
        <Link to={`/info-service/left/${service.title}/${service.id}`} key={'leftR' + index}>
          <li className={`hover:scale-105 hover:shadow-2xl cursor-pointer transition-all flex flex-col justify-between text-center border-GrayLight border-solid border p-4 rounded-2xl h-60 ${title === service.title ? 'bg-gray-200 -translate-y-2 shadow-2xl' : ''}`} >
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
    </>
  )
}

export default InfoServiceLeftSection;