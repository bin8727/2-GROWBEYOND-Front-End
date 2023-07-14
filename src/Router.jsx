import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feasibility from './pages/Feasibility';
import PatentKr from './pages/PatentKr';
import PatentGb from './pages/PatentGb';
import CostGuide from './pages/CostGuide';
import ProcessGuide from './pages/ProcessGuide';
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
        {/* <Route path='/patent-korea' element={<PatentKr />} />
        <Route path='/patent-global' element={<PatentGb />} />
        <Route path='/cost-guide' element={<CostGuide />} />
        <Route path='/process-guide' element={<ProcessGuide />} /> */}
        <Route path='/free-consultation' element={<FreeConsoltation />} />
        <Route path='/completed-consultation' element={<CompletedConsultation />} />
      </Routes>
    </DataContext.Provider>
  );
};

export default Router;