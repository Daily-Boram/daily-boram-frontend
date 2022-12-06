import styled from "styled-components";
import { useState, useEffect } from "react";
import { HeadLogo, AlarmBtn, User } from "../../../assets/Img";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import AlarmAll from "../../alarm/all";
import { my } from "../../../api/my";
import { profileImage } from "../../../api/imageCreate/profileImage";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [alarmOpen, setAlarmOpen] = useState(false);
  const [profile, setProfile] = useState({
    image: "",
  });
  const [user, setUser] = useState({
    nickname: "",
    image: "",
    introduce: "",
    notice_list: [],
    purchase_list: [],
  });

  const showModal = () => {
    setModalOpen(modalOpen ? null : true);
  };

  const showAlarm = () => {
    setAlarmOpen(alarmOpen ? false : true);
  };

  useEffect(() => {
    my()
      .then((res) => {
        setLogin(true);
        setUser(res.data);
      })
      .catch((err) => console.error(err));
    profileImage()
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderLogo to="/">
          <Logo src={HeadLogo} alt="헤더 로고" />
        </HeaderLogo>
        <HeaderItems>
          {!login ? (
            <>
              <Item src={AlarmBtn} alt="알람" onClick={showModal} />
              <Item src={User} alt="유저" onClick={showModal} />
              <LoginP onClick={showModal}>로그인</LoginP>
            </>
          ) : (
            <>
              <Item onClick={showAlarm} src={AlarmBtn} alt="알람" />
              <MyPageLink to="/mypage">
                <Item src={User} alt="유저" />
                <NameText setLogin={setLogin}>{user.nickname}</NameText>
              </MyPageLink>
            </>
          )}
        </HeaderItems>
      </HeaderContainer>
      {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
      {alarmOpen && (
        <AlarmAll alarmOpen={alarmOpen} setAlarmOpen={setAlarmOpen} />
      )}
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 10;
  background: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const HeaderLogo = styled(Link)`
  width: 100px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 75px;
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.img`
  cursor: pointer;
  margin-right: 20px;
`;

const MyPageLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LoginP = styled.p`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.main};
`;

const NameText = styled.p`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.color.main};
  :hover {
    color: ${({ theme }) => theme.color.c04};
  }
`;
