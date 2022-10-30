import styled from "styled-components";

const Popular = ({ workname, authorname, story }) => {
  return (
    <>
      <PopularBackground>
        <Img />
        <TopicBackground>
          <WorkName>{workname}</WorkName>
          <AuthorName>{authorname}</AuthorName>
        </TopicBackground>
        <SimpleStory>{story}</SimpleStory>
      </PopularBackground>
    </>
  );
};

const PopularBackground = styled.div`
  width: 330px;
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
`;

const AuthorName = styled.p`
  color: ${({ theme }) => theme.color.gray02};
`;

const SimpleStory = styled.p`
  color: ${({ theme }) => theme.color.gray02};
`;

export default Popular;
