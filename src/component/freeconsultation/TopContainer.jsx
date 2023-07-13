import Earth from '../../assets/15.png';

const TopContainer = () => {
  return (
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
  );
};

export default TopContainer;