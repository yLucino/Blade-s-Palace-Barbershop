import { getTelephone } from "../../services/forHomeWebSite/headerPage.service";
import { Telephone } from "../../../app/shared/models/telephone";

import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteTelephone, postTelephone, putNumber, putUrl } from "../../services/forAdminSection/telephone.service";

const TelephoneSection: React.FC = () => {
  const [ telephone, setTelephone ] = useState<Telephone[]>([]);
  const [ selectedTelephone, setSelectedTelephone ] = useState<Telephone | null>(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isModalDeleteOpen, setIsModalDeleteOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ reRender, setReRender ] = useState(Boolean);


  useEffect(() => {
    const getAllTelephone = async () => {
      try {
        const response = await getTelephone();
        setTelephone(response);
      } catch (error) {
        console.error('Error in get all telephone from backend', error);
      }
    }

    getAllTelephone();
    setReRender(false);
  }, [reRender]);

  // PUT
  const putTelephoneNumber = async (id: number, number: string) => {
    try {
      const response = await putNumber(id, number);
      if (response === 'Number updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update telephone number', error);
      return false      
    }
  }

  const putTelephoneUrl = async (id: number, url_api_whatsapp: string | undefined) => {
    try {
      const response = await putUrl(id, url_api_whatsapp);
      if (response === 'URL Api Whatsapp updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update telephone URL Api Whatsapp', error);
      return false
    }
  }

  // POST
  const postNewTelephone = async (telephone: Telephone) => {
    try {
      const response = await postTelephone(telephone);
      if (response === 'Telephone added successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in added new Telefone', error);
      return false
    }
  }

  // DELETE
  const deleteTelephoneTelephoneId = async (id: number | undefined) => {
    try {
      const response = await deleteTelephone(id);
      if (response === 'Telephone deleted successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in deleting address', error);
      return false
    }
  }

  const validateFields = () => {
    if (
      !selectedTelephone?.number ||
      !selectedTelephone?.url_api_whatsapp
    ) {
      return false;
    }
    return true;
  };

  const handleEditAddClick = (phone: Telephone, editing: boolean) => {
    setIsEditing(editing);
    setIsModalOpen(true);
    setSelectedTelephone(phone);

    if (!editing) {
      setSelectedTelephone({
        number: '',
        url_api_whatsapp: '',
      });
    }
  };

  const handleDeleteClick = (phone: Telephone) => {
    setIsModalDeleteOpen(true);
    setSelectedTelephone(phone);
  }

  const handleEditSave = async (id: number, newNumberValue: string, newUrlWhatsappValue: string | undefined) => {
    const numberStatus = await putTelephoneNumber(id, newNumberValue);
    const urlWhatsappStatus = await putTelephoneUrl(id, newUrlWhatsappValue);
    setIsModalOpen(false);

    if (numberStatus && urlWhatsappStatus) {
      toast.success('Telefone atualizado com sucesso!'); 
    } else {
      toast.error('Erro ao tentar atualizar o telefone!');
    }

    setReRender(true);
  }

  const handleAddConfirm = async (newTelephoneValue: Telephone) => {
    if (!validateFields()) {
      return;
    }

    const telephoneStatus = await postNewTelephone(newTelephoneValue);

    if (telephoneStatus) {
      toast.success('Telefone adicionado com sucesso!'); 
    } else {
      toast.error('Erro ao tentar adicionar o telefone!');
    }

    setReRender(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setSelectedTelephone(null); 
    setIsEditing(false);
    setIsModalDeleteOpen(false)
  };

  const handleDeleteConfirm = async (id: number | undefined) => {
    const response = await deleteTelephoneTelephoneId(id);
    setIsModalDeleteOpen(false);

    if (response) {
      toast.success('Telefone excluído com sucesso!'); 
    } else {
      toast.error('Erro ao tentar excluir o telefone!');
    }

    setReRender(true);
  }

  return(
    <>
      <div className="flex flex-col items-start ml-2 mb-2">
        <h4 className="font-medium">Telefones:</h4>
        {telephone.map((phone, index) => (
          <div className='flex flex-wrap items-center gap-1' key={index}>
            <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
              <p className="text-sm">{phone.number}</p>
            </div>
            <IconButton aria-label='edit' onClick={() => handleEditAddClick(phone, true)}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='add' onClick={() => handleEditAddClick(phone, false)}>
              <AddIcon />
            </IconButton>
            <IconButton aria-label='remove' onClick={() => handleDeleteClick(phone)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        {isModalOpen && selectedTelephone && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-4 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">{isEditing ? `Editar Telefone: ${selectedTelephone.number}` : 'Adicionar Telefone'}</h2>
              
              <TextField sx={{marginBottom: '10px'}} variant='filled' label='Telefone (xx) xxxxx-xxxx' size='small' fullWidth type='text' value={selectedTelephone.number} required onChange={(e) => setSelectedTelephone({ ...selectedTelephone, number: e.target.value })}/>
              <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL Whatsapp' size='small' fullWidth type='text' value={selectedTelephone.url_api_whatsapp} required onChange={(e) => setSelectedTelephone({ ...selectedTelephone, url_api_whatsapp: e.target.value })}/>

              <div className="flex justify-end gap-1">
                <Button variant="contained" color="error" onClick={handleCloseModal}>
                  Cancelar
                </Button>
                <Button type="submit" variant="contained" color="primary" onClick={() => {
                  if (isEditing && selectedTelephone.id) {
                    handleEditSave(
                      selectedTelephone.id,
                      selectedTelephone.number,
                      selectedTelephone.url_api_whatsapp,
                    );
                    handleCloseModal();
                  } else {
                    handleAddConfirm(
                      selectedTelephone
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
        {isModalDeleteOpen && selectedTelephone && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-4 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Excluir Telefone: {selectedTelephone.number}</h2>

              <div className="flex justify-end gap-1">
                <Button variant="contained" color="error" onClick={handleCloseModal}>
                  Cancelar
                </Button>
                <Button type="submit" variant="contained" color="primary" onClick={() => {
                    handleDeleteConfirm(selectedTelephone.id);
                    handleCloseModal();
                  }}>
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default TelephoneSection;