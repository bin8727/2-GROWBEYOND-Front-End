import { Link } from "react-router-dom";
import Logo from '../assets/patent.png';


const Header = () => {
  return (
    <header className='header'>
      <div className='header_wrap'>
        <div className='header_logo'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div className='header_nav'>
          <Link to='/feasibility'>특허등록가능성검토</Link>
          <Link to='/patent-kr'>국내특허등록신청</Link>
          <Link to='/patent-gb'>해외특허등록신청</Link>
          <Link to='/costguide'>비용안내</Link>
          <Link to='/processguide'>절차안내</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;