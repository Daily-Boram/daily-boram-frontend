import styled from "styled-components";

const Purchase = ({ title, subtitle, price }) => {
  return (
    <PurchaseContainer>
      <Title>{title}</Title>
      <Title>{subtitle}</Title>
      <Price>{price}</Price>
    </PurchaseContainer>
  );
};

const PurchaseContainer = styled.div`
  width: 780px;
  height: 48px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
  color: ${({ theme }) => theme.color.gray03};
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 350px;
  color: ${({ theme }) => theme.color.main};
`;

export default Purchase;