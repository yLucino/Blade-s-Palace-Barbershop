import './App.css'
import 'boxicons/css/boxicons.min.css';

import Header from '../components/partials/header/header';
import Home from '../components/pages/home/home';
import PriceAndService from '../components/pages/priceAndService/priceAndService';
import Team from '../components/pages/team/team';
import Scheduling from '../components/pages/scheduling/scheduling';
import Contact from '../components/pages/contact/contact';

function App() {
  return (
    <>
     <Header />
     <Home />
     <PriceAndService />
     <Team />
     <Scheduling />
     <Contact />
    </>
  )
}

export default App
