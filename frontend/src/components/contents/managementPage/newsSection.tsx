import { useEffect, useState } from "react";
import { NewsModel } from "../../../app/shared/models/news";
import { getNews } from "../../services/forHomeWebSite/newsPage.service";

import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteNews, postNews, putNews } from "../../services/forAdminSection/news.service";
import { toast } from "react-toastify";

const NewsSection = () => {
  const [ allNews, setAllNews ] = useState<NewsModel[]>([]);

  const [ reRender, setReRender ] = useState(false);
  const [ selectedNews, setSelectedNews ] = useState<NewsModel | null>(null);
  const [ isModalAddOpen, setIsModalAddOpen ] = useState(false);
  const [ isModalEditOpen, setIsModalEditOpen ] = useState(false);
  const [ isModalDeleteOpen, setIsModalDeleteOpen ] = useState(false);

  useEffect(() => {
    const getAllNews = async () => {
      try {
        const response = await getNews();
        setAllNews(response);
      } catch (error) {
        console.log('Error in get all news from backend', error);
      }
    }

    getAllNews();
    setReRender(false);
  }, [reRender])

  const editNews = async (news: NewsModel) => {
    try {
      const response = await putNews(news);

      if (response === 'News updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in updating news from backend:', error);
      return false
    }
  }
  
  const addNews = async (news: NewsModel) => {
    try {
      const response = await postNews(news);

      if (response === 'News added successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in adding news from backend:', error);
      return false
    }
  }

  const removeNews = async (newsId: number | undefined) => {
    try {
      const response = await deleteNews(newsId);

      if (response === 'News deleted successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in deleting news from backend:', error);
      return false
    }
  }

  const handleAddClick = () => {
    setIsModalAddOpen(true);
    setSelectedNews({
      title: '',
      subTitle: '',
      description: '',
      imageUrl: ''
    })
  }
 
  const handleEditClick = (news: NewsModel) => {
    setIsModalEditOpen(true);
    setSelectedNews(news);
  }
 
  const handleDeleteClick = (news: NewsModel) => {
    setIsModalDeleteOpen(true);
    setSelectedNews(news);
  }

  const handleCloseModal = () => {
    setIsModalAddOpen(false);
    setIsModalEditOpen(false);
    setIsModalDeleteOpen(false);
    setSelectedNews(null);
  }

  const handleAddConfirm = async (news: NewsModel) => {
    const addNewsStatus = await addNews(news);

    if (addNewsStatus) {
      toast.success("Novidade/Aviso adicionado com sucesso!")
    } else {
      toast.error("Erro ao tentar adicionar a novidade/aviso!")
    }

    setReRender(true);
    handleCloseModal();
  }

  const handleEditConfirm = async (news: NewsModel) => {
    const editNewsStatus = await editNews(news);

    if (editNewsStatus) {
      toast.success("Novidade/Aviso editado com sucesso!")
    } else {
      toast.error("Erro ao tentar editar a novidade/aviso!")
    }

    setReRender(true);
    handleCloseModal();
  }
  
  const handleDeleteConfirm = async (newsId: number | undefined) => {
    const deleteNewsStatus = await removeNews(newsId);

    if (deleteNewsStatus) {
      toast.success("Novidade/Aviso excluído com sucesso!")
    } else {
      toast.error("Erro ao tentar excluir a novidade/aviso!")
    }

    setReRender(true);
    handleCloseModal();
  }

  return(
    <>
      <div className='flex flex-wrap gap-5 h-450 overflow-y-scroll'>
        {allNews.map((news, index) => (
          <div className='flex self-start' key={index}>
            <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-xl">
              <img className="w-40 rounded-lg mt-1" src={news.imageUrl} alt={news.subTitle} />
              <hr className="mt-2 mb-2 border-black"/>
              <p className="text-sm"><span className="text-black font-semibold">Título:</span> {news.title}</p>
              <p className="text-sm"><span className="text-black font-semibold">Subtítulo:</span> {news.subTitle}</p>
              <p className="text-sm"><span className="text-black font-semibold">ID:</span> {news.id}</p>
            </div>
            <div className="flex flex-col h-full justify-evenly">
              <IconButton aria-label='edit' onClick={() => handleEditClick(news)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label='delete' onClick={() => handleDeleteClick(news)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 m-auto w-1/3">
        <Button variant="outlined" size="small" fullWidth onClick={() => handleAddClick()}>
          Adicionar
        </Button>
      </div>
      {isModalAddOpen && selectedNews && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Adicionar Novidade/Aviso</h2>

            <TextField sx={{marginBottom: '10px'}} variant='filled' label='Título' size='small' fullWidth type='text' value={selectedNews.title} required onChange={(e) => setSelectedNews({ ...selectedNews, title: e.target.value })}/>
            <TextField sx={{marginBottom: '10px'}} variant='filled' label='SubTítulo' size='small' fullWidth type='text' value={selectedNews.subTitle} required onChange={(e) => setSelectedNews({ ...selectedNews, subTitle: e.target.value })}/>
            <TextField sx={{marginBottom: '10px'}} variant='filled' label='Descrição' size='small' fullWidth type='text' value={selectedNews.description} required onChange={(e) => setSelectedNews({ ...selectedNews, description: e.target.value })}/>
            <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL Imagem' size='small' fullWidth type='text' value={selectedNews.imageUrl} required onChange={(e) => setSelectedNews({ ...selectedNews, imageUrl: e.target.value })}/>

            <div className="flex justify-end gap-1">
              <Button variant="contained" color="error" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary" onClick={() => handleAddConfirm(selectedNews)}>
                Adicionar
              </Button>
            </div>
          </div>
        </div>
      )}
      {isModalEditOpen && selectedNews && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Editar Novidade/Aviso: {selectedNews.subTitle} | ID: {selectedNews.id}</h2>

            <TextField sx={{marginBottom: '10px'}} variant='filled' label='Título' size='small' fullWidth type='text' value={selectedNews.title} required onChange={(e) => setSelectedNews({ ...selectedNews, title: e.target.value })}/>
            <TextField sx={{marginBottom: '10px'}} variant='filled' label='SubTítulo' size='small' fullWidth type='text' value={selectedNews.subTitle} required onChange={(e) => setSelectedNews({ ...selectedNews, subTitle: e.target.value })}/>
            <TextField sx={{marginBottom: '10px'}} variant='filled' label='Descrição' size='small' fullWidth type='text' value={selectedNews.description} required onChange={(e) => setSelectedNews({ ...selectedNews, description: e.target.value })}/>
            <TextField sx={{marginBottom: '10px'}} variant='filled' label='URL Imagem' size='small' fullWidth type='text' value={selectedNews.imageUrl} required onChange={(e) => setSelectedNews({ ...selectedNews, imageUrl: e.target.value })}/>


            <div className="flex justify-end gap-1">
              <Button variant="contained" color="error" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary" onClick={() => handleEditConfirm(selectedNews)}>
                Salvar
              </Button>
            </div>
          </div>
        </div>
      )}
      {isModalDeleteOpen && selectedNews && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Excluir Novidade/Aviso: </h2>
            <div className="bg-gray-300 rounded-md p-3 mb-5">
              <p><span className="font-semibold text-black">Título :</span> {selectedNews.title}</p>
              <p><span className="font-semibold text-black">SubTítulo :</span> {selectedNews.subTitle}</p>
              <p><span className="font-semibold text-black">ID :</span> {selectedNews.id}</p>
            </div>

            <div className="flex justify-end gap-1">
              <Button variant="contained" color="error" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary" onClick={() => handleDeleteConfirm(selectedNews.id)}>
                Excluir
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsSection;