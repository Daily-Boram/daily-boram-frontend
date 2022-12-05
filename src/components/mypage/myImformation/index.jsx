import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../common/header";
import Purchase from "./purchaseList";
import Works from "./work";
import Select from "../select";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { havingState } from "../../../store/having";
import {
  Pencil,
  DoubleCheck,
  DoubleError,
  UserPicture,
  Plus,
  DefaultProfile,
} from "../../../assets/Img";
import { my } from "../../../api/my";
import { updateProfileAxios } from "../../../api/updateProfile";

const MyPage = (setWriter) => {
  const havingCount = useRecoilValue(havingState);
  const [check, setCheck] = useState(true);
  const [modify, setModify] = useState(false);
  const [introduction, setIntroduction] = useState("");
  const [user, setUser] = useState({
    nickname: "",
    image: "",
    introduce: "",
    is_mine: true,
    notice_list: [],
    purchase_list: [],
  });
  const [update, setUpdate] = useState({
    nickname: "",
    image: "",
    introduce: "",
  });
  const userSet = () => {
    my()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    userSet();
  }, []);

  const updateProfile = () => {
    updateProfileAxios(update.nickname, update.introduce)
      .then(() => {
        console.log("nice");
        setUpdate({
          nickname: "",
          image: "",
          introduce: "",
        });
        userSet();
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Header />
      <MyPageContainer>
        <Select />
        <MyInfo>
          <Introduce>
            <UserImage>
              <Picture
                src={
                  modify
                    ? update.image
                      ? update.image
                      : user.image
                    : DefaultProfile
                }
                alt="유저 이미지"
              />
            </UserImage>
            <Introduction>
              <User>
                {modify ? (
                  <NameInput
                    value={update.nickname}
                    name="nickname"
                    onChange={(e) => {
                      const { value, name } = e.target;
                      setUpdate({
                        ...update,
                        [name]: value,
                      });
                    }}
                  />
                ) : (
                  <Name>{user.nickname}</Name>
                )}
                {!check ? (
                  <CheckBtn src={DoubleError} alt="에러버튼" />
                ) : (
                  <CheckBtn
                    src={DoubleCheck}
                    setCheck={setCheck}
                    alt="체크버튼"
                  />
                )}
                {modify ? (
                  <CompleteButton
                    onClick={() => {
                      updateProfile();
                      setModify(false);
                    }}
                  >
                    완료
                  </CompleteButton>
                ) : (
                  <UserCreateIcon
                    onClick={() => setModify(true)}
                    src={Pencil}
                    alt="이름쓰기"
                  />
                )}
              </User>
              <ContentsInput length={introduction.length}>
                {modify ? (
                  <>
                    <textarea
                      placeholder="소개글을 작성해주세요."
                      type="text"
                      maxLength={100}
                      onChange={(e) => {
                        const { value, name } = e.target;
                        setUpdate({
                          ...update,
                          [name]: value,
                        });
                      }}
                      name="introduce"
                      value={update.introduce}
                    />
                    <span>{introduction.length}/100</span>
                  </>
                ) : (
                  <span>
                    {user.introduce
                      ? user.introduce
                      : "한줄 소개가 비어있습니다."}
                  </span>
                )}
              </ContentsInput>
            </Introduction>
          </Introduce>
          <MyHave to="/paymentpage">
            <p>
              현재 보유하고 계신 글자 개수 : <span>{havingCount}개</span>
            </p>
          </MyHave>
          <Title>내 작품</Title>
          <MyWork>
            {user.notice_list.map((e, i) => (
              <Works
                key={i}
                workname={e.title}
                authorname={e.nickname}
                image={e.image}
                id={i}
                onClick={() => setWriter(true)}
              />
            ))}
            <RegistrationBtn to="/mywork">
              <img src={Plus} alt="등록 버튼" />
              <Explanation>새 작품 등록하기</Explanation>
            </RegistrationBtn>
          </MyWork>
          <Title>구매 내역</Title>
          <Purchases>
            {user.purchase_list.map((e, i) => (
              <Purchase
                key={i}
                title={e.series_title}
                subtitle={e.episode_title}
                price={e.cost}
              />
            ))}
          </Purchases>
        </MyInfo>
      </MyPageContainer>
    </>
  );
};

export default MyPage;

const CompleteButton = styled.button`
  width: 300px;
  height: 45px;
  margin-right: 6px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.c03};
`;

const NameInput = styled.input`
  margin-left: 10px;
`;

const MyPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MyInfo = styled.div`
  width: 780px;
  display: flex;
  flex-direction: column;
`;

const Introduce = styled.div`
  width: 680px;
  height: 240px;
  display: flex;
  margin-top: 180px;
`;

const UserImage = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  input {
    width: 30px;
    height: 30px;
  }
`;

const Picture = styled.img`
  width: 240px;
  height: 240px;
  margin-right: 30px;
  border-radius: 10px;
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
  margin-right: 200px;
  margin-left: 10px;  
`;

const UserCreateIcon = styled.img`
  cursor: pointer;
`;

const ContentsInput = styled.div`
  width: 510px;
  height: 185px;
  margin: 15px 0px 0px 15px;

  textarea {
    width: 430px;
    height: 155px;
    resize: none;
    font-size: 16px;
    font-weight: bold;
    ::placeholder {
      font-size: 16px;
      font-weight: bold;
    }
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.color.gray02};
    color: ${(props) =>
      props.length < 100
        ? ({ theme }) => theme.color.gray02
        : ({ theme }) => theme.color.error};
  }
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 50px 0px 30px 0px;
`;

const MyHave = styled(Link)`
  width: 780px;
  height: 124px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.black};
  span {
    color: ${({ theme }) => theme.color.main};
  }
`;

const MyWork = styled.p`
  width: 810px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  flex-wrap: wrap;
`;

const RegistrationBtn = styled(Link)`
  width: 240px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
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

const Purchases = styled.div`
  div:first-child {
    border-top: 1px solid ${({ theme }) => theme.color.gray02};
  }
`;
