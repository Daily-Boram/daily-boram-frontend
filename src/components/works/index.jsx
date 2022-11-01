import styled from "styled-components";
import { SpacePhoto, Good } from "../../assets/Img";

const Works = ({ workname, authorname }) => {
  return (
    <>
      <WorkBackground>
        <Photo src={SpacePhoto} />
        <FirstLine>
          <Writer>
            <WorkName>{workname}</WorkName>
            <AuthorName>{authorname}</AuthorName>
          </Writer>
          <Like>
            <GoodPhoto src={Good} />
            <LikeNumber>1.1K</LikeNumber>
          </Like>
        </FirstLine>
        <SecondLine>
            <Genre>일상</Genre>
            <Genre>개그</Genre>
            <Genre>판타지</Genre>
        </SecondLine>
      </WorkBackground>
    </>
  );
};

const WorkBackground = styled.div`
  width: 240px;
  cursor: pointer;
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

const SecondLine = styled.div`
  display: flex;
`;

const Genre = styled.div`
  display: grid;
  place-content: center;
  width: 50px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 13px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.graymain};
`;

export default Works;