import './App.css'
import 'boxicons/css/boxicons.min.css';

import Header from '../components/header/header.tsx'
import Home from '../components/home/home.tsx';
import PriceAndService from '../components/priceAndService/priceAndService.tsx';

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
