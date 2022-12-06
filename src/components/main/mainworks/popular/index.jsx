import styled from "styled-components";
import { Link } from "react-router-dom";
import { Good, SpacePhoto } from "../../../../assets/Img";

const Popular = ({ workname, authorname, story, like, image, id }) => {
  return (
    <PopularBackground to={`/work/${id}`}>
      <Img src={image ? image : SpacePhoto} />
      <TopicBackground>
        <Writer>
          <WorkName>{workname}</WorkName>
          <AuthorName>{authorname}</AuthorName>
        </Writer>
        <Like>
          <img src={Good} alt="좋아요" />
          <Number>{like}</Number>
        </Like>
      </TopicBackground>
      <SimpleStory>{story}</SimpleStory>
    </PopularBackground>
  );
};

export default Popular;

const PopularBackground = styled(Link)`
  width: 330px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 30px;
`;

const Img = styled.img`
  width: 330px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.graymain};
  border-radius: 5px;
  margin-bottom: 7px;
`;

const TopicBackground = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  margin-bottom: 3px;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
`;

const WorkName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
  color: ${({ theme }) => theme.color.black};
`;

const AuthorName = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
`;

const Like = styled.div`
  display: flex;
`;

const Number = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  color: ${({ theme }) => theme.color.main};
`;

const SimpleStory = styled.p`
  color: ${({ theme }) => theme.color.gray02};
  :hover {
    text-decoration: underline;
  }
`;
