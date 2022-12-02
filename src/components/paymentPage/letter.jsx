import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { havingState } from "../../store/having";

const LetterModal = ({ setLetterModalOpen, letterModalOpen, textData }) => {
  const [having, setHaving] = useRecoilState(havingState);
  const closeModal = () => {
    setLetterModalOpen(false);
  };

  const Having = () => {
    setHaving(having + Number(textData));
    setLetterModalOpen(false);
  };

  return (
    <ModalContainer modalVisible={letterModalOpen} onClick={closeModal}>
      <LoginModal
        modalVisible={letterModalOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <p>{textData} 글자 결제</p>
        <Line></Line>
        <div>
          <button onClick={closeModal}>취소</button>
          <button onClick={Having} Have={having}>
            구매
          </button>
        </div>
      </LoginModal>
    </ModalContainer>
  );
};

export default LetterModal;

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
  height: 250px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
  p {
    font-size: 32px;
    font-weight: bold;
    margin-top: 50px;
    color: ${({ theme }) => theme.color.main};
  }

  div {
    width: 280px;
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 120px;
    height: 40px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.white};
    transition: 0.5s;
    :hover {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.main};
    }
  }
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

const Line = styled.span`
  width: 50px;
  margin-top: 10px;
  margin-bottom: 55px;
  border: 1px solid ${({ theme }) => theme.color.main};
`;
