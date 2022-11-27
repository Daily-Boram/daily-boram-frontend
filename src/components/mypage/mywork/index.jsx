import Select from "../select";
import Header from "../../common/header";
import Character from "../../character";
import TagBox from "./tagbox";
import styled from "styled-components";
import { useState } from "react";
import { BlueCheck, GreyRefresh } from "../../../assets/Img";

const MyWork = ({ type, name, image, setImage, onSubmit }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [characterState, setCharacterState] = useState([]);
  const [myWorkState, setMyWorkState] = useState({
    title: "",
    contents: "",
    characters: characterState,
  });

  const dummyImages = [
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
  ];

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
          <Title>작품 대표 이미지</Title>
          <Explanation>
            위 입력하신 정보를 기반으로 AI가 일러스트를 그립니다. 원하는 그림을
            선택해 주세요!
          </Explanation>
      <MakeCharacterContainer>
      </MakeCharacterContainer>
          <Wrapper
            onSubmit={(e) => {
              e.preventDefault();
              if (name && image) {
                onSubmit();
                setSelectedIndex(-1);
              } else alert("등장인물에 대한 정보가 부족합니다.");
            }}
            type={type}
          >
            <div>
              <img
                src={
                  image
                    ? image
                    : "https://thumbs.dreamstime.com/b/imitation-transparent-background-seamless-vector-illustration-69028332.jpg"
                }
                alt="thumbnail"
              />
              <Samples selectedIndex={selectedIndex}>
                <div>
                  {dummyImages.map((v, i) => (
                    <strong
                      key={i}
                      onClick={(e) => {
                        if (selectedIndex === i) setSelectedIndex(-1);
                        else setSelectedIndex(i);
                        setImage(e.target.src);
                      }}
                    >
                      <img src={v} alt="sample" />
                    </strong>
                  ))}
                </div>
                <div>
                  <span>
                    <img src={GreyRefresh} alt="create more thumbnails" />
                    새로운 사진 만들기
                  </span>
                  {type === "character" ? (
                    <button type="submit">인물 생성</button>
                  ) : (
                    <button>사진 선택</button>
                  )}
                </div>
              </Samples>
            </div>
          </Wrapper>
          <CharacterWarpper>
            <Character
              characterState={characterState}
              setCharacterState={setCharacterState}
            />
          </CharacterWarpper>
          <RegistrationBtn>새 작품 등록하기</RegistrationBtn>
        </MyInfo>
      </MyWorkContainer>
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
  span {
    position: absolute;

    transform: translateX(${(props) => (props.length < 10 ? "-65px" : "-76px")})
      translateY(13px);

    width: max-content;

    font-size: 18px;
    font-weight: bold;

    color: ${(props) =>
      props.length < 25
        ? ({ theme }) => theme.color.gray02
        : ({ theme }) => theme.color.error};
  }
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

    color: ${(props) =>
      props.length < 400
        ? ({ theme }) => theme.color.gray02
        : ({ theme }) => theme.color.error};
  }
`;

const ContentsInput = styled.textarea`
  width: 750px;
  height: 100%;
  resize: none;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  border: none;
  padding: 15px;
  ::placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Explanation = styled.p`
  width: 780px;
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
    background-color: ${({ theme }) => theme.color.c04};
  }
`;

const Wrapper = styled.form`
  padding-bottom: 10px;
  width: 780px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  > div {
    display: flex;

    > img {
      margin-right: 30px;

      width: 400px;
      height: 400px;

      object-fit: cover;

      border-radius: 5px;
    }

    > div:last-of-type {
      width: 350px;
      height: 400px;
    }
  }
`;

const Samples = styled.div`
  div {
    width: 350px;

    :first-of-type {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      gap: 25px;
    }

    :last-of-type {
      margin-top: 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      height: 100px;

      user-select: none;
      cursor: pointer;

      :nth-of-type(${(props) => props.selectedIndex + 1}) {
        ::before {
          background-color: ${({ theme }) => theme.color.main}70;
          background-image: url(${BlueCheck});
          background-repeat: no-repeat;
          background-position: center;

          position: absolute;

          width: 100px;
          height: 100px;

          border-radius: 5px;
          content: "";
          z-index: 1;
        }
      }

      > img {
        width: 100px;
        height: 100px;

        object-fit: cover;

        border-radius: 5px;
      }
    }
  }

  span {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.color.graymain};
    font-size: 20px;

    cursor: pointer;

    > img {
      margin-right: 10px;
    }
  }

  button {
    background-color: ${({ theme }) => theme.color.main};

    width: 100px;
    height: 40px;

    color: ${({ theme }) => theme.color.white};

    border-radius: 10px;
    transition: background-color 0.25s ease;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.color.c04};
    }
  }
`;

export default MyWork;
