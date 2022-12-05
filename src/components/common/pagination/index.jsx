import styled from "styled-components";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <PaginationContainer>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      <div>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <PaginationBtn
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </PaginationBtn>
          ))}
      </div>
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 590px;
    display: flex;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 40px;
  color: ${({ theme }) => theme.color.graymain};
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

const PaginationBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.graymain};
  &[aria-current] {
    background: ${({ theme }) => theme.color.c02};
    cursor: revert;
    transform: revert;
  }
`;
