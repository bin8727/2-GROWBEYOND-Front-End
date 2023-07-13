import Nav from "./Nav";
import Logo from "./Logo";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";



const Header = () => {
  const [isActived, setIsActived] = useState(null);
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 1024;
      setIsHamburgerOpened(isSmallScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <Logo />

        <Nav 
          isHamburgerOpened={isHamburgerOpened}
          isActived={isActived}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
  
};

export default Header;