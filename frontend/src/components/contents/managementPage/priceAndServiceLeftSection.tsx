import React, { useEffect, useState } from "react";

import { Button, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { Services } from "../../../app/shared/models/services";
import { getServicesLeft } from "../../services/forHomeWebSite/priceAndServicesPage.service";

const PriceAndServicesLeftSection: React.FC = () => {
  const [ servicesLeft, setServicesLeft ] = useState<Services[]>([]);

  useEffect(() => {
    const getAllServicesLeft = async () => {
      try {
        const response = await getServicesLeft();
        setServicesLeft(response);
      } catch (error) {
        console.error('Error in get all servicesLeft from backend', error);
      }
    }

    getAllServicesLeft();
  }, []);

  return(
    <>
      <div>
        <div>
          <h4 className="font-medium mb-1">Serviços da Esquerda:</h4>
          <div className='overflow-y-scroll overflow-x-hidden 2xl:max-h-80 max-h-40 mr-2'>
            {servicesLeft.map((service, index) => (
              <div className='flex mb-2' key={index}>
                <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-lg text-sm'>
                  <h4 className='mb-1'><span className='text-black font-semibold'>Titúlo:</span> {service.title}</h4>
                  <p className='mb-1'><span className='text-black font-semibold'>Imagem URL:</span> {service.imageUrl}</p>
                  <p className='mb-1'><span className='text-black font-semibold'>Descrição:</span> {service.description}</p>
                  <p className='mb-1'><span className='text-black font-semibold'>Preço com plano:</span> R$ {service.priceInPlan}</p>
                  <p><span className='text-black font-semibold'>Preço sem plano:</span> R$ {service.priceNoPlan}</p>
                </div>
                <div className='flex flex-col justify-evenly'>
                  <IconButton aria-label='edit'>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label='edit'>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mb-4 mt-2'>
          <Button variant='outlined'>
            Adicionar novo serviço
            <AddIcon />
          </Button>
        </div>
      </div>
    </>
  )
}

export default PriceAndServicesLeftSection;