import React, { useEffect, useState } from "react";

import { Social } from "../../../app/shared/models/social";
import { getSocialMedia } from "../../services/forHomeWebSite/homePage.service";
import { putSocialMediaUrl } from "../../services/forAdminSection/socialMidea.service";

import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { toast } from "react-toastify";

const SocialMediaSection: React.FC = () => {
  const [ socialMedia, setSocialMedia ] = useState<Social[]>([]);
  const [ selectedSocialMedia, setSelectedSocialMedia ] = useState<Social | null>(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ reRender, setReRender ] = useState(Boolean);

  useEffect(() => {
    const getAllSocialMedia = async () => {
      try {
        const response = await getSocialMedia();
        setSocialMedia(response);
      } catch (error) {
        console.error('Error in get all social media from backend', error);
      }
    }

    getAllSocialMedia();
    setReRender(false);
  }, [reRender]);

  const putSocialUrl = async (id: number, socialMediaUrl: string) => {
    try {
      const response = await putSocialMediaUrl(id, socialMediaUrl);

      if (response === 'URL updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in put Social Midea Url');
      return false
    }
  }

  const handleEditClick = (social: Social) => {
    setIsModalOpen(true);
    setSelectedSocialMedia(social);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSocialMedia(null);
  }

  const handleEditSave = async (id: number, newUrlValeu: string) => {
    const socialMideaStatus = await putSocialUrl(id, newUrlValeu);

    if (socialMideaStatus) {
      toast.success('Rede Social atualizada com sucesso!')
    } else {
      toast.error('Erro ao tentar atualizar a Rede Social!');
    }

    setReRender(true);
  }

  return(
    <>
      <div className="flex flex-col items-start ml-2 mb-2">
        <h4 className="font-medium">Redes Sociais:</h4>
        {socialMedia.map((social, index) => (
          <div className='flex items-center gap-1 mb-1' key={index}>
            <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-lg">
              <p className="text-xs"><span className='text-black text-sm'>{social.name}: </span>{social.url}</p>
            </div>
            <IconButton aria-label='edit' onClick={() => handleEditClick(social)}>
              <EditIcon />
            </IconButton>
          </div>
        ))}
        {isModalOpen && selectedSocialMedia && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-4 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Editar Rede Social: {selectedSocialMedia.name}</h2>

              <p className="mb-2 pl-1 text-sm text-center bg-slate-200 rounded-md">Rede Social relacioanda ao estabelecimento.</p>
              <TextField sx={{marginBottom: '10px'}} variant='filled' label={`URL do ${selectedSocialMedia.name}`} size='small' fullWidth type='text' value={selectedSocialMedia.url} required onChange={(e) => setSelectedSocialMedia({ ...selectedSocialMedia, url: e.target.value })}/>

              <div className="flex justify-end gap-1">
                <Button variant="contained" color="error" onClick={handleCloseModal}>
                  Cancelar
                </Button>
                <Button type="submit" variant="contained" color="primary" onClick={() => {
                  if (selectedSocialMedia.id) {
                    handleEditSave(
                      selectedSocialMedia.id,
                      selectedSocialMedia.url,
                    );
                    handleCloseModal();
                  }
                  }}>
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SocialMediaSection;