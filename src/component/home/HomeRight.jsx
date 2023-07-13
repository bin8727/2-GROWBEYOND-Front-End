import Background from "../../assets/13.png";
import Character from "../../assets/14.png";

const HomeRight = () => {
  const paddingTop = '80% 0rem 0rem';

  const spanStyle = {
    boxSizing: "border-box",
    display: "block",
    overflow: "hidden",
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: 1,
    border: '0rem',
    padding: '0rem',
    position: 'relative',
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
    padding: `${paddingTop}`,
  };

  const innerSpanStyleWithPadding = Object.assign({},
    innerSpanStyle, {padding: '90.8546% 0rem 0rem',
  });

  return (
    <div className="home__right">
      <div className="home__right-container">
        <div className="home__right-wrap">
          <span style={spanStyle}>
            <span style={innerSpanStyle}></span>
            <img src={Background} alt="" className="home__right--img" />
          </span>
        </div>
        <div className="home__right-img">
          <span style={spanStyle}>
            <span style={innerSpanStyleWithPadding}></span>
            <img src={Character} alt="" className="home__right--img" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
