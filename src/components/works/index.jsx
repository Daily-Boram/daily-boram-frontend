import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  SpacePhoto2,
  BigGood,
  TrueGood,
  ContentsRegistrationPlus,
} from "../../assets/Img";
import Header from "../common/header";
import ContentsList from "../common/contents";
import Pagination from "../common/pagination";
import { Link, useParams } from "react-router-dom";
import { getList } from "../../api/getList";
import { getSeries } from "../../api/getSeries";

const WorkPage = () => {
  const [writer, setWriter] = useState(true);
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState("#A7A7A7");
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const id = useParams().id;

  const onIncrease = () => {
    setLike(!like);
    setLikeNum(like ? likeNum - 1 : likeNum + 1);
    setTextColor(textColor === "#A7A7A7" ? "#4E9EFD" : "#A7A7A7");
  };

  useEffect(() => {
    getSeries(id, 1, 5)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <WorkContainer>
        <AboutWork>
          <Photo src={SpacePhoto2} />
          <Right>
            <Writer>
              <Title>우주 전사</Title>
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
        {!writer ? (
          <></>
        ) : (
          <BtnContainer to="/makeNovel" setWriter={setWriter}>
            <Line></Line>
            <ContentsRegistrationBtn>
              <div>
                <img src={ContentsRegistrationPlus} />
                <p>회차 등록하기</p>
              </div>
            </ContentsRegistrationBtn>
          </BtnContainer>
        )}
        <div>
          <ContentsList
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
          <ContentsList
            number="05"
            title="김민성,털"
            date="2022.11.4"
            likenumber="700"
            price="300글자"
          />
        </div>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </WorkContainer>
    </>
  );
};

export default WorkPage;

const WorkContainer = styled.div`
  width: 100%;
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
  color: ${({ theme }) => theme.color.main};
  margin-left: 15px;
`;

const BtnContainer = styled(Link)`
  text-decoration: none;
`;

const Line = styled.div`
  width: 1050px;
  border: 1px solid ${({ theme }) => theme.color.graymain};
  margin-bottom: 10px;
`;

const ContentsRegistrationBtn = styled.div`
  width: 1050px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.color.c02};
  transition: 0.5s;
  :hover {
    background-color: ${({ theme }) => theme.color.c04};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: ${({ theme }) => theme.color.white};
    margin-top: 10px;
  }
`;
