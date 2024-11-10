import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { EmployeeTeam } from '../../../app/shared/models/employeeTeam';
import { getTeam } from '../../services/forHomeWebSite/teamPage.service';
import { Button, IconButton, TextField } from '@mui/material';
import { deleteTeam, postTeam, putTeam } from '../../services/forAdminSection/team.service';
import { toast } from 'react-toastify';

const TeamSection = () => {
  const [ team, setTeam ] = useState<EmployeeTeam[]>([]);
  const [ isModalEditAddOpen, setIsModalEditAddOpen ] = useState(false);
  const [ isModalDeleteOpen, setIsModalDeleteOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(Boolean);

  const [ selectedBarber, setSelectedBarber ] = useState<EmployeeTeam | null>(null);

  const [ reRender, setReRender ] = useState(Boolean);

  useEffect(() => {
    const getAllTeam = async () => {
      try {
        const response = await getTeam();
        setTeam(response);
      } catch (error) {
        console.error('Error in get all team from backend', error);
      }
    }

    getAllTeam();
    setReRender(false);
  }, [reRender]);

  const putBarber = async (imageUrl: string, name: string, jobRole: string, whatsappUrl: string, instagramUrl: string, facebookUrl: string, description: string, businessAddress: string, barberId: number | undefined) => {
    try {
      const response = await putTeam(imageUrl, name, jobRole, whatsappUrl, instagramUrl, facebookUrl, description, businessAddress, barberId);

      if (response === 'Barber updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in put barber', error);
      return false
    }
  }

  const postBarber = async (barber: EmployeeTeam) => {
    try {
      const response = await postTeam(barber);

      if (response === 'Barber added successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in adding barber', error);
      return false
    }
  }

  const deleteBarber = async (barberId: number | undefined) => {
    try {
      const response = await deleteTeam(barberId);

      if (response === 'Barber deleted successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in delete barber', error);
      return false
    }
  }

  const validateFields = () => {
    if (
      !selectedBarber?.imageUrl ||
      !selectedBarber?.name ||
      !selectedBarber?.instagramUrl ||
      !selectedBarber?.facebookUrl ||
      !selectedBarber?.whatsappUrl ||
      !selectedBarber?.jobRole ||
      !selectedBarber?.description ||
      !selectedBarber?.businessAddress
    ) {
      return false;
    }
    return true;
  }

  const handleEditAddClick = (barber: EmployeeTeam, editing: boolean) => {
    setIsModalEditAddOpen(true);
    setIsEditing(editing);
    setSelectedBarber(barber);

    if (!editing) {
      setSelectedBarber({
        imageUrl: '',
        name: '',
        jobRole: '', 
        whatsappUrl: '',
        instagramUrl: '',
        facebookUrl: '',
        description: '',
        businessAddress: ''
      });
    }
  }

  const handleDeleteClick = (barber: EmployeeTeam) => {
    setIsModalDeleteOpen(true);
    setSelectedBarber(barber)
  }
  
  const handleCloseModal = () => {
    setIsModalEditAddOpen(false);
    setIsModalDeleteOpen(false);
    setSelectedBarber(null)
    setIsEditing(false);
  }

  const handleEditSave = async (imageUrl: string, name: string, jobRole: string, whatsappUrl: string, instagramUrl: string, facebookUrl: string, description: string, businessAddress: string, barberId: number | undefined) => {
    const editBarberStatus = await putBarber(imageUrl, name, jobRole, whatsappUrl, instagramUrl, facebookUrl, description, businessAddress, barberId);

    if (editBarberStatus) {
      toast.success("Barbeiro editado com sucesso!")
    } else {
      toast.error("Erro ao tentar editar o barbeiro!")
    }

    setReRender(true);
  }

  const handleAddConfirm = async (barber: EmployeeTeam) => {
    const addBarberStatus = await postBarber(barber);

    if (addBarberStatus) {
      toast.success("Barbeiro adicionado com sucesso!");
    } else {
      toast.error("Erro ao tentar adicionar o barbeiro!")
    }

    setReRender(true);
  }

  const handleDeleteConfirm = async (barberId: number | undefined) => {
    const deleteBarberStatus = await deleteBarber(barberId);

    if (deleteBarberStatus) {
      toast.success('Barbeiro excluído com sucesso!');
    } else {
      toast.error('Erro ao tentar excluir barbeiro!')
    }

    setReRender(true);
  }

  return(
    <>
      <div>
        <h4 className="font-medium mb-1">Barbeiros:</h4>
        <div className='overflow-y-scroll overflow-x-hidden h-450'>
          {team.map((barber, index) => (
            <div className='flex' key={index}>
              <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-lg text-sm mb-2'>
                <p><span className='text-black font-semibold'>Nome: </span>{barber.name}</p>
                <p><span className='text-black font-semibold'>Imagem URL: </span>{barber.imageUrl}</p>
                <p><span className='text-black font-semibold'>Cargo: </span>{barber.jobRole}</p>
                <p><span className='text-black font-semibold'>Endereço de Atuação:</span>{barber.businessAddress}</p>
                <p className='text-xs'><span className='text-black font-semibold text-sm'>Instagram: </span>{barber.instagramUrl}</p>
                <p className='text-xs'><span className='text-black font-semibold text-sm'>Facebook: </span>{barber.facebookUrl}</p>
                <p className='text-xs'><span className='text-black font-semibold text-sm'>WhatsApp: </span>{barber.whatsappUrl}</p>
                <p><span className='text-black font-semibold'>Descrição: </span>{barber.description}</p>
              </div>
              <div className='flex flex-col justify-evenly'>
                <IconButton aria-label='edit' onClick={() => handleEditAddClick(barber, true)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label='add' onClick={() => handleEditAddClick(barber, false)}>
                  <AddIcon />
                </IconButton>
                <IconButton aria-label='edit' onClick={() => handleDeleteClick(barber)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))}
          {isModalEditAddOpen && selectedBarber && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">
                  {isEditing ? `Editar informações de: ${selectedBarber.name}` : 'Adicionar novo Barbeiro'}
                </h2>
                
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Nome' size='small' fullWidth type='text' value={selectedBarber.name} required onChange={(e) => setSelectedBarber({ ...selectedBarber, name: e.target.value })}/>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL Imagem de Perfil' size='small' fullWidth type='text' value={selectedBarber.imageUrl} required onChange={(e) => setSelectedBarber({ ...selectedBarber, imageUrl: e.target.value })}/>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Cargo' size='small' fullWidth type='text' value={selectedBarber.jobRole} required onChange={(e) => setSelectedBarber({ ...selectedBarber, jobRole: e.target.value })}/>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Descrição' size='small' fullWidth type='text' value={selectedBarber.description} required onChange={(e) => setSelectedBarber({ ...selectedBarber, description: e.target.value })}/>
                  
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Endereço de Trabalho' size='small' fullWidth type='text' value={selectedBarber.businessAddress} required onChange={(e) => setSelectedBarber({ ...selectedBarber, businessAddress: e.target.value })}/>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL do Instagram' size='small' fullWidth type='text' value={selectedBarber.instagramUrl} required onChange={(e) => setSelectedBarber({ ...selectedBarber, instagramUrl: e.target.value })}/>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL do Facebook' size='small' fullWidth type='text' value={selectedBarber.facebookUrl} required onChange={(e) => setSelectedBarber({ ...selectedBarber, facebookUrl: e.target.value })}/>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL do Whatsapp' size='small' fullWidth type='text' value={selectedBarber.whatsappUrl} required onChange={(e) => setSelectedBarber({ ...selectedBarber, whatsappUrl: e.target.value })}/>

                <div className="flex justify-end gap-1">
                  <Button variant="contained" color="error" onClick={handleCloseModal}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="contained" color="primary" onClick={() => {
                      if (isEditing && selectedBarber.id) {
                        handleEditSave(
                          selectedBarber.imageUrl,
                          selectedBarber.name,
                          selectedBarber.jobRole,
                          selectedBarber.whatsappUrl,
                          selectedBarber.instagramUrl,
                          selectedBarber.facebookUrl,
                          selectedBarber.description,
                          selectedBarber.businessAddress,
                          selectedBarber.id
                        );
                        handleCloseModal();
                      } else {
                        handleAddConfirm(
                          selectedBarber
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
          {isModalDeleteOpen && selectedBarber && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Excluir Barbeiro: {selectedBarber.name}</h2>
  
                <div className="flex justify-end gap-1">
                  <Button variant="contained" color="error" onClick={handleCloseModal}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="contained" color="primary" onClick={() => {
                      handleDeleteConfirm(selectedBarber.id);
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
    </>
  )
}

export default TeamSection;