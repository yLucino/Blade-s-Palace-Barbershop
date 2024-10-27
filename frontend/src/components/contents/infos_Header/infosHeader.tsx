import React, { useEffect, useState } from "react";
import { Address } from "../../../app/shared/models/address";
import { Telephone } from "../../../app/shared/models/telephone";
import { getAddress, getTelephone } from "../../services/forHomeWebSite/headerPage.service";
import { Button } from "@mui/material";

const InfosHeader: React.FC = () => {
  const [ isHoveredMap, setIsHoveredMap ] = useState<number | null>(null);
  const [ isHoveredPhone, setIsHoveredPhone ] = useState<number | null>(null);
  const [ isModalAddressOpen, setIsModalAddressOpen ] = useState(false);
  const [ isModalTelephoneOpen, setIsModalTelephoneOpen ] = useState(false);

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
  
  const handleAddressClick = () => {
    setIsModalAddressOpen(true);
  }

  const handleTelephoneClick = () => {
    setIsModalTelephoneOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalAddressOpen(false);
    setIsModalTelephoneOpen(false);
  }

  return(
    <>
      <div className='info-location-numberPhone'>
        <ul>
          {address.map((location, index) => (
            <li className='location disabled ml-10' key={index}
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
            <li className='numberPhone disabled ml-10' key={index}
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
        <div className="2xl:hidden">
          <Button variant="outlined" sx={{color: '#fed35b', borderColor: '#fed35b', margin: '0 4px'}} size="small" onClick={() => handleAddressClick()}>Endereços</Button>
          <Button variant="outlined" sx={{color: '#fed35b', borderColor: '#fed35b', margin: '0 4px'}} size="small" onClick={() => handleTelephoneClick()}>Telefones</Button>
        </div>
        {isModalAddressOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-BlueDark p-4 rounded shadow-lg w-96 flex flex-col items-center">
              <h2 className="text-lg font-bold mb-4">Endereços de atendimento</h2>
              <ul className="flex flex-col gap-4">
                {address.map((location, index) => (
                  <li className='location bg-BlueDarkSoft p-3 w-72 rounded-lg cursor-pointer hover:scale-105 hover:bg-BlueLight transition-all' key={index}
                  onMouseEnter={() => handleMouseEnterMap(index)}
                  onMouseLeave={handleMouseLeaveMap}
                  >
                    <a href={location.url_google_maps} target='_blank'>
                      <i className={`bx bx-map ${isHoveredMap === index ? 'bx-tada' : ''}`}></i>
                      <p title={`CEP: ${location.cep}`}>Nrº {location.number} | {location.street}</p>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex justify-end gap-1 mt-5">
                <Button variant="contained" color="error" onClick={handleCloseModal}>
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}
        {isModalTelephoneOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-BlueDark p-4 rounded shadow-lg w-96 flex flex-col items-center">
              <h2 className="text-lg font-bold mb-4">Telefone(s) para contato</h2>
              <ul className="flex flex-col gap-4">
                {telephone.map((phone, index) => (
                  <li className='location bg-BlueDarkSoft p-3 w-72 rounded-lg cursor-pointer hover:scale-105 hover:bg-BlueLight transition-all' key={index}
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
              <div className="flex justify-end gap-1 mt-5">
                <Button variant="contained" color="error" onClick={handleCloseModal}>
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default InfosHeader;