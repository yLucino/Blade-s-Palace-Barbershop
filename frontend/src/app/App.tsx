import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Index from '../components/index.tsx';
import ProtectedRoute from '../components/protectedRoute.tsx';
import HomeAdmin from '../components/pages/admin/homePage/homeAdmin.tsx';
import ManagementAdmin from '../components/pages/admin/managementPage/managementAdmin.tsx';
import CustomersAdmin from '../components/pages/admin/customersPage/customersAdmin.tsx';
import PaymentsAdmin from '../components/pages/admin/paymentsPage/paymentsAdmin.tsx';
import MonthlyResultsAdmin from '../components/pages/admin/monthlyResultsPage/monthlyResultsAdmin.tsx';
import CommandsAdmin from '../components/pages/admin/commandsPage/commandsAdmin.tsx';
import OpenCommandAdmin from '../components/pages/admin/openCommandPage/openCommandAdmin.tsx';
import CustomerSchedulingAdmin from '../components/pages/admin/customerSchedulingPage/customerSchedulingAdmin.tsx';

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
          <Route path='/admin/home' element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <HomeAdmin />
              </ProtectedRoute>
          }/>
          <Route path='/admin/management' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ManagementAdmin />
            </ProtectedRoute>
          }/>
          <Route path='/admin/customers' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CustomersAdmin />
            </ProtectedRoute>
          }/>
          <Route path='/admin/payments' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <PaymentsAdmin />
            </ProtectedRoute>
          }/>
          <Route path='/admin/monthly-results' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MonthlyResultsAdmin />
            </ProtectedRoute>
          }/>
          <Route path='/admin/commands' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CommandsAdmin />
            </ProtectedRoute>
          }/>
          <Route path='/admin/open-command' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <OpenCommandAdmin />
            </ProtectedRoute>
          }/>
          <Route path='/admin/customer-scheduling' element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CustomerSchedulingAdmin />
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
  )
}

export default App
