import styled from "styled-components";
import { MeatBalls } from "../../../assets/Img";
import Element from "../element";
import AlarmAll from "../all";
import { useState } from "react";

const AlarmNotread = ({ setNotreadOpen }) => {
  const [allOpen, setAllOpen] = useState(false);
  const dummy = [
    { id: 1, workname: "사랑의 시작", day: 5 },
    { id: 2, workname: "진성이의 인생", day: 4 },
  ];

  const showAll = () => {
    setAllOpen(true);
    setNotreadOpen(false);
  };

  return (
    <>
      <AlramContainer onClick={(e) => e.stopPropagation()}>
        <Head>
          <AlramText>알람</AlramText>
          <GumList src={MeatBalls} alt="점리스트" />
        </Head>
        <Button>
          <All onClick={showAll}>모두</All>
          <NotRead>읽지 않음</NotRead>
        </Button>
        <NewNotifications>새로운 알림</NewNotifications>
        {dummy.map((element) => (
          <Element
            key={element.id}
            workname={element.workname}
            day={element.day}
          />
        ))}
      </AlramContainer>
      {allOpen && <AlarmAll allOpen={allOpen} />}
    </>
  );
};

export default AlarmNotread;

const AlramContainer = styled.div`
  width: 370px;
  height: 307px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 75px 0px 0px 1250px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.graymain};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 1px 7px -3px rgba(0, 0, 0, 1);
`;

const Head = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 25px 0px 10px 0px;
`;

const AlramText = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.main};
`;

const GumList = styled.img`
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

const Button = styled.div`
  width: 300px;
  display: flex;
  margin-bottom: 15px;
`;

const All = styled.button`
  width: 46px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.gray02};
  background-color: ${({ theme }) => theme.color.white};
  transition: 0.8s;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.c01};
    color: ${({ theme }) => theme.color.white};
  }
`;

const NotRead = styled.button`
  width: 80px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.c02};
  transition: 0.8s;
`;

const NewNotifications = styled.p`
  width: 300px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;
