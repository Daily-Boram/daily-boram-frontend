import styled from "styled-components";
import { useState, useEffect } from "react";
import { HeadLogo, Alram, User } from "../../../assets/Img";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <Logo src={HeadLogo} alt="header logo"/>
      </HeaderLogo>
      <HeaderItems>
        <Item src={Alram}/>
        <Item src={User}/>
        <LoginBtn>
          <Login>로그인</Login>
        </LoginBtn>
      </HeaderItems>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-left: 340px;
`;

const UserBackground = styled.div``;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: 340px;
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
`;

export default Header;
