import styled from "styled-components";
import { HeadLogo, Alram, User } from "../../../assets/Img";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo to="/">
          <Logo src={HeadLogo} alt="헤더 로고" />
        </HeaderLogo>
        <HeaderItems>
          <Item src={Alram} alt="알람"/>
          <Item src={User} alt=""/>
          <LoginBtn>
              <Login>로그인</Login>
          </LoginBtn>
        </HeaderItems>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const HeaderLogo = styled(Link)`
  width: 100px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 75px;
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.img`
  cursor: pointer;
  margin-left: 20px;
`;

const LoginBtn = styled.div`
  margin-left: 20px;
`;

const Login = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`;

export default Header;
