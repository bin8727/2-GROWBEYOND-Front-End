import Header from "./component/header/Header";
import Footer from "./component/Footer";
import Router from "./Router";
import './style/common.scss';


const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;

