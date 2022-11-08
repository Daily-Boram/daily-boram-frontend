import styled from "styled-components";
import { useState } from "react";
import { HeadLogo, Alram, User } from "../../../assets/Img";
import { Link } from "react-router-dom";
import Modal from "../../Modal";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
          <Item src={Alram} alt="알람" onClick={modalOpen ? showModal : null} />
          <Item src={User} alt="유저" onClick={modalOpen ? showModal : null} />
          {!login ? (
            <LoginP onClick={showModal}>로그인</LoginP>
          ) : (
            <NameText setLogin={setLogin}>마을회장최씨</NameText>
          )}
        </HeaderItems>
      </HeaderContainer>
      {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background: ${({theme}) => theme.color.white};
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
  justify-content: space-between;
`;

const Item = styled.img`
  cursor: pointer;
  margin-right: 20px;
`;

const LoginP = styled.p`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.main};
`;

const NameText = styled.p`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.color.main};
`;

export default Header;
