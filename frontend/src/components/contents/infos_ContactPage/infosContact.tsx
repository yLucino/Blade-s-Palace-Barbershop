import React, { useEffect, useState } from "react";
import { Social } from "../../../app/shared/models/social";
import { Address } from "../../../app/shared/models/address";
import { getSocialMedia } from "../../services/homePage.service";
import { getAddress } from "../../services/headerPage.service";

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
        <ul>
          {socialMedia.map((social, index) => (
            <li className='btn-social' key={index}>
              <a href={social.url} title={`${social.name} Blade's Palace BarberShop`} target='_blank'>
                <i className={`bx bxl-${social.name}${social.name === 'instagram' ? '-alt' : social.name === 'facebook' ?  '-circle' : ''}`}></i>
              </a>
            </li>
          ))}
          <li className='btn-social'>
            <a href="https://www.instagram.com/canalagenteviu/" title='Instagram Canal AgenteViu!' target='_blank'>
              <i className='bx bxl-instagram-alt'></i>
            </a>
          </li>
          <li className='btn-social'>
            <a href="https://www.tiktok.com/@agente.viu?_t=8mLWgZBrwnO&_r=1" title='TikTok AgenteViu' target='_blank'>
              <i className='bx bxl-tiktok'></i>
            </a>
          </li>
          <li className='btn-social'>
            <a href="https://www.youtube.com/@AGENTEVIU" title='Youtube AgenteViu' target='_blank'>
              <i className='bx bxl-youtube'></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-text">
        <div className="location">
          {address.map((location, index) => (
            <p key={index}>
              Estabelecimento {index + 1}, {location.street}, {location.number} - {location.district}, {location.city} - {location.state}, {location.cep}
            </p>
          ))}
        </div>
        <div className="copyright">
          <p>Copyright &copy; by Blade’s Palace Barbershop | All Rights Reserved.</p>
        </div>
        <div className="developerBy">
          <p>WebSite developed by <a href="https://github.com/yLucino" target='_blank'>yLucino</a></p>
        </div>
      </div>
    </>
  )
}

export default InfosContact;