import React, { useEffect, useState } from "react";

import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { Services } from "../../../app/shared/models/services";
import { getServicesLeft } from "../../services/forHomeWebSite/priceAndServicesPage.service";
import { toast } from "react-toastify";
import { deleteServiceLeft, postNewServiceLeft, putServiceLeftDescription, putServiceLeftImageUrl, putServiceLeftPriceInPlan, putServiceLeftPriceNoPlan, putServiceLeftTitle } from "../../services/forAdminSection/priceAndServicesLeft.service";

const PriceAndServicesLeftSection: React.FC = () => {
  const [ servicesLeft, setServicesLeft ] = useState<Services[]>([]);
  const [ selectedService, setSelectedService ] = useState<Services | null>(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isModalDeleteOpen, setIsModalDeleteOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ reRender, setReRender ] = useState(Boolean);

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
    setReRender(false);
  }, [reRender]);

  // PUT
  const putPriceAndServiceLeftTitle = async (id: number | undefined, title: string) => {
    try {
      const response = await putServiceLeftTitle(id, title); 

      if (response === 'Title updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in updated PriceAndService Title', error);
      return false
    }
  }

  const putPriceAndServiceLeftImageUrl = async (id: number | undefined, imageUrl: string) => {
    try {
      const response = await putServiceLeftImageUrl(id, imageUrl);

      if (response === 'Image URL updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in updated PriceAndService ImageUrl', error);
      return false
    }
  }

  const putPriceAndServiceLeftDescription = async (id: number | undefined, description: string) => {
    try {
      const response = await putServiceLeftDescription(id, description)
      
      if (response === 'Description updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in updated PriceAndService Description');
      return false
    }
  }

  const putPriceAndServiceLeftPriceNoPlan = async (id: number | undefined, priceNoPlan: string) => {
    try {
      const response = await putServiceLeftPriceNoPlan(id, priceNoPlan);

      if (response === 'Price No Plan updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in updated PriceAndService PriceNoPlan');
      return false
    }
  }

  const putPriceAndServiceLeftPriceInPlan = async (id: number | undefined, priceInPlan: string) => {
    try {
      const response = await putServiceLeftPriceInPlan(id, priceInPlan);

      if (response === 'Price In Plan updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in updated PriceAndService PriceInPlan', error);
      return false
    }

  }

  // POST
  const postPriceAndServiceLeftnewService = async (serviceLeft: Services) => {
    try {
      const response = await postNewServiceLeft(serviceLeft);

      if (response === 'ServiceLeft added successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in adding new Service in PriceAndService', error);
      return false      
    }
  }

  // DELETE
  const deletePriceAndServiceLeftDelete = async (id: number | undefined) => {
    try {
      const response = await deleteServiceLeft(id);

      if (response === 'ServiceLeft deleted successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in deleting service', error);
      return false      
    }
  }



  const validateFields = () => {
    if (
      !selectedService?.title ||
      !selectedService?.imageUrl ||
      !selectedService?.description ||
      !selectedService?.priceNoPlan ||
      !selectedService?.priceInPlan
    ) {
      return false;
    }
    return true;
  }

  const handleEditAddClick = (service: Services, editing: boolean) => {
    setIsEditing(editing);
    setIsModalOpen(true);
    setSelectedService(service);

    if (!editing) {
      setSelectedService({
        title: '',
        imageUrl: '',
        description: '',
        priceNoPlan: '0.00',
        priceInPlan: '0.00'
      });
    }
  }

  const handleDeleteClick = (service: Services) => {
    setIsModalDeleteOpen(true);
    setSelectedService(service);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsModalDeleteOpen(false);
    setSelectedService(null);
    setIsEditing(false);
  }

  const handleEditSave = async (id: number | undefined, newTitleValeu: string, newImageUrlValeu: string, newDescriptionValeu: string, newPriceNoPlan: string, newPriceInPlan: string) => {
    const titleStatus = await putPriceAndServiceLeftTitle(id, newTitleValeu);
    const imageUrlStatus = await putPriceAndServiceLeftImageUrl(id, newImageUrlValeu);
    const descriptionStatus = await putPriceAndServiceLeftDescription(id, newDescriptionValeu);
    const priceNoPlanStatus = await putPriceAndServiceLeftPriceNoPlan(id, newPriceNoPlan);
    const priceInPlanStatus = await putPriceAndServiceLeftPriceInPlan(id, newPriceInPlan);

    if (titleStatus && imageUrlStatus && descriptionStatus && priceNoPlanStatus && priceInPlanStatus) {
      toast.success('Serviço editado com sucesso!');
    } else {
      toast.error('Erro ao tentar editar o serviço!');
    }

    setReRender(true);
  }

  const handleAddConfirm = async (newServiceValue: Services) => {
    const newServiceStatus = await postPriceAndServiceLeftnewService(newServiceValue);

    if (newServiceStatus) {
      toast.success('Serviço adicionado ao lado Esquerdo com sucesso!');
    } else {
      toast.error('Erro ao tentar adicionar o serviço ao lado esquerdo!')
    }

    setReRender(true);
  }

  const handleDeleteConfirm = async (id: number | undefined) => {
    const deleteServiceStatus = await deletePriceAndServiceLeftDelete(id);

    if (deleteServiceStatus) {
      toast.success('Serviço excluído com sucesso!')
    } else {
      toast.error('Erro ao tentar excluir o serviço!')
    }

    setReRender(true);
  }

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
                  <IconButton aria-label='edit' onClick={() => handleEditAddClick(service, true)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label='add' onClick={() => handleEditAddClick(service, false)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton aria-label='delete' onClick={() => handleDeleteClick(service)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            ))}
            {isModalOpen && selectedService && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
                <div className="bg-white p-4 rounded shadow-lg w-96">
                  <h2 className="text-lg font-bold mb-4">Editar Serviço: {selectedService.title}</h2>
                  
                  <TextField sx={{marginBottom: '10px'}} variant='filled' label='Título' size='small' fullWidth type='text' value={selectedService.title} required onChange={(e) => setSelectedService({ ...selectedService, title: e.target.value })}/>
                  <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL Imagem' size='small' fullWidth type='text' value={selectedService.imageUrl} required onChange={(e) => setSelectedService({ ...selectedService, imageUrl: e.target.value })}/>
                  <TextField sx={{marginBottom: '10px'}} variant='filled' label='Descrição' size='small' fullWidth type='text' value={selectedService.description} required onChange={(e) => setSelectedService({ ...selectedService, description: e.target.value })}/>
                  <TextField sx={{marginBottom: '10px'}} variant='filled' label='Preço fora do plano mensal (50.25 = 50,25 | R$)' size='small' fullWidth type='text' value={selectedService.priceNoPlan} required onChange={(e) => setSelectedService({ ...selectedService, priceNoPlan: e.target.value })}/>
                  <TextField sx={{marginBottom: '10px'}} variant='filled' label='Preço dentro do plano mensal (50.25 = 50,25 | R$)' size='small' fullWidth type='text' value={selectedService.priceInPlan} required onChange={(e) => setSelectedService({ ...selectedService, priceInPlan: e.target.value })}/>

                  <div className="flex justify-end gap-1">
                    <Button variant="contained" color="error" onClick={handleCloseModal}>
                      Cancelar
                    </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={() => {
                        if (isEditing && selectedService.id) {
                          handleEditSave(
                            selectedService.id,
                            selectedService.title,
                            selectedService.imageUrl,
                            selectedService.description,
                            selectedService.priceNoPlan,
                            selectedService.priceInPlan
                          );
                          handleCloseModal();
                        } else {
                          handleAddConfirm(
                            selectedService
                          );
                          if (validateFields()) {
                            handleCloseModal();
                          } else {
                            toast.error('Por favor, preencha todos os campos obrigatórios.');
                          }
                        }
                      }}>
                      {isEditing ? 'Salvar' : 'Adicionar'}
                    </Button>
                  </div> 
                </div>
              </div>
            )}
            {isModalDeleteOpen && selectedService && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
                <div className="bg-white p-4 rounded shadow-lg w-96">
                  <h2 className="text-lg font-bold mb-4">Excluir Serviço: {selectedService.title}</h2>
    
                  <div className="flex justify-end gap-1">
                    <Button variant="contained" color="error" onClick={handleCloseModal}>
                      Cancelar
                    </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={() => {
                        handleDeleteConfirm(selectedService.id);
                        handleCloseModal();
                      }}>
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceAndServicesLeftSection;