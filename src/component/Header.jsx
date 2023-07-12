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
    <header className='header'>
      <div className='header_wrap'>
        <div className='header_logo'>
          <Link 
            to='/'
            className={isActived === 'header' ? 'active' : ''}
            onClick={() => handleClick('header')}
          >
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div className='header_nav'>
          <Link 
            to='/feasibility'
            className={isActived === 'feasibility' ? 'active' : ''}
            onClick={() => handleClick('feasibility')}
          >
            특허등록가능성검토
          </Link>

          <Link 
            to='/patent-kr'
            className={isActived === 'patentKr' ? 'active' : ''}
            onClick={() => handleClick('patentKr')}
          >
            국내특허등록신청
          </Link>

          <Link 
            to='/patent-gb'
            className={isActived === 'patentGb' ? 'active' : ''}
            onClick={() => handleClick('patentGb')}
          >
            해외특허등록신청
          </Link>

          <Link 
            to='/costguide'
            className={isActived === 'costguide' ? 'active' : ''}
            onClick={() => handleClick('costguide')}
          >
            비용안내
          </Link>

          <Link 
            to='/processguide'
            className={isActived === 'processguide' ? 'active' : ''}
            onClick={() => handleClick('processguide')}
          >
            절차안내
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;