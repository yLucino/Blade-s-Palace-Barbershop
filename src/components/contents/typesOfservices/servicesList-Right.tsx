import React from "react";
import { sample_servicesNoPlan_right } from "../../../data";

const ServicesList_Right: React.FC = () => {
  return (
    <>
      <ul>
        {sample_servicesNoPlan_right.map((plan, index) => (
          <li key={index}>
            <img src={plan.imageUrl} alt={plan.title} />
            <div className="text-container">
              <h1>{plan.title}</h1>
              <p>{plan.description}</p>
            </div>
            <nav>
              <a href="#agendamento">
                <button>R$ {plan.price}</button>
              </a>
              <a href="#">
                <button className='btn-more-options'>Ver opções</button>
              </a>
            </nav>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ServicesList_Right;