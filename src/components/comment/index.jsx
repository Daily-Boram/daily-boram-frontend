import Header from "../common/header";
import BottomNavigate from "../common/bottomNavigate";
import styled from "styled-components";
import { useState } from "react";
import CommentDummy from "../../constance/comment";
import { User } from "../../assets/Img";

const Comment = () => {
  const [commentValue, setCommentValue] = useState("");
  const onChangeComment = (e) => {
    setCommentValue(e.target.value);
  };
  return (
    <Wrapper>
      <Header />
      <CommentWrapper>
        <TitleWrapper>
          <Title>댓글</Title>
          <PeomTitle>-맞은편의 행성(99화)</PeomTitle>
        </TitleWrapper>
        <CommentInputWrapper>
          <CommentInput
            placeholder="댓글을 입력하세요."
            value={commentValue}
            onChange={onChangeComment}
            type="text"
          />
          <Registration text={commentValue}>등록</Registration>
        </CommentInputWrapper>
        {CommentDummy.map((e) => (
          <CommentItem key={e.id}>
            <UserImage src={User} alt="profile" />
            <InformationWrapper>
              <UserName>{e.nickname}</UserName>
              <CommentContent>{e.content}</CommentContent>
            </InformationWrapper>
          </CommentItem>
        ))}
        <EndLine />
      </CommentWrapper>
      <BottomNavigate />
    </Wrapper>
  );
};

export default Comment;

const EndLine = styled.hr`
  width: 1050px;
  border: 1px solid ${({ theme }) => theme.color.gray02};
  background: ${({ theme }) => theme.color.white};
  margin-bottom: 70px;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
`;

const InformationWrapper = styled.div`
  width: 760px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CommentContent = styled.span`
  font-family: ${({ theme }) => theme.font.noto};
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: ${({ theme }) => theme.color.black};
`;

const UserName = styled.span`
  font-family: ${({ theme }) => theme.font.noto};
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
  color: ${({ theme }) => theme.color.black};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Registration = styled.span`
  font-family: ${({ theme }) => theme.font.noto};
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: ${({ theme }) => theme.color.gray02};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.color.gray03};
  }
`;

const CommentItem = styled.div`
  width: 1050px;
  display: flex;
  padding: 20px 10px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
`;

const CommentWrapper = styled.div`
  margin-top: 15%;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const CommentInputWrapper = styled.div`
  width: 1050px;
  background: ${({ theme }) => theme.color.gray01};
  border-radius: 1000px;
  padding: 13px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const CommentInput = styled.input`
  width: 90%;
  font-size: 24px;
  background: transparent;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray02};
  }
`;

const TitleWrapper = styled.p`
  font-family: ${({ theme }) => theme.font.noto};
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 30px;
`;

const PeomTitle = styled.span`
  font-size: 20px;
  line-height: 29px;
`;

const Title = styled.span`
  font-size: 40px;
  line-height: 58px;
  margin-right: 10px;
`;
