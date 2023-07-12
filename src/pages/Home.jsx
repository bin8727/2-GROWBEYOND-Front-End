import Background from '../assets/13.png';
import Character from '../assets/14.png';

const Home = () => {
  const handleClick = () => {
    window.location.href = '/free-consultation';
  };

  return (
    <div>
      <div className='home'>
        <div className='home_container'>
          <div className="home_wrap">
            <div className='home_left'>
              <h2 className="home_leftTitle">
                특허의 모든 것,
                <br></br>
                특허의 신과 쉽고 정확하게
              </h2>

              <p className="home_leftDesc">
                특허출원이 어려워서 포기하셨나요?
                <br></br>
                특허의 신에서 언제 어디서나 내가 원할 때
                <br></br>
                간편하게 진행해보세요!
              </p>

              <div className='home_btnWrap'>
                <button className="home_btn" onClick={handleClick}>무료 특허 상담</button>
              </div>
            </div>

            <div className='home_right'>
              <div className="home_rightContainer">
                <div className="home_rightWrap">
                  <span>
                    <span></span>
                    <img src={Background} alt="" />
                  </span>
                </div>
                <div className="home_rightImg">
                  <span>
                    <span></span>
                    <img src={Character} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;