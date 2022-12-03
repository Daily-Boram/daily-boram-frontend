import Select from "../select";
import Header from "../../common/header";
import Character from "../../character";
import TagBox from "./tagbox";
import styled from "styled-components";
import { useState, useEffect } from "react";
import PickImage from "../../pickImage";
import { addSeries } from "../../../api/addSeries";
import { my } from "../../../api/my";

const MyWork = () => {
  const [characterState, setCharacterState] = useState([]);
  const [myWorkState, setMyWorkState] = useState({
    title: "",
    contents: "",
    thumbnail: "",
    characters: characterState,
  });
  const [myData, setMyData] = useState("");
  const onSubmitClick = () => {
    console.log(myWorkState);
    addSeries(
      myData,
      myWorkState.title,
      myWorkState.thumbnail,
      myWorkState.contents,
      myWorkState.characters
    ).then((res) => console.log(res));
  };
  useEffect(() => {
    my()
      .then((res) => setMyData(res.data.nickname))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <MyWorkContainer>
        <Select />
        <MyInfo>
          <Title>제목</Title>
          <InputBackground length={myWorkState.title.length}>
            <TitleInput
              placeholder="제목을 입력해 주세요."
              id="title"
              maxLength={25}
              onChange={(e) => {
                let temp = Object.assign({}, myWorkState);
                temp.title = e.currentTarget.value;
                setMyWorkState(temp);
              }}
              value={myWorkState.title}
            />
            <span>{myWorkState.title.length} / 25</span>
          </InputBackground>
          <Title>태그</Title>
          <TagBox />
          <Title>줄거리</Title>
          <ContentsBackground length={myWorkState.contents.length}>
            <ContentsInput
              placeholder="본인의 작품 줄거리를 요약하여 표현해 주세요."
              type="text"
              maxLength={400}
              onChange={(e) => {
                let temp = Object.assign({}, myWorkState);
                temp.contents = e.currentTarget.value;
                setMyWorkState(temp);
              }}
              value={myWorkState.contents}
            />
            <span>{myWorkState.contents.length} / 400</span>
          </ContentsBackground>
          <PickImage
            type="imageOnly"
            title="작품 대표 이미지"
            subTitle="위 입력하신 정보를 기반으로 AI가 일러스트를 그립니다. 원하는 그림을 선택해 주세요!"
            image={myWorkState.characterImage}
            setImage={(characterImage) => {
              let temp = Object.assign({}, myWorkState);
              temp.characterImage = characterImage;
              setMyWorkState(temp);
            }}
          />
          <CharacterWrapper>
            <Character
              characterState={characterState}
              setCharacterState={setCharacterState}
            />
          </CharacterWrapper>
          <RegistrationBtn onClick={onSubmitClick}>
            새 작품 등록하기
          </RegistrationBtn>
        </MyInfo>
      </MyWorkContainer>
    </>
  );
};

export default MyWork;

const MyWorkContainer = styled.div`
  width: 100%;
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
  span {
    position: absolute;

    transform: translateX(${(props) => (props.length < 10 ? "-65px" : "-76px")})
      translateY(13px);

    width: max-content;

    font-size: 18px;
    font-weight: bold;

    margin-left: 30px;

    color: ${({ theme, length }) =>
      length < 25 ? theme.color.gray02 : theme.color.error};
  }
`;

const TitleInput = styled.input`
  width: 720px;
  height: 54px;
  font-size: 19px;
  font-weight: bold;
  margin-left: 20px;
`;

const ContentsBackground = styled.div`
  width: 780px;
  height: 269px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray02};
  span {
    position: absolute;

    transform: translateX(${(props) => (props.length < 10 ? "-65px" : "-76px")})
      translateY(13px);

    width: max-content;

    font-size: 18px;
    font-weight: bold;

    margin-left: 45px;

    color: ${(props) =>
      props.length < 400
        ? ({ theme }) => theme.color.gray02
        : ({ theme }) => theme.color.error};
  }
`;

const ContentsInput = styled.textarea`
  width: 720px;
  height: 100%;
  resize: none;
  font-size: 20px;
  font-weight: bold;
  border: none;
  padding: 15px;
  ::placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const RegistrationBtn = styled.button`
  width: 780px;
  height: 56px;
  border-radius: 5px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 15px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  cursor: pointer;
  transition: all 0.8s;
  :hover {
    background-color: ${({ theme }) => theme.color.c04};
  }
`;

const CharacterWrapper = styled.div`
  margin-top: 40px;

  form {
    transform: translateX(-270px);
  }
`;
