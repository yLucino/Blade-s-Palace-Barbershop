import './App.css'
import 'boxicons/css/boxicons.min.css';

import Home from '../components/pages/home/home';
import PriceAndService from '../components/pages/priceAndService/priceAndService';
import Header from '../components/partials/header/header';

function App() {
  return (
    <>
     <Header />
     <Home />
     <PriceAndService />
    </>
  )
}

export default App
