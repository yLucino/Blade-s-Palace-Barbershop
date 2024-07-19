import React, { useRef, useEffect } from 'react';
import { sample_services_left } from "../../../data";

const ServicesList_Left: React.FC = () => {
  // hover to shows exclusive price for plan subscribers
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const buttonsList = container.querySelectorAll('.btn-service-price');
      buttonsList.forEach((button, index) => {
        const handleMouseEnter = () => {
          const popUp = document.querySelectorAll('.popUpLeft');
          popUp[index].classList.add('hovered')          
        }
        const handleMouseLeave = () => {
          const popUp = document.querySelectorAll('.popUpLeft');
          popUp[index].classList.remove('hovered')          
        }

        button.addEventListener('mouseenter', handleMouseEnter)
        button.addEventListener('mouseleave', handleMouseLeave)
      })
    }
  })

  return (
    <>
      <div ref={containerRef}>
        <ul>
          {sample_services_left.map((service, index) => (
            <li key={index}>
              <img src={service.imageUrl} alt={service.title} />
              <div className="text-container">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
              <nav>
                <div className="box-popUp-PriceInPlan popUpLeft">
                  <p>Preço para assinantes:</p>
                  <p>De:
                    <span className="noPlan"> R$ {service.priceNoPlan} </span>
                    | Para:
                    <span className="inPlan"> R$ {service.priceInPlan}</span>
                  </p>
                </div>
                <a href="#agendamento">
                  <button className="btn-service-price">R$ {service.priceNoPlan}</button>
                </a>
                <a href="#">
                  <button className='btn-more-options'>Ver opções</button>
                </a>
              </nav>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ServicesList_Left;