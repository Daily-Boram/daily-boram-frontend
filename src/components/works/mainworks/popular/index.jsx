import styled from "styled-components";
import { Link } from "react-router-dom";

const Popular = ({ workname, authorname, story }) => {
  return (
    <PopularBackground to="/work" style={{ textDecoration: "none" }}>
      <Img />
      <TopicBackground>
        <WorkName>{workname}</WorkName>
        <AuthorName>{authorname}</AuthorName>
      </TopicBackground>
      <SimpleStory>{story}</SimpleStory>
    </PopularBackground>
  );
};

const PopularBackground = styled(Link)`
  width: 330px;
  cursor: pointer;
`;

const Img = styled.div`
  width: 330px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.graymain};
  border-radius: 5px;
  margin-bottom: 7px;
`;

const TopicBackground = styled.div`
  width: 330px;
  display: flex;
  align-items: end;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  margin-bottom: 3px;
`;

const WorkName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
  color: ${({ theme }) => theme.color.black};
`;

const AuthorName = styled.p`
  color: ${({ theme }) => theme.color.gray02};
`;

const SimpleStory = styled.p`
  color: ${({ theme }) => theme.color.gray02};
  :hover {
    text-decoration: underline;
  }
`;

export default Popular;
