import { Close, NaverLogo } from "../../assets/Img";
import styled from "styled-components";

const Modal = ({ setModalOpen, modalOpen }) => {
  const url =
    "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=qrILHZxEvO2vLhCaw2uU&redirect_uri=http://localhost:3000&scope=name,email,gender,age,mobile,birthyear,birthday&state=STATE";
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContainer modalVisible={modalOpen} onClick={closeModal}>
      <LoginModal modalVisible={modalOpen} onClick={(e) => e.stopPropagation()}>
        <CloseLine>
          <CloseBtn src={Close} onClick={closeModal} />
        </CloseLine>
        <LoginPage>
          <Loginhead>
            <LoginText>LOGIN</LoginText>
            <Line />
          </Loginhead>
          <NaverBtn href={url}>
            <img src={NaverLogo} alt="네이버로고" />
            <Text>네이버 시작하기</Text>
          </NaverBtn>
        </LoginPage>
      </LoginModal>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes fadeIn {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @keyframes fadeOut {
    0% {
      background-color: rgba(0, 0, 0, 0.5);
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  animation: ${(props) => (props.modalVisible ? "fadeIn" : "fadeOut")} 0.6s;
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
  @keyframes slideIn {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes slideOut {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(130%);
    }
  }
  animation: ${(props) => (props.modalVisible ? "slideIn" : "slideOut")} 0.6s;
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

const NaverBtn = styled.a`
  width: 400px;
  height: 50px;
  background-color: #00c73c;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled.p`
  width: 60%;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
`;
