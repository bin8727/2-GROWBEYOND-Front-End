import Logo from '../assets/patent.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div>
                    <div>
                        <img className="footer__logo" src={Logo} alt="logo" />

                        <div className="footer__bottom">
                            <p>
                                <a href="https://github.com/GrowthonbyStarting/2-GROWBEYOND-Front-End.git">Frontend GitHub</a>
                                <a href="https://github.com/GrowthonbyStarting/2-GROWBEYOND-Back-End.git">Backend GitHub</a>
                            </p>
                            <p><strong>Contact</strong></p>
                            <p>PM : actanonverba2525@gmail.com</p>
                            <p>Frontend : bin8727@naver.com</p>
                            <p>Backend : id_suhyun@naver.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Footer;