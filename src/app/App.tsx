import './App.css'
import 'boxicons/css/boxicons.min.css';

import Home from '../components/pages/home/home';
import PriceAndService from '../components/pages/priceAndService/priceAndService';
import Header from '../components/partials/header/header';
import Team from '../components/pages/team/team';

function App() {
  return (
    <>
     <Header />
     <Home />
     <PriceAndService />
     <Team />
    </>
  )
}

export default App
