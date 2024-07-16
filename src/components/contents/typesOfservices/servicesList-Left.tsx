import React from "react";
import { sample_servicesNoPlan_left } from "../../../data";

const ServicesList_Left: React.FC = () => {
  return (
    <>
      {sample_servicesNoPlan_left.map((plan, index) => (
        <ul>
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
        </ul>
      ))}
    </>
  )
}

export default ServicesList_Left;