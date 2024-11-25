import React, { useEffect, useState } from "react";
import { putHourClose, putHourOpen, putStatusOpen } from "../../services/forAdminSection/openingHours.service";
import { toast } from "react-toastify";
import { OpeningHours } from "../../../app/shared/models/openingHours";
import { getOpeningHours } from "../../services/forHomeWebSite/openingHours.service";

import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


const OpeningHoursSection: React.FC = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selectedOpening, setSelectedOpening ] = useState<OpeningHours | null>(null);
  const [ reRender, setRerender ] = useState(Boolean);
  const [ openingHours, setOpeningHours ] = useState<OpeningHours[]>([]);

  useEffect(() => {
    const getAllOpeningHours = async () => {
      try {
        const response = await getOpeningHours();
        setOpeningHours(response);
      } catch (error) {
        console.error('Error in get all opening hours from backend', error);
      }
    }

    getAllOpeningHours();
    setRerender(false);
  }, [reRender]);

  const putOpeningHourStatusOpen = async (id: number, status: string) => {
    try {
      const response = await putStatusOpen(id, status);
      if (response === 'StatusOpen updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update OpeningHour status open', error);
      return false
    }
  }

  const putOpeningHourOpen = async (id: number, open: string) => {
    try {
      const response = await putHourOpen(id, open);
      if (response === 'HourOpen updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update OpeningHour hour open', error);
      return false
    }
  }

  const putOpeningHourClose = async (id: number, close: string) => {
    try {
      const response = await putHourClose(id, close);
      if (response === 'HourClose updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update OpeningHour hour close', error);
      return false
    }
  }
  
  const handleEditClick = (openingHours: OpeningHours) => {
    setSelectedOpening(openingHours);
    setIsModalOpen(true); 
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setSelectedOpening(null); 
  };

  const handleEditSave = async (id: number, newOpenHourValue: string, newCloseHourValue: string, newStatusOpenValue: string) => {
    const openHourStatus = await putOpeningHourOpen(id, newOpenHourValue);
    const closeHourStatus = await putOpeningHourClose(id, newCloseHourValue);
    const openStatus = await putOpeningHourStatusOpen(id, newStatusOpenValue);
    setIsModalOpen(false);

    if (openStatus && openHourStatus && closeHourStatus) {
      toast.success('Horário de funcionamento atualizado com sucesso!'); 
    } else {
      toast.error('Erro ao tentar atualizar o Horário de funcionamento!');
    }

    setRerender(true);
  };

  return(
    <>
      <div className="flex flex-col items-start ml-2 mb-2">
        <h4 className="font-medium mb-1">Data/Hora de funcionamento:</h4>
        <div className='flex flex-wrap gap-1'>
          {openingHours.map((day, index) => (
            <div className='flex items-center' key={index}>
              <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                <p className="text-sm">
                  <span className="text-black font-semibold">{day.name_day_week}:</span> {day.status_open === 'Fechado' ? '' : day.time_open + 'h ás'} {day.status_open === 'Fechado' ? '' : day.time_close + 'h'} {day.status_open === 'Fechado' ? '(Fechado)' : ''}
                </p>
              </div>
              <IconButton aria-label='edit' onClick={() => handleEditClick(day)}>
                <EditIcon />
              </IconButton>
            </div>
          ))}
          {isModalOpen && selectedOpening && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Editar Horário de {selectedOpening.name_day_week}</h2>
                
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Definir funcionamento (Ex.: Aberto OU Fechado)' size='small' fullWidth type='text' value={selectedOpening.status_open} required onChange={(e) => setSelectedOpening({ ...selectedOpening, status_open: e.target.value})}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Horário para abrir (Ex.: 9.0 = 09h00, 12.0 = 12h00)' size='small' fullWidth type='text' value={selectedOpening.time_open} onChange={(e) => setSelectedOpening({ ...selectedOpening, time_open: e.target.value})}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Horário para fechar (Ex.: 14.3 = 14h30, 19.52 = 19h52)' size='small' fullWidth type='text' value={selectedOpening.time_close} onChange={(e) => setSelectedOpening({ ...selectedOpening, time_close: e.target.value})}/>

                <div className="flex justify-end gap-1">
                  <Button variant="contained" color="error" onClick={handleCloseModal}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="contained" color="primary" onClick={() => {
                      handleEditSave(
                        selectedOpening.id,
                        selectedOpening.time_open,
                        selectedOpening.time_close,
                        selectedOpening.status_open
                      ),
                      handleCloseModal();
                    }}>
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OpeningHoursSection;