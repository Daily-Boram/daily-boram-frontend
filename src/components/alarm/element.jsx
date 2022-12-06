import styled from "styled-components";
import { SpacePhoto2 } from "../../assets/Img";

const Element = ({ day, workname }) => {
  return (
    <ElementContainer>
      <WorkImage src={SpacePhoto2} alt="작품이미지" />
      <div>
        <Content>
          “{workname}” 새로운 회차가 등록되었어요. 서둘러 확인해 보세요!
        </Content>
        <Day>{day}일 전</Day>
      </div>
    </ElementContainer>
  );
};

const ElementContainer = styled.div`
  width: 292px;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  :hover {
    background-color: ${({ theme }) => theme.color.gray01};
    cursor: pointer;
  }
`;

const WorkImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;

const Content = styled.div`
  width: 225px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.color.gray02};
`;

const Day = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;

export default Element;
