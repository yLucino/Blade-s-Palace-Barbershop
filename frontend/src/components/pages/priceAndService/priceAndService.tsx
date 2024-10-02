import './priceAndService-style.css';
import './priceAndService-responsive.css';

import SubscriptionPlan from '../../contents/services_PriceServicesPage/subscriptionPlan';
import ServicesList_Left from '../../contents/services_PriceServicesPage/servicesList-Left';
import ServicesList_Right from '../../contents/services_PriceServicesPage/servicesList-Right';

const PriceAndService = () => {
  return (
    <>
      <div className="price-and-service" id="precos-e-servicos">
        <div className="title text-4xl">
          <h1>Preços e Serviços</h1>
        </div>
        <div className="container-cards">
          <div className="box-cards-left">
            <ServicesList_Left />
          </div>
          <div className='box-card-middle'>
            <SubscriptionPlan />
          </div>
          <div className="box-cards-right">
            <ServicesList_Right />
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceAndService