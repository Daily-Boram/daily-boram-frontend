import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../common/header";
import PopularWorks from "../main/mainworks/popular";
import Works from "../main/mainworks/worksList";
import seeSeries from "../../api/main/seeSeries";
import { MainRefresh, Search } from "../../assets/Img";
import { auth } from "../../api/auth";
import { choose } from "../../constance/choose";
import { seeAllSeries } from "../../api/seeAllSeris";

const Main = () => {
  const [selected, setSelected] = useState("");
  const [list, setList] = useState({
    popular_list: [],
    series_list: [],
  });

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  useEffect(() => {
    const urlParam = new URL(window.location.href).searchParams.get("code");
    if (urlParam) {
      auth(urlParam)
        .then((res) => {
          console.log(res);
          localStorage.setItem("access_token", res.data.access_token);
          window.location.replace("/");
        })
        .catch((err) => console.error(err));
    } else {
      console.log("로그인이 되어있지 않음");
    }
  }, []);

  useEffect(() => {
    seeAllSeries(selected, "")
      .then((res) => setList(res.data))
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
            {list.popular_list.map((e, i) => (
              <PopularWorks
                key={i}
                workname={e.title}
                authorname={e.nickname}
                story={e.introduce}
                like={e.like}
                image={e.image}
              />
            ))}
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
            <Select onChange={handleSelect} value={selected}>
              <Option>랜덤</Option>
              <Option>인기순</Option>
              <Option>최신순</Option>
            </Select>
          </BestWork>
          <Choose>
            {choose.map((v, i) => (
              <Genre key={i}>{v}</Genre>
            ))}
          </Choose>
          <WorksBackground>
            {list.series_list.map((e) => (
              <Works key={e.id} workname={e.title} authorname={e.nickname} genre={e.genre}/>
            ))}
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
  flex-wrap: wrap;
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
