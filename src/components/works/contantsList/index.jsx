import styled from "styled-components";
import { SpacePhoto3, BigGood } from "../../../assets/Img";

const ContantsList = ({ number, title, date, likenumber, price }) => {
  return (
    <ContantsListContainer>
      <Photo src={SpacePhoto3} alt="우주 사진" />
      <Information>
        <Left>
          <Number>{number}</Number>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Like>
            <Icon src={BigGood} />
            <LikeNumber>{likenumber}</LikeNumber>
          </Like>
        </Left>
        <Price>{price}</Price>
      </Information>
    </ContantsListContainer>
  );
};

const ContantsListContainer = styled.div`
  width: 1050px;
  height: 170px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
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

const Left = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

const Date = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray02};
`;

const Like = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const LikeNumber = styled.p`
  color: ${({ theme }) => theme.color.gray02};
  font-weight: 500;
  font-size: 16px;
`;

const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;

export default ContantsList;