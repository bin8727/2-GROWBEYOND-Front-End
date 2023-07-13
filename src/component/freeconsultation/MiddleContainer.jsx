import Arrow from '../../assets/arrow.svg';

const MiddleContainer = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  };
  
  return (
    <div className='freeconsultation_middleWrap'>
      <h2 className='freeconsultation_middleDesc'>
        특허 출원 전문 변리사가
        <br></br>
        빠르고 정확하게 상담해드립니다.
      </h2>
      <div className='freeconsultation_underArrow'>
        <p>지금 바로 신청하기</p>
        <button onClick={handleScroll}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MiddleContainer;