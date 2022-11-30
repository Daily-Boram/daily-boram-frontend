import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../common/header";
import PopularWorks from "../main/mainworks/popular";
import Works from "../main/mainworks/worksList";
import seeSeries from "../../api/main/seeSeries";
import { MainRefresh, Search } from "../../assets/Img";

const Main = () => {
  const [Selected, setSelected] = useState("");
  const [seeSeriesState, setSeeSeriesState] = useState({
    id: 0,
    image: "",
    title: "",
    nickname: "",
    introduce: "",
    like: 0,
  });

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    seeSeries("", "")
      .then((res) => {
        setSeeSeriesState(res);
        console.log(seeSeries);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <MainPage>
        <SearchBar>
          <Input placeholder="제목/작가를 검색하세요." />
          <SearchBtn src={Search} />
        </SearchBar>
        <BestWorkBackground>
          <BestWork>
            <LeftDiv>
              <Daily>늘보람</Daily>
              <Popular>인기글</Popular>
            </LeftDiv>
          </BestWork>
          <WorksBackground>
            <PopularWorks
              workname="연애혁명"
              authorname="232"
              story="평범하면서 금사빠인 고등학생 순정남 공주영은 까칠하고 차가운 여학생 왕자림을 보고 사랑에 빠져버린다...."
              like="2.1K"
            />
            <PopularWorks
              workname="싸움 독학"
              authorname="박태준"
              story="힘없고 가진거 하나 없이 맞고만 살던 나였는데...우연히 비밀의 뉴튜브를 발견하게 되고 갑자기 떼돈을 벌었다."
              like="3.2K"
            />
            <PopularWorks
              workname="김부장"
              authorname="정종택"
              story="“제발 안경 쓴 아저씨는 건들지 말자…”오직 자신의 딸 '민지'를 위해 특수요원직을 관두고 평범함을..."
              like="5.6K"
            />
          </WorksBackground>
        </BestWorkBackground>
        <AllWorks>
          <BestWork>
            <LeftDiv>
              <Daily>늘보람</Daily>
              <Popular>추천 글 보기</Popular>
              <RefreshBtn>
                <BtnName>새로고침</BtnName>
                <RefreshIcon src={MainRefresh} />
              </RefreshBtn>
            </LeftDiv>
            <Select onChange={handleSelect} value={Selected}>
              <Option>랜덤</Option>
              <Option>인기순</Option>
              <Option>최신순</Option>
            </Select>
          </BestWork>
          <Choose>
            <Genre>전체</Genre>
            <Genre>일상</Genre>
            <Genre>개그</Genre>
            <Genre>판타지</Genre>
            <Genre>액션</Genre>
            <Genre>드라마</Genre>
            <Genre>순정</Genre>
            <Genre>감성</Genre>
            <Genre>스릴러</Genre>
            <Genre>스포츠</Genre>
            <Genre>무협/사극</Genre>
          </Choose>
          <WorksBackground>
            <Works workname="우주혁명" authorname="232" genre="개그" />
            <Works workname="은하혁명" authorname="232" />
            <Works workname="우주혁명" authorname="232" />
            <Works workname="은하혁명" authorname="232" />
          </WorksBackground>
          <WorksBackground>
            <Works workname="우주혁명" authorname="232" />
            <Works workname="은하혁명" authorname="232" />
            <Works workname="우주혁명" authorname="232" />
            <Works workname="은하혁명" authorname="232" />
          </WorksBackground>
          <WorksBackground>
            <Works workname="우주혁명" authorname="232" />
            <Works workname="은하혁명" authorname="232" />
            <Works workname="우주혁명" authorname="232" />
            <Works workname="은하혁명" authorname="232" />
          </WorksBackground>
        </AllWorks>
      </MainPage>
    </>
  );
};

export default Main;

const MainPage = styled.div`
  width: 100%;
  height: 210vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.div`
  width: 1050px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  margin-top: 180px;
  border: 2px solid ${({ theme }) => theme.color.main};
`;

const Input = styled.input`
  width: 910px;
  margin-left: 30px;
  font-size: 17px;
`;

const SearchBtn = styled.img`
  margin-left: 45px;
  cursor: pointer;
`;

const BestWorkBackground = styled.div`
  height: 370px;
  margin-top: 80px;
`;

const BestWork = styled.p`
  width: 1050px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Daily = styled.p`
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.main};
`;

const Popular = styled.p`
  font-size: 38px;
  font-weight: 800;
  margin-left: 8px;
  margin-bottom: 8px;
  margin-right: 7px;
`;

const WorksBackground = styled.div`
  width: 1050px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const AllWorks = styled.div`
  width: 1050px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;

const RefreshBtn = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BtnName = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.main};
`;

const RefreshIcon = styled.img`
  width: 20px;
  height: 24px;
`;

const Select = styled.select`
  width: 90px;
  font-size: 21px;
  margin-top: 7px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`;

const Option = styled.option`
  font-weight: 700;
  cursor: pointer;
`;

const Choose = styled.div`
  width: 1050px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Genre = styled.button`
  padding: 0 18px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.graymain};
  :hover {
    background-color: ${({ theme }) => theme.color.c02};
  }
`;
