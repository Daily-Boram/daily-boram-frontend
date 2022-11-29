import styled from "styled-components";
import { SpacePhoto, Good } from "../../../../assets/Img";
import { Link } from "react-router-dom";

const Works = ({ workname, authorname, like }) => {
  return (
    <WorkContainer to="/work">
      <Photo src={SpacePhoto} />
      <Line>
        <Writer>
          <WorkName>{workname}</WorkName>
          <AuthorName>{authorname}</AuthorName>
        </Writer>
        <Like>
          <GoodPhoto src={Good} />
          <LikeNumber>{like}</LikeNumber>
        </Like>
      </Line>
    </WorkContainer>
  );
};

export default Works;

const WorkContainer = styled(Link)`
  text-decoration: none;
  width: 240px;
  cursor: pointer;
  margin-right: 30px;
`;

const Photo = styled.img`
  width: 240px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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