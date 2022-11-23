import styled from "styled-components";
import { SpacePhoto, MyWorkRefresh } from "../../../../../assets/Img";

const PhotoList = ({ buttonname }) => {
  const arr = new Array(9).fill(0);
  const onClick = () => {
    alert("표지가 선택되었습니다.");
  };
  return (
    <PhotoListContainer>
      <ClickPhoto src={SpacePhoto} />
      <List>
        <Line>
          {arr.map((v, i) => (
            <Img src={SpacePhoto} alt={i} />
          ))}
        </Line>
        <CoverLine>
          <NewCover>
            <img src={MyWorkRefresh} alt="새로고침" />
            <Text>새로운 {buttonname} 만들기</Text>
          </NewCover>
          <CoverSelectionBtn onClick={onClick}>
            {buttonname} 선택
          </CoverSelectionBtn>
        </CoverLine>
      </List>
    </PhotoListContainer>
  );
};

const PhotoListContainer = styled.div`
  width: 780px;
  height: 450px;
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const ClickPhoto = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 30px;
`;

const List = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 350px;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  :hover {
    opacity: 0.33;
    color: #a8cdf8;
  }
`;

const CoverLine = styled.div`
  width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewCover = styled.div`
  width: 200px;
  height: 24px;
  display: flex;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
  color: ${({ theme }) => theme.color.graymain};
`;

const CoverSelectionBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  transition: all 0.8s;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.c02};
  }
`;

export default PhotoList;
