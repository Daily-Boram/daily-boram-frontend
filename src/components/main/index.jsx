import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Test>Main</Test>
    </>
  );
};

const Test = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export default Main;
