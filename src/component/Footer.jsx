import { Link } from "react-router-dom";
import Logo from '../assets/patent.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrap'>
                <div className='footer__logo'>
                    <p><strong>상호 : </strong>특허의 신</p>
                    <Link to='/'>
                        <img src={Logo} alt='logo' />
                    </Link>
                </div>
                <span className='footer__nav'>
                    <p>
                        <a href="https://github.com/GrowthonbyStarting/2-GROWBEYOND-Front-End.git">Frontend GitHub</a>
                        <a href="https://github.com/GrowthonbyStarting/2-GROWBEYOND-Back-End.git">Backend GitHub</a>
                    </p>
                    <p><strong>Contact</strong></p>
                    <p>PM : actanonverba2525@gmail.com</p>
                    <p>Frontend : bin8727@naver.com</p>
                    <p>Backend : id_suhyun@naver.com</p>
                </span>
            </div>
        </footer>
    )
};
export default Footer;