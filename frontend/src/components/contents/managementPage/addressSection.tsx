import React, { useEffect, useState } from "react";
import { postNewAddress, putCEP, putCity, putDistrict, putNumber, putState, putStreet, putUrlMaps } from '../../services/forAdminSection/managementAddress.service';
import { toast } from 'react-toastify';
import { Address } from "../../../app/shared/models/address";
import { getAddress } from "../../services/forHomeWebSite/headerPage.service";

import { Button, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const AddressSection: React.FC = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selectedAddress, setSelectedAddress ] = useState<Address | null>(null);
  const [ reRender, setRerender ] = useState(Boolean);
  const [ address, setAddress ] = useState<Address[]>([]);
  const [ isEditing, setIsEditing ] = useState(false);

  useEffect(() => {
    const getAllAddress = async () => {
      try {
        const response = await getAddress();
        setAddress(response);
      } catch (error) {
        console.error('Error in get all address from backend', error);
      }
    }

    getAllAddress();
    setRerender(false);
  }, [reRender])

  // PUT
  const putAddressStreet = async (id: number, street: string) => {
    try {
      const response = await putStreet(id, street);
      if (response === 'Street updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update address street', error);
      return false
    }
  }

  const putAddressDistrict = async (id: number, district: string) => {
    try {
      const response = await putDistrict(id, district);
      if (response === 'District updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update address district', error);
      return false
    }
  }

  const putAddressCity = async (id: number, city: string) => {
    try {
      const response = await putCity(id, city);
      if (response === 'City updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update address city', error);
      return false
    }
  }

  const putAddressState = async (id: number, state: string) => {
    try {
      const response = await putState(id, state);
      if (response === 'State updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update address state', error);
      return false
    }
  }

  const putAddressCep = async (id: number, cep: string) => {
    try {
      const response = await putCEP(id, cep);
      if (response === 'CEP updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update address cep', error);
      return false
    }
  }

  const putAddressNumber = async (id: number, number: string) => {
    try {
      const response = await putNumber(id, number);
      if (response === 'Number updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update address number', error);
      return false
    }
  }

  const putAddressUrlMaps = async (id: number, urlmaps: string) => {
    try {
      const response = await putUrlMaps(id, urlmaps);
      if (response === 'URL Google Maps updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update address url google maps', error);
      return false
    }
  }

  // POST
  const postAddressNewAddress = async (address: Address) => {
    try {
      const response = await postNewAddress(address);
      if (response === 'Address added successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in adding address', error);
      return false
    }
  }

  const validateFields = () => {
    if (
      !selectedAddress?.street ||
      !selectedAddress?.district ||
      !selectedAddress?.city ||
      !selectedAddress?.state ||
      !selectedAddress?.cep ||
      !selectedAddress?.number ||
      !selectedAddress?.url_google_maps
    ) {
      return false;
    }
    return true;
  };

  const handleEditAddClick = (location: Address, editing: boolean) => {
    setIsEditing(editing);
    setSelectedAddress(location);
    setIsModalOpen(true); 

    if (!editing) {
      setSelectedAddress({
        street: '',
        district: '',
        city: '',
        state: '',
        cep: '',
        number: '',
        url_google_maps: ''
      });
    }
  };
  
  const handleEditSave = async (id: number, newStreetValue: string, newDistrictValue: string, newCityValue: string, newStateValue: string, newCepValue: string, newNumberValue: string, newUrlMapsValue: string) => {
    const streetStatus = await putAddressStreet(id, newStreetValue);
    const districtStatus = await putAddressDistrict(id, newDistrictValue);
    const cityStatus = await putAddressCity(id, newCityValue);
    const stateStatus = await putAddressState(id, newStateValue);
    const cepStatus = await putAddressCep(id, newCepValue);
    const numberStatus = await putAddressNumber(id, newNumberValue);
    const urlMapsStatus = await putAddressUrlMaps(id, newUrlMapsValue);
    setIsModalOpen(false);

    if (streetStatus && districtStatus && cityStatus && stateStatus && cepStatus && numberStatus && urlMapsStatus) {
      toast.success('Endereço atualizado com sucesso!'); 
    } else {
      toast.error('Erro ao tentar atualizar o endereço!');
    }

    setRerender(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
    setSelectedAddress(null); 
    setIsEditing(false);
  };

  const handleAddConfirm = async (newAddressValue: Address) => {
    if (!validateFields()) {
      return;
    }

    const addressStatus = await postAddressNewAddress(newAddressValue);
    setIsModalOpen(false);

    if (addressStatus) {
      toast.success('Endereço adicionado com sucesso!'); 
    } else {
      toast.error('Erro ao tentar adicionar o endereço!');
    }

    setRerender(true);
  }

  return(
    <>
      <div className="flex flex-col items-start ml-2 mb-2">
        <h4 className="font-medium">Endereços:</h4>
          {address.map((location, index) => (
            <div className='flex flex-wrap items-center gap-1' key={index}>
              <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                <p className="text-sm">
                  {location.street}|
                  Nrº: {location.number}| 
                  CEP: {location.cep}
                </p>
              </div>
              <IconButton aria-label='edit' onClick={() => handleEditAddClick(location, true)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label='add' onClick={() => handleEditAddClick(location, false)}>
                <AddIcon />
              </IconButton>
              <IconButton aria-label='remove' >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
          {isModalOpen && selectedAddress && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">{isEditing ? `Editar Endereço: ${selectedAddress.street}` : 'Adicionar Endereço'}</h2>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Rua' size='small' fullWidth type='text' value={selectedAddress.street} required onChange={(e) => setSelectedAddress({ ...selectedAddress, street: e.target.value })}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Bairro' size='small' fullWidth type='text' value={selectedAddress.district} required onChange={(e) => setSelectedAddress({ ...selectedAddress, district: e.target.value })}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Cidade' size='small' fullWidth type='text' value={selectedAddress.city} required onChange={(e) => setSelectedAddress({ ...selectedAddress, city: e.target.value })}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Estado' size='small' fullWidth type='text' value={selectedAddress.state} required onChange={(e) => setSelectedAddress({ ...selectedAddress, state: e.target.value })}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='CEP' size='small' fullWidth type='text' value={selectedAddress.cep} required onChange={(e) => setSelectedAddress({ ...selectedAddress, cep: e.target.value })}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Número' size='small' fullWidth type='text' value={selectedAddress.number} required onChange={(e) => setSelectedAddress({ ...selectedAddress, number: e.target.value })}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL Google Maps' title={selectedAddress.url_google_maps} size='small' fullWidth type='text' value={selectedAddress.url_google_maps} required onChange={(e) => setSelectedAddress({ ...selectedAddress, url_google_maps: e.target.value })}/>

                <div className="flex justify-end gap-1">
                  <Button variant="contained" color="error" onClick={handleCloseModal}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="contained" color="primary" onClick={() => {
                      if (isEditing && selectedAddress.id) {
                        handleEditSave(
                          selectedAddress.id,
                          selectedAddress.street,
                          selectedAddress.district,
                          selectedAddress.city,
                          selectedAddress.state,
                          selectedAddress.cep,
                          selectedAddress.number,
                          selectedAddress.url_google_maps
                        );
                        handleCloseModal();
                      } else {
                        handleAddConfirm(
                          selectedAddress
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
      </div>
    </>
  )
}

export default AddressSection;