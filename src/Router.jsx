import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feasibility from './pages/Feasibility';
import FreeConsoltation from './pages/FreeConsultation';
import CompletedConsultation from './pages/CompletedConsultation';
import DataContext from './context';

const Router = () => {
  const [data, setData] = useState('');

  return (
    <DataContext.Provider value={{data, setData}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/feasibility' element={<Feasibility />} />
        <Route path='/free-consultation' element={<FreeConsoltation />} />
        <Route path='/completed-consultation' element={<CompletedConsultation />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default Router;