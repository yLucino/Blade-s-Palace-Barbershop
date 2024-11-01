import React, { useEffect, useState } from "react";

import { Button, IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { MonthlyPlans } from "../../../app/shared/models/monthlyPlans";
import { getMonthlyPlans } from "../../services/forHomeWebSite/priceAndServicesPage.service";
import { toast } from "react-toastify";
import { putMonthlyPlanFull, putMonthlyPlanHalf } from "../../services/forAdminSection/monthlyPlan.service";


const MonthlyPlanPriceSection: React.FC = () => {
  const [ monthlyPlans, setMonthlyPlans ] = useState<MonthlyPlans[]>([]);
  const [ selectedMonthlyPlan, setSelectedMonthlyPlan ] = useState<MonthlyPlans | null>(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const [ reRender, setReRender ] = useState(false);

  useEffect(() => {
    const getAllMonthlyPlans = async () => {
      try {
        const response = await getMonthlyPlans();
        setMonthlyPlans(response);
      } catch (error) {
        console.error('Error in get all monthly plans from backend', error);
      }
    }

    getAllMonthlyPlans();
    setReRender(false);
  }, [reRender])

  // PUT
  const putPlanPriceFull = async (id: number, priceFullPlan: string) => {
    try {
      const response = await putMonthlyPlanFull(id, priceFullPlan);

      if (response === 'Price Full Plan updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update Monthly Plan Price Full', error);
      return false
    }
  }

  const putPlanPriceHalf = async (id: number, priceHalfPlan: string) => {
    try {
      const response = await putMonthlyPlanHalf(id, priceHalfPlan);

      if (response === 'Price Half Plan updated successfully.') {
        return true
      }
    } catch (error) {
      console.log('Error in update Monthly Plan Price Half', error);
      return false      
    }
  }



  const handleEditClick = (plan: MonthlyPlans) => {
    setSelectedMonthlyPlan(plan);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMonthlyPlan(null);
  }

  const handleEditSave = async (id: number, newPriceFullPlanValue: string, newPriceHalfPlanValue: string) => {
    const priceFullPlanStatus = await putPlanPriceFull(id, newPriceFullPlanValue);
    const priceHalfPlanStatus = await putPlanPriceHalf(id, newPriceHalfPlanValue);

    if (priceFullPlanStatus && priceHalfPlanStatus) {
      toast.success('Preço do plano mensal editado com sucesso.');
    } else {
      toast.error('Erro ao tentar editar o preço do plano mensal.');
    }

    setReRender(true);
  }

  return(
    <>
      <div>
        <h3 className="font-medium mt-4 mb-1">Preço Plano Mensal:</h3>
        <div className='flex flex-col'>
          {monthlyPlans.map((plan, index) => (
            <div className='flex items-center text-sm gap-1' key={index}>
              <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-full'>
                <p><span className='text-black font-semibold'>Plano cabelo E barba:</span> R$ {plan.priceFullPlan}</p>
              </div>
              <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-full'>
                <p><span className='text-black font-semibold'>Plano cabelo OU barba:</span> R$ {plan.priceHalfPlan}</p>
              </div>
              <IconButton aria-label='edit' onClick={() => handleEditClick(plan)}>
                <EditIcon />
              </IconButton>
            </div>
          ))}
          {isModalOpen && selectedMonthlyPlan && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Editar Preço do Plano Mensal</h2>

                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Preço Plano Cabelo E Barba (Ex.: 50.22 = 50,22 (R$))' size='small' fullWidth type='text' value={selectedMonthlyPlan.priceFullPlan} required onChange={(e) => setSelectedMonthlyPlan({ ...selectedMonthlyPlan, priceFullPlan: e.target.value})}/>
                <TextField sx={{marginBottom: '10px'}} variant='filled' label='Preço Plano Cabelo OU Barba (Ex.: 39.99 = 39,99 (R$))' size='small' fullWidth type='text' value={selectedMonthlyPlan.priceHalfPlan} onChange={(e) => setSelectedMonthlyPlan({ ...selectedMonthlyPlan, priceHalfPlan: e.target.value})}/>

                <div className="flex justify-end gap-1">
                  <Button variant="contained" color="error" onClick={handleCloseModal}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="contained" color="primary" onClick={() => {
                      handleEditSave(
                        selectedMonthlyPlan.id,
                        selectedMonthlyPlan.priceFullPlan,
                        selectedMonthlyPlan.priceHalfPlan,
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

export default MonthlyPlanPriceSection;