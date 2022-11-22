import { useState } from "react";
import styled from "styled-components";
import Header from "../../common/header";
import Purchase from "./purchaseList";
import Works from "./work";
import Select from "./select";
import { Link } from "react-router-dom";
import { Pencil, Camera, DoubleCheck, DoubleError, UserPicture, Plus } from "../../../assets/Img";

const MyPage = () => {
  const [check, setCheck] = useState(true);

  return (
    <>
      <Header />
      <MyPageContainer>
        <Select />
        <MyInfo>
          <Introduce>
            <Picture src={UserPicture} alt="유저 이미지"/>
            <Introduction>
              <User>
                <Name>최성현</Name>
                {!check ? (
                  <CheckBtn src={DoubleError} alt="에러버튼" />
                ) : (
                  <CheckBtn src={DoubleCheck} setCheck={setCheck} alt="체크버튼" />
                )}
                <UserCreateIcon src={Pencil} alt="이름쓰기" />
              </User>
              <Contents placeholder="소개글을 작성해주세요."></Contents>
            </Introduction>
          </Introduce>
          <Title>내 작품</Title>
          <MyWork>
            <Works workname="우주혁명" authorname="232" like="2.1K"/>
            <Works workname="우주혁명" authorname="232" like="2.1K"/>
            <RegistrationBtn to="/mywork">
              <img src={Plus} alt="등록 버튼" />
              <Explanation>새 작품 등록하기</Explanation>
            </RegistrationBtn>
          </MyWork>
          <Title>구매 내역</Title>
          <Purchase
            title="우주혁명 3화"
            subtitle="아름다운 행성"
            price="300글자"
          />
          <Purchase
            title="우주혁명 8화"
            subtitle="아름다운 행성"
            price="300글자"
          />
          <Purchase
            title="우주혁명 12화"
            subtitle="집에가고싶다"
            price="300글자"
          />
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
  margin: 0px 315px 0px 15px;
`;

const UserCreateIcon = styled.img`
  cursor: pointer;
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
  height: 300px;
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
  margin: 0px 0px 60px 0px;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.graymain};
`;

const Explanation = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.gray03};
`;

export default MyPage;