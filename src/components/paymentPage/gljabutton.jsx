import { useState } from "react";
import styled from "styled-components";
import LetterModal from "./letter";

const counts = [1, 10, 30, 50, 100, 200, 300, 500, 700, 1000];

const GljaButton = () => {
  const [textData, setTextData] = useState(0);
  const [letterModalOpen, setLetterModalOpen] = useState(false);
  const showModal = (e) => {
    setLetterModalOpen(letterModalOpen ? null : true);
    setTextData(e.target.name);
  };
  return (
    <GljaWrapper>
      {counts.map((number, i) => (
        <GljaButtonContainer name={number} onClick={showModal}>
          <p key={i}>글자 {number}개</p>
        </GljaButtonContainer>
      ))}
      {letterModalOpen && (
        <LetterModal
          textData={textData}
          letterModalOpen={letterModalOpen}
          setLetterModalOpen={setLetterModalOpen}
        />
      )}
    </GljaWrapper>
  );
};

export default GljaButton;

const GljaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  div:first-child {
    margin-right: 50px;
  }
`;

const GljaButtonContainer = styled.button`
  width: 375px;
  height: 43px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin-right: 50px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  cursor: pointer;
  p {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.gray02};
    margin-right: 5px;
    :first-child {
      margin-left: 15px;
    }
  }

  :hover {
    background-color: ${({ theme }) => theme.color.gray01};
  }
`;
