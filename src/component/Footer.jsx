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
                                <a href="https://github.com/bin8727/2-GROWBEYOND-Front-End.git">Frontend GitHub</a>
                                <a href="https://github.com/GrowthonbyStarting/2-GROWBEYOND-Back-End.git">Backend GitHub</a>
                            </p>
                            <p style={{padding: '0.625rem 0rem 0.625rem 0rem'}}>
                                본 사이트는 스타팅이 주관하는 그로스톤 프로젝트 참가를 위한
                                <br></br>
                                개선 및 제안 프로젝트를 목적으로 만들어졌으며, 사용된 저작물은 저작권자의 동의 하에 활용되었습니다.
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
