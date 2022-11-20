import { useState } from "react";
import styled from "styled-components";
import Header from "../../common/header";
import Purchase from "./purchseList";
import { Link } from "react-router-dom";
import Works from "../../works/mainworks/worksList";
import { Pencil, Camera, Check, Error, UserPicture, Good, SpacePhoto, Plus } from "../../../assets/Img";

const MyPage = () => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <Header />
      <MyPageContainer>
        <Items>
          <Item style={{ color: "#4E9EFD" }}>내 정보</Item>
          <Link to="/mywork" style={{ textDecoration: "none" }}>
          <Item>내 작품</Item>
          </Link>
          <Item>구매 내역</Item>
        </Items>
        <MyInfo>
          <Introduce>
            <Picture src={UserPicture} alt="유저 이미지"></Picture>
            <Introduction>
              <User>
                <Name>최성현</Name>
                {!check ? (
                  <CheckBtn src={Error} alt="에러버튼" />
                ) : (
                  <CheckBtn src={Check} setCheck={setCheck} alt="체크버튼" />
                )}
                <img src={Pencil} alt="글쓰기" />
              </User>
              <Contents placeholder="소개글을 작성해주세요."></Contents>
            </Introduction>
          </Introduce>
          <Title>내 작품</Title>
          <MyWork>
            <Works workname="우주 혁명" authorname="232"/>
            <RegistrationBtn to='/mywork' style={{ textDecoration: "none" }}>
              <img src={Plus} alt="등록 버튼"/>
              <Explanation>새 작품 등록하기</Explanation>
            </RegistrationBtn>
          </MyWork>
          <Title>구매 내역</Title>
          <Purchase title="우주혁명 3화" subtitle="아름다운 행성" price="300글자"/>
          <Purchase title="우주혁명 3화" subtitle="아름다운 행성" price="300글자"/>
          <Purchase title="우주혁명 3화" subtitle="아름다운 행성" price="300글자"/>
        </MyInfo> 
      </MyPageContainer>
    </>
  );
};

const MyPageContainer = styled.div`
  width: 100%;
  height: 1800px;
  display: flex;
  justify-content: center;
`;

const Items = styled.div`
  width: 240px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 180px 30px 0px 0px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  cursor: pointer;
`;

const MyInfo = styled.div`
  width: 782px;
  display: flex;
  flex-direction: column;
`;

const Introduce = styled.div`
  width: 680px;
  height: 240px;
  display: flex;
  margin-top: 180px;
`;

const Picture = styled.img`
  margin-right: 30px;
`;

const Introduction = styled.div`
  width: 510px;
  height: 240px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray02};
`;

const User = styled.div`
  width: 510px;
  height: 55px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Name = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-left: 20px;
`;

const CheckBtn = styled.img`
  margin: 0px 315px 0px 20px;
`;

const Contents = styled.input`
  width: 507px;
  font-size: 16px;
  font-weight: bold;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 50px 0px 30px 0px;
`;

const MyWork = styled.p`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const RegistrationBtn = styled(Link)`
  width: 240px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 60px 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.graymain};
`;

const Explanation = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.gray03};
`;

export default MyPage;