import Earth from '../assets/15.png';
import Arrow from '../assets/arrow.svg';

const FreeConsoltation = () => {
  return (
    <div className="freeconsultation">
      <div className="freeconsultation_container">
        <div className='freeconsultation_topContent'>
          <p className="freeconsultation_topTitle">
            특허의 신 무료 상담소
          </p>
          <h2 className='freeconsultation_topDesc'>
            무료 상담도
            <br></br>
            특허의 신과 함께
          </h2>
          <div className="freeconsultation_imgContainer">
            <span>
              <span></span>
              <img src={Earth} alt="" />
            </span>
          </div>
        </div>

        <div className='freeconsultation_middleWrap'>
          <h2 className='freeconsultation_middleDesc'>
            특허 출원 전문 변리사가
            <br></br>
            빠르고 정확하게 상담해드립니다.
          </h2>

          <div className='freeconsultation_underArrow'>
            <p>지금 바로 신청하기</p>
            <button>
              <img src={Arrow} alt="" />
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FreeConsoltation;