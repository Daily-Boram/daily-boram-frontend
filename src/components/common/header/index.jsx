import styled from "styled-components";
import { useState } from "react";
import { HeadLogo, Alram, User } from "../../../assets/Img";
import { Link } from "react-router-dom";
import Modal from "../../Modal";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(true);
  
  const showModal = () => {
    setModalOpen(true);
};

  return (
    <>
      <HeaderContainer>
        <HeaderLogo to="/">
          <Logo src={HeadLogo} alt="헤더 로고" />
        </HeaderLogo>
        <HeaderItems>
          <Item src={Alram} alt="알람" onClick={showModal}/>
          <Item src={User} alt="" onClick={showModal}/>
          <Login onClick={showModal}>로그인</Login>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
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
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 75px;
`;

const HeaderItems = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.img`
  cursor: pointer;
`;

const Login = styled.button`
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  background-color:  ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.main};
`;

export default Header;
