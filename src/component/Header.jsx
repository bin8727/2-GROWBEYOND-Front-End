import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as MenuTrigger } from '../assets/images/menu-trigger.svg'


const Header = () => {
  return (
    <Container>
      <Wrap>

        <Logo>
          <div>
            <Link to='/'>
              {/* <img src="" alt="" /> */}
              <p>특허의 신</p>
            </Link>
          </div>
        </Logo>

        <Nav>
          
          <Trigger>
            <MenuTrigger />
          </Trigger>

          <NavLinks>
            <NavLink to='/feasibility'>특허등록가능성검토</NavLink>
            <NavLink to='/patent-korea'>국내특허등록신청</NavLink>
            <NavLink to='/patent-global'>해외특허등록신청</NavLink>
            <NavLink to='/cost-guide'>비용안내</NavLink>
            <NavLink to='/process-guide'>절차안내</NavLink>
          </NavLinks>

          {/* <Login>
            <LoginLink>로그인</LoginLink>
          </Login> */}
        </Nav>
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
  height: 4rem;
`;

const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100%;
  max-width: 64rem;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
    text-decoration: inherit;
    color: rgb(55, 65, 81);
    opacity: 1;
  }
`;

const Nav = styled.div`
  color: rgb(55, 65, 81);

  /* @media (max-width: 64rem) {
    display: none;
  } */

  a {
    cursor: pointer;
    text-decoration-line: none;
    opacity: 1;
    line-height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  a:nth-child(n + 2) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const Trigger = styled.div`
  display: none;
  
  @media (max-width: 63.9375rem) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    line-height: 1;
  }
`;

const NavLink = styled(Link)`
  color: rgb(55, 65, 81);
`;

const NavLinks = styled(NavLink)`
  display: none;
  flex-direction: column;
  margin-top: 1rem;

  @media (min-width: 64rem) {
    display: flex;
    flex-direction: row;
    margin-top: 0;
  }
`;

// const Login = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 3rem;
//   margin-left: 1.5rem;
//   margin-right: 1.5rem;

//   a {
//     text-decoration-line: none;
//     font-size: 0.875rem;
//     line-height: 1.25rem;
//     font-weight: 500;
//     opacity: 1;
//   }
// `;

// const LoginLink = styled(Link)`
//   color: rgb(46, 120, 245)
// `;