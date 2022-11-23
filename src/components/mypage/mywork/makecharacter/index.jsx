import styled from "styled-components";
import PhotoList from "./photoList";

const MakeCharacter = () => {
  return (
    <MakeCharacterWarpper>
      <Title>등장인물 만들기</Title>
      <Explanation>
        입력하신 정보를 기반으로 AI가 일러스트를 그립니다. 원하는 그림을 선택해
        주세요!
      </Explanation>
      <CharacterElementWarpper>
        <Inputs>
          <CharacterName placeholder="등장인물 이름을 정해주세요." />
          <CharacterImformation placeholder="휴대폰으로 사진을 찍고 있는 여자" />
        </Inputs>
        <PhotoList buttonname="사진" />
      </CharacterElementWarpper>
    </MakeCharacterWarpper>
  );
};

const MakeCharacterWarpper = styled.div`
  width: 1050px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Explanation = styled.p`
  margin: 5px 0px 10px 0px;
  font-size: 19px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const CharacterElementWarpper = styled.div`
  display: flex;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const CharacterName = styled.input`
  width: 240px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.color.gray02};
`;

const CharacterImformation = styled.textarea`
  width: 240px;
  height: 332px;
  resize: none;
  font-size: 16px;
  font-weight: bold;
  ::placeholder {
    font-size: 12.5px;
    font-weight: bold;
  }
`;

export default MakeCharacter;
