import { useEffect, useState } from "react";
import { SummaryDay } from "../../../app/shared/models/summaryDay";
import { getSummaryDay } from "../../services/forHomeWebSite/summaryDay.service";

import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { putSummary } from "../../services/forAdminSection/summary.service";
import { toast } from "react-toastify";


const SummaryDayServiceSection = () => {
  const [ summary, setSummary ] = useState<SummaryDay>();

  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ reRender, setReRender ] = useState(Boolean);

  useEffect(() => {
    const getSummary = async () => {
      try {
        const response = await getSummaryDay();
        setSummary(response[0]);
      } catch (error) {
        console.log('Error in get summary from backend:', error);
      }
    }

    getSummary();
    setReRender(false);
  }, [reRender]);

  const putSummaryDay = async (summary: SummaryDay) => {
    try {
      const response = await putSummary(summary)

      if (response === 'Summary Service updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in put summary in backend:', error);
      return false
    }
  }

  const handleEditClick = () => {
    setIsModalOpen(true);
  }

  const handleEditConfirm = async (summary: SummaryDay) => {
    const editSummaryStatus = await putSummaryDay(summary);

    if (editSummaryStatus) {
      toast.success("Descrição atualizada com sucesso!")
    } else {
      toast.error("Erro ao tentar atualizar a descrição!")
    }

    setReRender(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return(
    <>
      <div className="flex flex-col items-start ml-2 mb-2">
        <h4 className="font-medium mb-1">Dias de atendimento descrição (cabeçalho):</h4>
        <div className='flex flex-wrap gap-1'>
          <div className="flex items-center">
            <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
              <p className="text-sm"><span className="text-black font-semibold">Descrição: </span>{summary?.summary}</p>
            </div>
            <IconButton aria-label='edit' onClick={() => handleEditClick()}>
              <EditIcon />
            </IconButton>
          </div>
        </div>
        {isModalOpen && summary && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
            <div className="bg-white p-4 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Editar descrição do cabeçalho</h2>

              <p className="mb-2 pl-1 text-sm text-center bg-slate-200 rounded-md">Descrição relacioanda aos dias de funcionamento estabelecimento (cabeçalho).</p>
              <TextField sx={{marginBottom: '10px'}} variant='filled' label='Descrição Ex.: Seg a Sáb | Seg a Sex' size='small' fullWidth type='text' value={summary.summary} required onChange={(e) => setSummary({ ...summary, summary: e.target.value })}/>

              <div className="flex justify-end gap-1">
                <Button variant="contained" color="error" onClick={handleCloseModal}>
                  Cancelar
                </Button>
                <Button type="submit" variant="contained" color="primary" onClick={() => {
                  if (summary.id) {
                    handleEditConfirm(
                      summary,
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

export default SummaryDayServiceSection;