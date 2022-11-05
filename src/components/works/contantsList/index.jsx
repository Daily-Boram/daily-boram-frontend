import styled from "styled-components";
import { SpacePhoto3 } from "../../../assets/Img";

const ContantsList = ({ number, title, date, price }) => {
  return (
    <>
      <ContantsListContainer>
        <Photo src={SpacePhoto3} alt="우주 사진" />
        <Information>
          <div>
            <Number>{number}</Number>
            <Title>{title}</Title>
            <Date>{date}</Date>
          </div>
          <Price>{price}</Price>
        </Information>
      </ContantsListContainer>
    </>
  );
};

const ContantsListContainer = styled.div`
  width: 1050px;
  height: 170px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Photo = styled.img`
  margin-left: 65px;
`;

const Information = styled.div`
  width: 750px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
`;

const Number = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;
const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  margin-bottom: 30px;
`;

const Date = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray02};
`;

const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;

export default ContantsList;
