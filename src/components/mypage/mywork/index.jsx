import Header from "../../common/header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SpacePhoto } from "../../../assets/Img";

const FirstCheckLabel = [
  { key: "일상" },
  { key: "개그" },
  { key: "액션" },
  { key: "드라마" },
  { key: "순정" },
];

const SecondCheckLabel = [
  { key: "감성" },
  { key: "스릴러" },
  { key: "스포츠" },
  { key: "무협/사극" },
];

const MyWork = () => {
  return (
    <>
      <Header />
      <MyWorkContainer>
        <Items>
          <Link to="/mypage" style={{ textDecoration: "none" }}>
            <Item>내 정보</Item>
          </Link>
          <Item style={{ color: "#4E9EFD" }}>내 작품</Item>
          <Item>구매 내역</Item>
        </Items>
        <MyInfo>
          <Title>제목</Title>
          <TitleInput placeholder="제목을 입력해 주세요." maxLength={25} />
          <Title>태그</Title>
          <CheckBox>
            <FirstLine>
              {FirstCheckLabel.map((check) => (
                <CheckBtn>
                  <Check type="checkbox" />
                  <Label>{check.key}</Label>
                </CheckBtn>
              ))}
            </FirstLine>
            <SecondLine>
              {SecondCheckLabel.map((check) => (
                <CheckBtn>
                  <Check type="checkbox" />
                  <Label>{check.key}</Label>
                </CheckBtn>
              ))}
            </SecondLine>
          </CheckBox>
          <Title>줄거리</Title>
          <Contants placeholder="본인의 작품 줄거리를 요약하여 표현해 주세요." />
          <Title>작품 대표 이미지</Title>
          <Explanation>
            위 입력하신 정보를 기반으로 AI가 일러스트를 그립니다. 원하는 그림을
            선택해 주세요!
          </Explanation>
          <PhotoList>
            <ClickPhoto src={SpacePhoto} />
            <List>
              <Line>
                <Img src={SpacePhoto} />
                <Img src={SpacePhoto} />
                <Img src={SpacePhoto} />
              </Line>
              <Line>
                <Img src={SpacePhoto} />
                <Img src={SpacePhoto} />
                <Img src={SpacePhoto} />
              </Line>
              <Line>
                <Img src={SpacePhoto} />
                <Img src={SpacePhoto} />
                <Img src={SpacePhoto} />
              </Line>
            </List>
          </PhotoList>
        </MyInfo>
      </MyWorkContainer>
    </>
  );
};

const MyWorkContainer = styled.div`
  width: 100%;
  height: 1800px;
  display: flex;
  justify-content: center;
`;

const Items = styled.div`
  width: 240px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 180px 30px 0px 0px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  cursor: pointer;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 180px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const TitleInput = styled.input`
  width: 779px;
  height: 56px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CheckBox = styled.div`
  width: 779px;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const FirstLine = styled.div`
  width: 716px;
  display: flex;
  justify-content: space-between;
`;

const SecondLine = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

const CheckBtn = styled.div`
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

const Contants = styled.input`
  width: 779px;
  height: 269px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Explanation = styled.p`
  margin: 5px 0px 10px 0px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const PhotoList = styled.div`
  width: 780px;
  height: 420px;
  display: flex;
`;

const ClickPhoto = styled.img`
  width: 400px;
  height: 400px;
`;

const List = styled.div`
  width: 350px;
  height: 405px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
`;

export default MyWork;