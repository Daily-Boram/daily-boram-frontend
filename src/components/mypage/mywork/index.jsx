import Header from "../../common/header";
import TagBox from "./tagbox";
import Character from "./character";
import Select from "../select";
import PhotoList from "./makecharacter/photoList";
import MakeCharacter from "./makecharacter";
import styled from "styled-components";
import { useState } from "react";
import { CharacterPlus } from "../../../assets/Img";

const MyWork = () => {
  const [titleValue, setTitleValue] = useState("");
  const [contentsValue, setContentsValue] = useState("");
  const [characterplus, setCharaterPlus] = useState(false);

  const onChangeTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const onChangeContents = (e) => {
    setContentsValue(e.target.value);
  };

  const onClickCharacter = () => {
    setCharaterPlus(true);
  };

  return (
    <>
      <Header />
      <MyWorkContainer>
        <Select />
        <MyInfo>
          <Title>제목</Title>
          <InputBackground>
            <TitleInput
              placeholder="제목을 입력해 주세요."
              onChange={onChangeTitle}
              value={titleValue}
              type="text"
            />
          </InputBackground>
          <Title>태그</Title>
          <TagBox />
          <Title>줄거리</Title>
          <ContentsBackground>
            <ContentsInput
              placeholder="본인의 작품 줄거리를 요약하여 표현해 주세요."
              onChange={onChangeContents}
              value={contentsValue}
              type="text"
            />
          </ContentsBackground>
          <Title>작품 대표 이미지</Title>
          <Explanation>
            위 입력하신 정보를 기반으로 AI가 일러스트를 그립니다. 원하는 그림을
            선택해 주세요!
          </Explanation>
          <PhotoList buttonname="표지" />
          <Title>인물</Title>
          <CharacterWarpper>
            <Character name="공주영" />
            <Character name="왕자림" />
            <Character name="김병훈" />
            <CharacterPlusBtn>
              <img src={CharacterPlus} alt="캐릭터 추가" />
              <BtnName onClick={onClickCharacter}>인물 추가</BtnName>
            </CharacterPlusBtn>
          </CharacterWarpper>
        </MyInfo>
      </MyWorkContainer>
      <MakeCharacterContainer>
        <MakeCharacterWarpper>
          <MakeCharacter />
          <RegistrationBtn>새 작품 등록하기</RegistrationBtn>
        </MakeCharacterWarpper>
      </MakeCharacterContainer>
    </>
  );
};

const MyWorkContainer = styled.div`
  width: 100%;
  height: 1500px;
  display: flex;
  justify-content: center;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 180px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputBackground = styled.div`
  width: 780px;
  height: 56px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray02};
`;

const TitleInput = styled.input`
  width: 720px;
  height: 54px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 25px;
`;

const ContentsBackground = styled.div`
  width: 780px;
  height: 269px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray02};
`;

const ContentsInput = styled.textarea`
  width: 750px;
  height: 100%;
  resize: none;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  border: none;
  ::placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Explanation = styled.p`
  margin: 5px 0px 10px 0px;
  font-size: 19px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const CharacterWarpper = styled.div`
  display: flex;
  margin: 10px 0px 40px 0px;
`;

const CharacterPlusBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const BtnName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  color: ${({ theme }) => theme.color.gray02};
`;

const MakeCharacterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MakeCharacterWarpper = styled.div`
  width: 1050px;
  height: 493px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const RegistrationBtn = styled.button`
  width: 780px;
  height: 56px;
  border-radius: 5px;
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  cursor: pointer;
  transition: all 0.8s;
  :hover {
    background-color: ${({ theme }) => theme.color.c02};
  }
`;

export default MyWork;
