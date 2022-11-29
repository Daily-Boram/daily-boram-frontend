import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Select = () => {
  const location = useLocation();
  return (
    <SelectContainer>
      <MyLink to="/mypage">
        <Option isSelected={location.pathname === "/mypage"}>내 정보</Option>
      </MyLink>
      <MyLink to="/mywork">
        <Option isSelected={location.pathname === "/mywork"}>내 작품</Option>
      </MyLink>
      <Option>구매 내역</Option>
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.div`
  width: 240px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 180px 30px 0px 0px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.main : theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  cursor: pointer;
`;

const MyLink = styled(Link)`
  text-decoration: none;
`;