import LogoIcon from '../../assets/patent.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="header__logo">
      <Link
        to="/"
        className="header__logo"
      >
        <img src={LogoIcon} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;