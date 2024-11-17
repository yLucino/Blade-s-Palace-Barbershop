import React, { useEffect, useState } from 'react';
import { getMonthlyPlans } from '../../services/forHomeWebSite/priceAndServicesPage.service';
import { MonthlyPlans } from '../../../app/shared/models/monthlyPlans';

const SubscriptionPlan: React.FC = () => {
  const [monthlyPlans, setMonthlyPlans] = useState<MonthlyPlans[]>([]);

  useEffect(() => {
    const getAllMonthlyPlans = async () => {
      try {
        const response = await getMonthlyPlans();
        setMonthlyPlans(response); 
      } catch (error) {
        console.error('Error in get all monthly plans in backend', error);
      }
    }

    getAllMonthlyPlans();
  }, []);

  return (
    <>
      <ul>
        {monthlyPlans.map((plan, index) => (
          <li key={index}>
            <h1>{plan.title}</h1>
            <div className='flex-container'>
              <img className='inline bg-white' src={plan.imageUrl} alt={plan.title} />
              <p>{plan.description}</p>
              <nav>
                <div className="btns-container">
                  <div className="btn-price">
                    <div className="btn-full-plan">
                      <label htmlFor="btn-assinatura-full">
                        Plano Completo + Descontos
                      </label>
                      <a className='btn-assinatura-full text-sm' href="#assinatura">
                        <button>R$ {plan.priceFullPlan}</button>
                      </a>
                    </div>
                    <div className="btn-half-plan">
                      <label htmlFor="btn-assinatura-half">
                        Cabelo ou Barba + Descontos
                      </label>
                      <a className='btn-assinatura-half text-sm' href="#assinatura">
                        <button>R$ {plan.priceHalfPlan}</button>
                      </a>
                    </div>
                  </div>
                  <a className='more-option' href="#">
                    <button className='btn-more-options'>Saiba mais</button>
                  </a>
                </div>
              </nav>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SubscriptionPlan;