import Select from "../select";
import Header from "../../common/header";
import Character from "../../character";
import styled from "styled-components";
import { useState, useEffect } from "react";
import PickImage from "../../pickImage";
import { addSeries } from "../../../api/addSeries";
import { my } from "../../../api/my";
import { Link } from "react-router-dom";

const FirstCheckLabel = [
  { key: "일상" },
  { key: "개그" },
  { key: "액션" },
  { key: "감성" },
  { key: "순정" },
];

const SecondCheckLabel = [
  { key: "드라마" },
  { key: "스릴러" },
  { key: "스포츠" },
  { key: "무협/사극" },
];

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
          <CheckBox>
            <Line>
              {FirstCheckLabel.map((check) => (
                <FirstCheckBtn>
                  <Check type="checkbox" />
                  <Label>{check.key}</Label>
                </FirstCheckBtn>
              ))}
            </Line>
            <Line>
              {SecondCheckLabel.map((check) => (
                <SecondCheckBtn>
                  <Check type="checkbox" />
                  <Label>{check.key}</Label>
                </SecondCheckBtn>
              ))}
            </Line>
          </CheckBox>
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
          <RegistrationBtn onClick={onSubmitClick} to="/mypage">
            새 작품 등록하기
          </RegistrationBtn>
        </MyInfo>
      </MyWorkContainer>
    </>
  );
};

export default MyWork;

const MyWorkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 270px;
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

const RegistrationBtn = styled(Link)`
  width: 780px;
  height: 56px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  margin-top: 15px;
  text-decoration: none;
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

const CheckBox = styled.div`
  width: 780px;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Line = styled.div`
  width: 800px;
  display: flex;
`;

const FirstCheckBtn = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

const SecondCheckBtn = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 58px;
`;

const Check = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: bold;
`;