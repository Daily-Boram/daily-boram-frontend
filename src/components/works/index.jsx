import styled from "styled-components";
import { useState } from "react";
import { SpacePhoto2, Arrow, BigGood } from "../../assets/Img";
import Header from "../common/header";
import ContatsList from "./contantsList";

const WorkPage = () => {
  const [like, setLike] = useState(0);

  const onIncrease = () => {
    setLike(like + 1);
  };

  return (
    <>
      <Header />
      <WorkContainer>
        <AboutWork>
          <Photo src={SpacePhoto2} />
          <Right>
            <Writer>
              <Title>우주혁명</Title>
              <AuthorName>242작가</AuthorName>
            </Writer>
            <GenreList>
              <Genre>#일상</Genre>
              <Genre>#개그</Genre>
              <Genre>#판타지</Genre>
              <Genre>#드라마</Genre>
            </GenreList>
            <Explanation>
              핵전쟁 이후 지구는 망했고, 남은 지구인들은 달로 이주했다. 이후
              100년 “다시 지구로 돌아가자!” 라는 마음을 가진 청년들이 모여
              혁명을 이룩하는데...
            </Explanation>
            <Information>
              <InformationP>작품정보</InformationP>
              <img src={Arrow} alt="작품정보 들어가는 화살표" />
            </Information>
            <Like onClick={onIncrease}>
              <GoodIcon src={BigGood} />
              <Number>{like}</Number>
            </Like>
          </Right>
          <FirstBtnBackground>
            <FirstBtn>첫회 읽기</FirstBtn>
          </FirstBtnBackground>
        </AboutWork>
        <Contants>
          <ContatsList
            number="01"
            title="맞은편의 행성"
            date="2022.10.16"
            price="무료"
          />
          <ContatsList
            number="02"
            title="가까운 듯 먼 그곳의 기억"
            date="2022.10.20"
            price="무료"
          />
          <ContatsList
            number="03"
            title="아름다운 행성"
            date="2022.10.24"
            price="300글자"
          />
          <ContatsList
            number="04"
            title="차가운 공기, 따뜻한 마음"
            date="2022.10.28"
            price="300글자"
          />
        </Contants>
      </WorkContainer>
    </>
  );
};

const WorkContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutWork = styled.div`
  width: 1050px;
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Photo = styled.img`
  width: 420px;
  height: 420px;
`;

const Right = styled.div`
  height: 400px;
  margin-left: 27px;
`;

const Writer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 15px;
`;

const Title = styled.p`
  font-size: 60px;
  font-weight: bold;
  margin-right: 15px;
`;

const AuthorName = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.gray03};
`;

const GenreList = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Genre = styled.p`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.color.graymain};
  :hover {
    color: ${({ theme }) => theme.color.main};
  }
`;

const Explanation = styled.p`
  width: 450px;
  font-size: 16px;
`;

const Information = styled.div`
  display: flex;
  cursor: pointer;
  margin: 5px 0px 50px 0px;
`;

const InformationP = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
  margin-right: 12px;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FirstBtnBackground = styled.div`
  height: 420px;
  display: flex;
  align-items: end;
`;

const FirstBtn = styled.button`
  width: 160px;
  height: 60px;
  font-size: 24px;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
`;

const GoodIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const Number = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
  color: ${({ theme }) => theme.color.gray02};
`;

const Contants = styled.div``;

export default WorkPage;
