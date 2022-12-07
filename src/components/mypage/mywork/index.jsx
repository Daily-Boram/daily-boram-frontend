import Select from "../select";
import Header from "../../common/header";
import Character from "../../character";
import styled from "styled-components";
import { useState, useEffect } from "react";
import PickImage from "../../pickImage";
import { addSeries } from "../../../api/addSeries";
import { my } from "../../../api/my";
import { Link } from "react-router-dom";

const MyWork = () => {
  const [characterState, setCharacterState] = useState([]);
  const [myWorkState, setMyWorkState] = useState({
    title: "",
    contents: "",
    thumbnail: "",
  });
  const [myData, setMyData] = useState("");
  const [checkState, setCheckState] = useState([]);
  const valueLabel = [
    { id: 0, data: "일상" },
    { id: 1, data: "개그" },
    { id: 2, data: "액션" },
    { id: 3, data: "감성" },
    { id: 4, data: "순정" },
    { id: 5, data: "드라마" },
    { id: 6, data: "스릴러" },
    { id: 7, data: "스포츠" },
    { id: 8, data: "무협/사극" },
  ];
  const onCheckedElement = (checked, item, value) => {
    console.log(item, checked, value);
    if (checked) {
      setCheckState([...checkState, value]);
    } else if (!checked) {
      setCheckState(checkState.filter((el) => el !== value));
    }
  };
  const onSubmitClick = (e) => {
    if (myWorkState.contents.length > 0 && myWorkState.title.length > 0)
      addSeries(
        myData,
        myWorkState.title,
        myWorkState.thumbnail,
        myWorkState.contents,
        checkState
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
            {valueLabel.map((item) => (
              <FirstCheckBtn key={item.id}>
                <Check
                  type="checkbox"
                  onClick={(e) => {
                    onCheckedElement(
                      e.target.checked,
                      e.target.value,
                      item.data
                    );
                  }}
                />
                <Label>{item.data}</Label>
              </FirstCheckBtn>
            ))}
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
            values={myWorkState.contents}
            subTitle="위 입력하신 정보를 기반으로 AI가 일러스트를 그립니다. 원하는 그림을 선택해 주세요!"
            image={myWorkState.thumbnail}
            setImage={(thumbnail) => {
              let temp = Object.assign({}, myWorkState);
              temp.thumbnail = thumbnail;
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
  margin-bottom: 50px;
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
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const FirstCheckBtn = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
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
