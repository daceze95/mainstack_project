import react from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound.jsx';
import FetchData from './api/api';
import DataProvider from './context/authContext.jsx';

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/fetch-data' element={<FetchData />} />
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
