import styled from "styled-components";
import Header from "../common/header";
import PopularArticles from "../PopularArticles";
import { Search } from "../../assets/Img";

const Main = () => {
  return (
    <>
      <Header />
      <MainPage>
        <SearchBackground>
          <SearchBar>
            <Input placeholder="제목/작가를 검색하세요." />
            <Glass src={Search} />
          </SearchBar>
        </SearchBackground>
        <BestWorkBackground>
          <BestWork>
            <Daily>늘보람</Daily>
            <Popular>인기글</Popular>
          </BestWork>
          <PopularArticlesBackground>
            <PopularArticles
              topic="연애혁명"
              whiter="232"
              story="평범하면서 금사빠인 고등학생 순정남 공주영은 
까칠하고 차가운 여학생 왕자림을 보고 사랑에 빠져버린다...."
            />
            <PopularArticles
              topic="연애혁명"
              whiter="232"
              story="평범하면서 금사빠인 고등학생 순정남 공주영은 
까칠하고 차가운 여학생 왕자림을 보고 사랑에 빠져버린다...."
            />
            <PopularArticles
              topic="연애혁명"
              whiter="232"
              story="평범하면서 금사빠인 고등학생 순정남 공주영은 
까칠하고 차가운 여학생 왕자림을 보고 사랑에 빠져버린다...."
            />
          </PopularArticlesBackground>
        </BestWorkBackground>
      </MainPage>
    </>
  );
};

const MainPage = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBackground = styled.div`
  margin-top: 100px;
`;

const SearchBar = styled.div`
  width: 1050px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.color.main};
  border-radius: 30px;
`;

const Input = styled.input`
  width: 900px;
  margin-left: 30px;
  font-size: 17px;
`;

const Glass = styled.img`
  margin-left: 40px;
  cursor: pointer;
`;

const BestWork = styled.p`
  width: 1050px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  display: flex;
  margin-bottom: 12px;
`;
const Daily = styled.p`
  font-size: 38px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.main};
`;
const Popular = styled.p`
  font-size: 38px;
  font-weight: 800;
  margin-left: 8px;
`;

const PopularArticlesBackground = styled.div`
  display: flex;
  align-items: center;
`;

const BestWorkBackground = styled.div`
  margin-top: 80px;
`;

export default Main;
