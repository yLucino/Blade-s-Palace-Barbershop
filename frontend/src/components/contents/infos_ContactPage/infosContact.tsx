import React, { useEffect, useState } from "react";
import { Social } from "../../../app/shared/models/social";
import { Address } from "../../../app/shared/models/address";
import { getSocialMedia } from "../../services/forHomeWebSite/homePage.service";
import { getAddress } from "../../services/forHomeWebSite/headerPage.service";

const InfosContact: React.FC = () => {
  const [socialMedia, setSocialMedia] = useState<Social[]>([]);
  const [address, setAddress] = useState<Address[]>([]);

  useEffect(() => {
    const getAllSocialMedia = async () => {
      try {
        const response = await getSocialMedia();
        setSocialMedia(response);
      } catch (error) {
        console.error('Error in get all social media from backend', error);
      }
    }

    const getAllAddress = async () => {
      try {
        const response = await getAddress();
        setAddress(response);
      } catch (error) {
        console.error('Error in get all address from backend', error);
      }
    }

    getAllSocialMedia();
    getAllAddress();
  }, []);

  return(
    <>
      <nav>
        <ul className="flex justify-center ml-12 mr-12 border border-t-0 border-l-0 border-r-0 border-b-GrayLight">
          {socialMedia.map((social, index) => (
            <li className='pr-3 pl-3 pb-5' key={index}>
              <a href={social.url} title={`${social.name} Blade's Palace BarberShop`} target='_blank'>
                <i style={{height: '30px', width: '30px'}} className={`bx bxl-${social.name}${social.name === 'instagram' ? '-alt' : social.name === 'facebook' ?  '-circle' : ''} mb-5 !text-3xl hover:scale-90 transition-all`}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-3">
        <div>
          {address.map((location, index) => (
            <p className="700sw:w-auto w-96 700sw:mb-0 mb-1 mr-auto ml-auto text-center text-sampleTextLight font-extralight text-13 " key={index}>
              Estabelecimento {index + 1}, {location.street}, {location.number} - {location.district}, {location.city} - {location.state}, {location.cep}
            </p>
          ))}
        </div>
        <div>
          <p className="700sw:w-auto w-96 700sw:mb-0 mb-1 mr-auto ml-auto text-center text-sampleTextLight font-extralight text-13 underline">Copyright &copy; by Blade’s Palace Barbershop | All Rights Reserved.</p>
        </div>
        <div>
          <p className="700sw:w-auto w-96 700sw:mb-0 mb-1 mr-auto ml-auto text-center text-sampleTextLight font-extralight text-13 ">WebSite developed by <a className="text-Golden hover:underline" href="https://github.com/yLucino" target='_blank'>yLucino</a></p>
        </div>
      </div>
    </>
  )
}

export default InfosContact;