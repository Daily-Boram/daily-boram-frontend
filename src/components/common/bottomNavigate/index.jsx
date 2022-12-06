import styled from "styled-components";
import { useState } from "react";
import { BeforeEpisode, Good, Comment, NextEpisode } from "../../../assets/Img";
import { useParams } from "react-router-dom";

const BottomNavigate = () => {
  const [likes, setLike] = useState({
    like: 0,
    likeState: false,
  });
  const { like, likeState } = likes;
  const onlike = () => {
    if (likeState == false) {
      setLike({
        like: like + 1,
        likeState: true,
      });
    } else {
      setLike({
        like: like - 1,
        likeState: false,
      });
    }
  };
  const id = useParams();

  const nextPage = () => {
    window.location.href = `/seeNovel/${id + 1}`;
  };
  const gotoCommentPage = () => {
    window.location.href = "/comment";
  };
  return (
    <_Wrapper>
      <_OptionWrapper>
        <_IconImage src={BeforeEpisode} alt="before_episode" />
        <_BlankText>이전화</_BlankText>
      </_OptionWrapper>
      <_OptionWrapper>
        <_IconImage
          onClick={gotoCommentPage}
          src={Comment}
          alt="comment_icon"
        />
        <_FocusText>2</_FocusText>
      </_OptionWrapper>
      <_OptionWrapper>
        <_IconImage onClick={onlike} src={Good} alt="before_episode" />
        <_FocusText onClick={onlike}>{like}</_FocusText>
      </_OptionWrapper>
      <_OptionWrapper onClick={nextPage}>
        <_NotFocusText>다음화</_NotFocusText>
        <_IconImage src={NextEpisode} alt="before_episode" />
      </_OptionWrapper>
    </_Wrapper>
  );
};

export default BottomNavigate;

const _BlankText = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.gray02};
`;

const _FocusText = styled.span`
  width: 14px;
  font-family: ${({ theme }) => theme.font.noto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-top: 5px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.main};
`;

const _NotFocusText = styled.span`
  font-family: ${({ theme }) => theme.font.noto};
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.black};
`;

const _Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
`;

const _IconImage = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 10px;
`;

const _OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
