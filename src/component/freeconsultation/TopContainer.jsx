import Earth from '../../assets/15.png';

const TopContainer = () => {
  const spanStyle = {
    boxSizing: 'border-box',
    display: 'block',
    overflow: 'hidden',
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: '1',
    border: '0rem',
    margin: '0rem',
    padding: '0rem',
    position: 'relative'
  };

  const innerSpanStyle = {
    boxSizing: 'border-box',
    display: 'block',
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: '1',
    border: '0rem',
    margin: '0rem',
    padding: '50% 0rem 0rem'
  };

  return (
    <div className='freeconsultation__top-container'>
      <p className="freeconsultation__top-title">
        특허의 신 무료 상담소
      </p>
      <h2 className='freeconsultation__top-desc'>
        무료 상담도
        <br></br>
        특허의 신과 함께
      </h2>
      <div className="freeconsultation__img">
        <span style={spanStyle}>
          <span style={innerSpanStyle}></span>
          <img src={Earth} alt="" />
        </span>
      </div>
    </div>
  );
};

export default TopContainer;