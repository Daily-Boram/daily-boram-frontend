import styled from "styled-components";

const Popular = ({ topic, whiter, story }) => {
  return (
    <>
      <PopularBackground>
        <Img />
        <TopicBackground>
          <Topic>{topic}</Topic>
          <Whiter>{whiter}</Whiter>
        </TopicBackground>
        <SimpleStory>{story}</SimpleStory>
      </PopularBackground>
    </>
  );
};

const PopularBackground = styled.div`
  width: 330px;
  margin-right: 30px;
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

const Topic = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 8px;
`;

const Whiter = styled.p`
  color: ${({ theme }) => theme.color.gray02};
`;

const SimpleStory = styled.p`
  color: ${({ theme }) => theme.color.gray02};
`;

export default Popular;
