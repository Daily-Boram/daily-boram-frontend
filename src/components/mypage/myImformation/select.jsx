import styled from "styled-components";
import { Link } from "react-router-dom";

const Select = () => {
  return (
    <SelectContainer>
      <Link to="/mypage">
        <Option>내 정보</Option>
      </Link>
      <Link to="/mywork">
        <Option>내 작품</Option>
      </Link>
      <Option>구매 내역</Option>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 240px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 180px 30px 0px 0px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  div:first-child {
    color: ${({ theme }) => theme.color.main};
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  cursor: pointer;
`;

export default Select;
