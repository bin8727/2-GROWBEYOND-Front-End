import { Link } from "react-router-dom";
import Logo from '../assets/patent.png';
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isActived, setIsActived] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedIsActived = localStorage.getItem('isActived');
    setIsActived(storedIsActived || null);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsActived('header');
    } else if (location.pathname === '/feasibility') {
      setIsActived('feasibility');
    } else if (location.pathname === '/patent-kr') {
      setIsActived('patentKr');
    } else if (location.pathname === '/patent-gb') {
      setIsActived('patentGb');
    } else if (location.pathname === '/costguide') {
      setIsActived('costguide');
    } else if (location.pathname === '/processguide') {
      setIsActived('processguide');
    } else if (location.pathname === '/free-consultation') {
      setIsActived('');
    }
  }, [location]);

  const handleClick = (e) => {
    setIsActived(e);
    localStorage.setItem('isActived', e);
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">
          <Link
            to="/"
            className="header__logo--active"
            onClick={() => handleClick("header")}
          >
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__nav">
          <Link
            to="/feasibility"
            className={
              `header__nav-item ${isActived === "feasibility" ? "header__nav-item--active" : ""}`
            }
            onClick={() => handleClick("feasibility")}
          >
            특허등록가능성검토
          </Link>
  
          <Link
            to="/patent-kr"
            className={
              `header__nav-item ${isActived === "patentKr" ? "header__nav-item--active" : ""}`
            }
            onClick={() => handleClick("patentKr")}
          >
            국내특허등록신청
          </Link>
  
          <Link
            to="/patent-gb"
            className={
              `header__nav-item ${isActived === "patentGb" ? "header__nav-item--active" : ""}`
            }
            onClick={() => handleClick("patentGb")}
          >
            해외특허등록신청
          </Link>
  
          <Link
            to="/costguide"
            className={
              `header__nav-item ${isActived === "costguide" ? "header__nav-item--active" : ""}`
            }
            onClick={() => handleClick("costguide")}
          >
            비용안내
          </Link>
  
          <Link
            to="/processguide"
            className={
              `header__nav-item ${isActived === "processguide" ? "header__nav-item--active" : ""}`
            }
            onClick={() => handleClick("processguide")}
          >
            절차안내
          </Link>
        </div>
      </div>
    </header>
  );
  
};

export default Header;