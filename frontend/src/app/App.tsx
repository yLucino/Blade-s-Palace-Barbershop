import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from '../components/pages/admin/admin';
import Index from '../components/index.tsx';
import ProtectedRoute from '../components/protectedRoute.tsx';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = (token: string) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Index onLoginSuccess={handleLoginSuccess} />}/>
          <Route path='/admin' element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
  )
}

export default App
