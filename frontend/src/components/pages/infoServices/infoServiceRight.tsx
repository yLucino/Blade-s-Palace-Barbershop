import { useParams } from "react-router-dom";
import HeaderInfo from "../../partials/header/header-info/header-info";
import { useEffect, useState } from "react";
import { getServicesRightId } from "../../services/forHomeWebSite/priceAndServicesPage.service";
import { Services } from "../../../app/shared/models/services";


export const InfoServiceRight = () => {
  const { id } = useParams();
  const serviceID = Number(id);
  const [ service, setService ] = useState<Services>();

  useEffect(() => {
    const getNews = async (id: number | undefined) => {
      try {
        const response = await getServicesRightId(id);
        setService(response[0])
      } catch (error) {
        console.log('Error in get news id:', error);
      }
    }

    getNews(serviceID);
  }, [serviceID])

  return(
    <>
      <div className="bg-Gray w-full h-screen">
        <HeaderInfo />
        <div className="flex flex-col p-12 h-screen justify-center items-center">
          <div className="flex gap-4 bg-BlueLight p-10 rounded-md">
            <div>
              <img src={service?.imageUrl} alt={service?.title} />
            </div>
            <div>
              <h1 className="">{service?.title}</h1>
              <p className="w-1/3">{service?.description}</p>
              <p>{service?.priceInPlan}</p>
              <p>{service?.priceNoPlan}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoServiceRight;