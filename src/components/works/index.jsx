import styled from "styled-components";
import { useState } from "react";
import { SpacePhoto2, BigGood, TrueGood } from "../../assets/Img";
import Header from "../common/header";
import ContentsList from "../common/contents";

const WorkPage = () => {
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState("#A7A7A7");

  const onIncrease = () => {
    setLike(!like);
    setLikeNum(like ? likeNum - 1 : likeNum + 1);
    setTextColor(textColor === "#A7A7A7" ? "#4E9EFD" : "#A7A7A7");
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
            <Explanation>
              핵전쟁 이후 지구는 망했고, 남은 지구인들은 달로 이주했다. 이후
              100년 “다시 지구로 돌아가자!” 라는 마음을 가진 청년들이 모여
              혁명을 이룩하는데...
            </Explanation>
            <GenreList>
              <Genre>#일상</Genre>
              <Genre>#개그</Genre>
              <Genre>#판타지</Genre>
              <Genre>#로맨스</Genre>
            </GenreList>
            <Like onClick={onIncrease}>
              <GoodIcon src={like ? TrueGood : BigGood} />
              <Number style={{ color: textColor }}>{likeNum}</Number>
            </Like>
          </Right>
        </AboutWork>
        <div>
          <ContatsList
            number="01"
            title="맞은편의 행성"
            date="2022.10.16"
            likenumber="121"
            price="무료"
          />
          <ContentsList
            number="02"
            title="가까운 듯 먼 그곳의 기억"
            date="2022.10.20"
            likenumber="78"
            price="무료"
          />
          <ContentsList
            number="03"
            title="아름다운 행성"
            date="2022.10.24"
            likenumber="90"
            price="200글자"
          />
          <ContentsList
            number="04"
            title="차가운 공기, 따뜻한 마음"
            date="2022.10.28"
            likenumber="211"
            price="300글자"
          />
          <ContatsList
            number="05"
            title="김민성,털"
            date="2022.11.4"
            likenumber="700"
            price="300글자"
          />
        </div>
      </WorkContainer>
      <SelectPage>
        <SelectBtn>1</SelectBtn>
      </SelectPage>
    </>
  );
};

const WorkContainer = styled.div`
  width: 100%;
  height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutWork = styled.div`
  width: 1050px;
  display: flex;
  margin-top: 180px;
`;

const Photo = styled.img`
  width: 360px;
  height: 360px;
`;

const Right = styled.div`
  height: 400px;
  margin-left: 40px;
`;

const Writer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 15px;
`;

const Title = styled.p`
  font-size: 55px;
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
  margin-bottom: 10px;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const GoodIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const Number = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
`;

const SelectPage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.c02};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export default WorkPage;