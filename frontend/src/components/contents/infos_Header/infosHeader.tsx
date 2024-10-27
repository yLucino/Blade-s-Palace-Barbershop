import React, { useEffect, useState } from "react";
import { Address } from "../../../app/shared/models/address";
import { Telephone } from "../../../app/shared/models/telephone";
import { getAddress, getTelephone } from "../../services/forHomeWebSite/headerPage.service";

const InfosHeader: React.FC = () => {
  const [isHoveredMap, setIsHoveredMap] = useState<number | null>(null);
  const [isHoveredPhone, setIsHoveredPhone] = useState<number | null>(null);

  // animation icon header-info (bx-map)
  const handleMouseEnterMap = (index: number) => {
    setIsHoveredMap(index);
  };
  const handleMouseLeaveMap = () => {
    setIsHoveredMap(null);
  };

  // animation icon header-info (bx-phone)
  const handleMouseEnterPhone = (index: number) => {
    setIsHoveredPhone(index);
  };
  const handleMouseLeavePhone = () => {
    setIsHoveredPhone(null);
  };

  // request from backend to take address and telephone
  const [address, setAddress] = useState<Address[]>([]);
  const [telephone, setTelephone] = useState<Telephone[]>([]);

  useEffect(() => {
    const getAllAddress = async () => {
      try {
        const response = await getAddress();
        setAddress(response);
      } catch (error) {
        console.error('Error in get all address from backend', error);
      }
    }

    const getAllTelephone = async () => {
      try {
        const response = await getTelephone();
        setTelephone(response);
      } catch (error) {
        console.error('Error in get all telephone from backend', error);
      }
    }

    getAllAddress();
    getAllTelephone();
  }, []);
  
  return(
    <>
      <div className='info-location-numberPhone'>
        <ul>
          {address.map((location, index) => (
            <li className='location' key={index}
            onMouseEnter={() => handleMouseEnterMap(index)}
            onMouseLeave={handleMouseLeaveMap}
            >
              <a href={location.url_google_maps} target='_blank'>
                <i className={`bx bx-map ${isHoveredMap === index ? 'bx-tada' : ''}`}></i>
                <p title={`CEP: ${location.cep}`}>Nrº {location.number} | {location.street}</p>
              </a>
            </li>
          ))}
          {telephone.map((phone, index) => (
            <li className='numberPhone' key={index}
            onMouseEnter={() => handleMouseEnterPhone(index)}
            onMouseLeave={handleMouseLeavePhone}
            >
              <a href={phone.url_api_whatsapp} target='_blank'>
                <i className={`bx bx-phone ${isHoveredPhone === index ? 'bx-tada' : ''}`}></i>
                <p>{phone.number}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default InfosHeader;