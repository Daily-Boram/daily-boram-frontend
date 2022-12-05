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
import { SpacePhoto } from "../../assets/Img";

const WorkPage = () => {
  const [writer, setWriter] = useState(false);
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(2301);
  const [textColor, setTextColor] = useState("#A7A7A7");
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const id = useParams().id;
  const [information, setInformation] = useState({
    title: "",
    image: "",
    summary: "",
    like: 0,
    nickname: "",
    is_like: false,
    genre: [],
    episode_list: [],
  });

  const onIncrease = () => {
    setLike(!like);
    setLikeNum(like ? likeNum - 1 : likeNum + 1);
    setTextColor(textColor === "#A7A7A7" ? "#4E9EFD" : "#A7A7A7");
  };

  useEffect(() => {
    getSeries(id, 1, 5)
      .then((res) => setInformation(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(information);
  return (
    <>
      <Header />
      <WorkContainer>
        <AboutWork>
          <Photo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0AfzgE-198nE2dMY8yR3A22bRI3ITPrdNA&usqp=CAU" />
          {/* <Photo src={information.image} /> */}

          <Right>
            <Writer>
              <Title>{information.title}</Title>
              <AuthorName>{information.nickname} 작가</AuthorName>
            </Writer>
            <Explanation>{information.summary}</Explanation>
            <GenreList>
              {information.genre &&
                information.genre.map((str, index) => (
                  <Genre key={index}>#{str}</Genre>
                ))}
            </GenreList>
            <Like onClick={onIncrease}>
                      {/* src={information.is_like ? TrueGood : BigGood} */}
              <GoodIcon src={like ? TrueGood : BigGood} />
                                                   {/* {information.like} */}
              <Number style={{ color: textColor }}>{likeNum}</Number>
            </Like>
          </Right>
        </AboutWork>
        {!writer ? (
          <></>
        ) : (
          <BtnContainer to={`/makeNovel/${id}`} setWriter={setWriter}>
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
          {information.episode_list &&
            information.episode_list.map((v) => (
              <ContentsList
                key={v.id}
                image={v.image}
                title={v.title}
                price={v.cost}
                likenumber={v.like}
                date={v.date}
              />
            ))}
        </div>
        <ContentsList
          number="01"
          title="불행의 시작"
          price="무료"
          likenumber="1023"
          date="2022.10.04"
        />
        <ContentsList
          number="02"
          title="노력은 배신하지 않는다"
          price="무료"
          likenumber="1023"
          date="2022.10.11"
        />
        <ContentsList
          number="03"
          title="다시 도전"
          price="200글자"
          likenumber="1023"
          date="2022.10.18"
        />
        <ContentsList
          number="04"
          title="높은 상대"
          price="200글자"
          likenumber="1023"
          date="2022.10.25"
        />
        <ContentsList
          number="05"
          title="언제나 긍정적"
          price="300글자"
          likenumber="1023"
          date="2022.11.02"
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
  margin-bottom: 20px;
`;

const Genre = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
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
