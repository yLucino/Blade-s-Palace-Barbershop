import React from 'react';
import { sample_subscriptionPlan } from '../../../data';

const SubscriptionPlan: React.FC = () => {
  return (
    <>
      <ul>
        {sample_subscriptionPlan.map((plan, index) => (
          <li key={index}>
            <h1>{plan.title}</h1>
            <div className='flex-container'>
              <img src={plan.imageUrl} alt={plan.title} />
              <p>{plan.description}</p>
              <nav>
                <div className="btns-container">
                  <div className="btn-price">
                    <div className="btn-full-plan">
                      <label htmlFor="btn-assinatura-full">
                        Plano Completo + Descontos
                      </label>
                      <a id='btn-assinatura-full' href="#assinatura">
                        <button>R$ {plan.priceFullPlan}</button>
                      </a>
                    </div>
                    <div className="btn-half-plan">
                      <label htmlFor="btn-assinatura-half">
                        Cabelo ou Barba + Descontos
                      </label>
                      <a className='btn-assinatura-half' href="#assinatura">
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