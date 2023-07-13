import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="header__nav" style={{ display: props.isHamburgerOpened ? "none" : "block" }}>
    {/* <div className="header__nav"> */}
      <Link
        to="/feasibility"
        className={
          `header__nav-item ${props.isActived === "feasibility" ? "header__nav-item--active" : ""}`
        }
        onClick={() => props.handleClick("feasibility")}
      >
        특허등록가능성검토
      </Link>
  
      <Link
        to="/patent-kr"
        className={
          `header__nav-item ${props.isActived === "patentKr" ? "header__nav-item--active" : ""}`
        }
        onClick={() => props.handleClick("patentKr")}
      >
        국내특허등록신청
      </Link>
  
      <Link
        to="/patent-gb"
        className={
          `header__nav-item ${props.isActived === "patentGb" ? "header__nav-item--active" : ""}`
        }
        onClick={() => props.handleClick("patentGb")}
      >
        해외특허등록신청
      </Link>
  
      <Link
        to="/costguide"
        className={
          `header__nav-item ${props.isActived === "costguide" ? "header__nav-item--active" : ""}`
        }
        onClick={() => props.handleClick("costguide")}
      >
        비용안내
      </Link>
  
      <Link
        to="/processguide"
        className={
          `header__nav-item ${props.isActived === "processguide" ? "header__nav-item--active" : ""}`
        }
        onClick={() => props.handleClick("processguide")}
      >
        절차안내
      </Link>
    </div>
  );
};

export default Nav;