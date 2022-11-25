import styled from "styled-components";

const Purchase = ({ title, subtitle, price }) => {
  return (
    <PurchaseContainer>
      <TitleWrapper>
        <Title>{title}</Title>
        <Title>{subtitle}</Title>
      </TitleWrapper>
      <Price>{price}</Price>
    </PurchaseContainer>
  );
};

export default Purchase;

const PurchaseContainer = styled.div`
  width: 780px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const TitleWrapper = styled.span`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray03};
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;
