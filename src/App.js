import { Route, Routes } from "react-router";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import PatentKr from "./pages/PatentKr";
import PatentGb from "./pages/PatentGb";
import Feasibility from "./pages/Feasibility";
import CostGuide from "./pages/CostGuide";
import ProcessGuide from "./pages/ProcessGuide";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/feasibility' element={<Feasibility />} />
        <Route path='/patent-korea' element={<PatentKr />} />
        <Route path='/patent-global' element={<PatentGb />} />
        <Route path='/cost-guide' element={<CostGuide />} />
        <Route path='/process-guide' element={<ProcessGuide />} />
      </Routes>
    </>
  );
};

export default App;

