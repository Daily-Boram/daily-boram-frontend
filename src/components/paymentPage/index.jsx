import styled from "styled-components";
import Header from "../common/header";
import GljaButton from "./gljabutton";
import { useState } from "react";
import Oneday from "./charts/oneday";
import { useRecoilValue } from "recoil";
import { havingState } from "../../store/having";

const dates = ["1일", "7일", "1개월", "3개월", "6개월", "1년"];

const Paymentpage = () => {
  const [timer, setTimer] = useState("0000000000");

  const currentTimer = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hours = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());
    setTimer(`${month}월 ${day}일 ${hours}시 ${minute}분 ${second}초`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  const havingCount = useRecoilValue(havingState);

  return (
    <>
      <Header />
      <PaymentpageContainer>
        <Wrapper>
          <Data>
            <Price>103.25</Price>
            <Country>KRW</Country>
          </Data>
          <Situation>+1.23(1.20%)</Situation>
          <Days>{timer}</Days>
          <Sort>
            {dates.map((v, i) => (
              <div>
                <Dates key={i}>
                  {v}
                </Dates>
              </div>
            ))}
          </Sort>
          <Oneday />
          <Title>
            보유 중인 <span>글자{havingCount}개</span>
          </Title>
          <Explan>
            ‘글자’란? 작품 감상을 위해 필요한 전용 결제 코인입니다.
          </Explan>
          <h2>글자 구매</h2>
          <GljaButton />
        </Wrapper>
      </PaymentpageContainer>
    </>
  );
};

export default Paymentpage;

const PaymentpageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-right: 30px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.main};
  }

  h3 {
    color: ${({ theme }) => theme.color.gray02};
  }
`;

const Wrapper = styled.div`
  width: 1050px;
`;

const Data = styled.div`
  display: flex;
  align-items: end;
`;

const Price = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin-top: 180px;
`;

const Country = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
`;

const Situation = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.error};
`;

const Days = styled.p`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.gray02};
`;

const Sort = styled.div`
  width: 1000px;
  height: 30px;
  display: flex;
  margin-bottom: 40px;

  div {
    width: 90px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-right: 1px solid ${({ theme }) => theme.color.gray02};
    :last-child {
      border: none;
    }
  }
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  align-items: end;
  span {
    font-size: 45px;
    margin-left: 10px;
    color: ${({ theme }) => theme.color.main};
  }
`;

const Explan = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.gray02};
`;

const Dates = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.color.gray02};
  :hover {
    color: ${({ theme }) => theme.color.main};
  }
`;
