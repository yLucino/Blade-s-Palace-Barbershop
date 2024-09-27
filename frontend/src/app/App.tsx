import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../components/pages/home/home';
import PriceAndService from '../components/pages/priceAndService/priceAndService';
import Team from '../components/pages/team/team';
import Scheduling from '../components/pages/scheduling/scheduling';
import Contact from '../components/pages/contact/contact';
import Admin from '../components/pages/admin/admin';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/price-and-services' element={<PriceAndService />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/scheduling' element={<Scheduling />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/admin/:userCode' element={<Admin />}/>
          {/* userCode is genereted after click in 'Entrar' and returned sucessfully */}
        </Routes>
      </Router>
  )
}

export default App
