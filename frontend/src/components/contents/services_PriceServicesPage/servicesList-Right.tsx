import React, { useRef, useEffect, useState } from 'react';
import { getServicesRight } from '../../services/forHomeWebSite/priceAndServicesPage.service';
import { Services } from '../../../app/shared/models/services';
import { Link } from 'react-router-dom';

const ServicesList_Right: React.FC = () => {
  // hover to shows exclusive price for plan subscribers
  const containerRef = useRef<HTMLDivElement>(null);
  const [services, setServices] = useState<Services[]>([]);

  useEffect(() => {
    const getAllServicesRight = async () => {
      try {
        const response = await getServicesRight();
        setServices(response);
      } catch (error) {
        console.error('Error in get all servicesRight in backend', error);
      }
    }

    getAllServicesRight();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const buttonsList = container.querySelectorAll('.btn-service-price');
      buttonsList.forEach((button, index) => {
        const handleMouseEnter = () => {
          const popUp = document.querySelectorAll('.popUpRight');
          popUp[index].classList.add('hovered')          
        }
        const handleMouseLeave = () => {
          const popUp = document.querySelectorAll('.popUpRight');
          popUp[index].classList.remove('hovered')          
        }

        button.addEventListener('mouseenter', handleMouseEnter)
        button.addEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [services]);

  return (
    <>
      <div ref={containerRef}>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <img src={service.imageUrl} alt={service.title} />
              <div className="text-container">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
              <nav>
                <div className="box-popUp-PriceInPlan popUpRight">
                  <p>Preço para assinantes:</p>
                  <p>De:
                    <span className="noPlan"> R$ {service.priceNoPlan} </span>
                    | Para:
                    <span className="inPlan"> R$ {service.priceInPlan}</span>
                  </p>
                </div>
                <a href="#precos-e-servicos">
                  <button className="btn-service-price text-sm">R$ {service.priceNoPlan}</button>
                </a>
                <Link to={`/info-service/right/${service.title}/${service.id}`}>
                  <button className='btn-more-options'>Ver sobre</button>
                </Link>
              </nav>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ServicesList_Right;