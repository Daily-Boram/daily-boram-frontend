import styled from "styled-components";
import { useState, useEffect } from "react";
import { SpacePhoto2, BigGood, TrueGood } from "../../assets/Img";
import Header from "../common/header";
import ContentsList from "../common/contents";
import Pagination from "../common/pagination";

const WorkPage = () => {
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState("#A7A7A7");
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

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

const Photo = styled.img`
  width: 240px;
  height: 240px;
`;

const FirstLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
`;

const WorkName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 6px;
`;

const AuthorName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.graymain};
`;

const Like = styled.div`
  display: flex;
`;

const GoodPhoto = styled.img`
  margin-right: 5px;
`;

const LikeNumber = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;