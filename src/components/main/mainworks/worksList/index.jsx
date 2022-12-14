import styled from "styled-components";
import { SpacePhoto, Good } from "../../../../assets/Img";
import { Link } from "react-router-dom";

const Works = ({ id, workname, authorname, genre, like, image }) => {
  return (
    <Link
      to={`/work/${id-1}`}
      onClick={() => window.scrollTo(0, 0)}
      style={{ textDecoration: "none" }}  
    >
      <WorkBackground>
        <Photo src={image ? image : SpacePhoto} />
        <FirstLine>
          <Writer>
            <WorkName>{workname}</WorkName>
            <AuthorName>{authorname}</AuthorName>
          </Writer>
          <Like>
            <GoodPhoto src={Good} />
            <LikeNumber>{like}</LikeNumber>
          </Like>
        </FirstLine>
        <SecondLine>
          {genre.map((v, i) => (
            <Genre key={i}>{v}</Genre>
          ))}
        </SecondLine>
      </WorkBackground>
    </Link>
  );
};

export default Works;

const WorkBackground = styled.div`
  width: 240px;
  margin-right: 30px;
  cursor: pointer;
  margin-bottom: 80px;
`;

const Photo = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
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
  color: ${({ theme }) => theme.color.black};
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
  margin-right: 10px;
  place-content: center;
  width: 50px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.graymain};
`;
