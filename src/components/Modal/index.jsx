import { Close, NaverRogo } from "../../assets/Img";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Modal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ModalContainer onClick={closeModal}>
        <Fade buttom>
          <LoginModal onClick={(e) => e.stopPropagation()}>
            <CloseLine>
              <CloseBtn src={Close} onClick={closeModal} />
            </CloseLine>
            <LoginPage>
              <Loginhead>
                <LoginText>LOGIN</LoginText>
                <Line />
              </Loginhead>
              <NaverBtn>
                <Rogo src={NaverRogo} />
                <Text>네이버 시작하기</Text>
              </NaverBtn>
            </LoginPage>
          </LoginModal>
        </Fade>
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginModal = styled.div`
  width: 540px;
  height: 350px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
`;

const CloseLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const CloseBtn = styled.img`
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const LoginPage = styled.p`
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Loginhead = styled.div`
  height: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LoginText = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;

const Line = styled.div`
  width: 50px;
  height: 2px;
  background-color: #4e9efd;
`;

const NaverBtn = styled.div`
  width: 400px;
  height: 50px;
  background-color: #00c73c;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  cursor: pointer;
`;

const Rogo = styled.img``;

const Text = styled.p`
  width: 60%;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
`;

export default Modal;
