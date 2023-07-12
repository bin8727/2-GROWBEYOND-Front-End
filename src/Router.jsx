import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feasibility from './pages/Feasibility';
import PatentKr from './pages/PatentKr';
import PatentGb from './pages/PatentGb';
import CostGuide from './pages/CostGuide';
import ProcessGuide from './pages/ProcessGuide';
import FreeConsoltation from './pages/FreeConsultation';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/feasibility' element={<Feasibility />} />
      <Route path='/patent-korea' element={<PatentKr />} />
      <Route path='/patent-global' element={<PatentGb />} />
      <Route path='/cost-guide' element={<CostGuide />} />
      <Route path='/process-guide' element={<ProcessGuide />} />
      <Route path='/free-consultation' element={<FreeConsoltation />} />
    </Routes>
  );
};

export default Router;