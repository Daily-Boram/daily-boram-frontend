import React from "react";
import styled from "styled-components";
import BottomNavigate from "../common/bottomNavigate";
import Header from "../common/header";
import {
  Spacephoto4,
  AngleBracket,
  Character1,
  Character2,
} from "../../assets/Img";

function SeeNovel() {
  return (
    <>
      <Header />
      <MainContainer>
        <Wrapper>
          <NovelInfoContainer>
            <img src={Spacephoto4} />
            <NovelInfo>
              <NovelPart>01</NovelPart>
              <NovelTitle>맞은편의 행성</NovelTitle>
              <GoHome>
                작품 홈 가기 <Anglebracket src={AngleBracket}></Anglebracket>
              </GoHome>
            </NovelInfo>
          </NovelInfoContainer>
          <Line></Line>

          <ScriptContainer>
            <ScriptWrapper>
              <Character>
                <img src={Character1} />
                <CharacterScript>Yo what's up</CharacterScript>
              </Character>
              <CharacterName>공주영</CharacterName>
            </ScriptWrapper>

            <Narration>Your mom is bitch</Narration>

            <ScriptWrapper>
              <Character>
                <img src={Character2} />
                <CharacterScript>smash my ass 🍑</CharacterScript>
              </Character>
              <CharacterName>왕자림</CharacterName>
            </ScriptWrapper>
          </ScriptContainer>
        </Wrapper>
      </MainContainer>
      <BottomNavigate />
    </>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 150px;
  width: 70vw;
  flex-direction: column;
`;

const NovelInfoContainer = styled.div`
  width: 281px;
  display: flex;
`;

const NovelInfo = styled.div`
  width: 200px;
  flex-direction: column;
  display: flex;
  gap: 5%;
  padding-left: 15px;
`;

const NovelPart = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.color.main};
  font-weight: bold;
`;

const NovelTitle = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.color.gray02};
  font-weight: bold;
`;

const GoHome = styled.div`
  width: 77px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.main};
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.c04};
  }
`;

const Anglebracket = styled.img`
  margin-left: 5px;
  margin-bottom: 1px;
`;

const Line = styled.hr`
  margin: 15px 0px 25px 0px;
  border: solid ${({ theme }) => theme.color.gray02};
`;

const ScriptContainer = styled.div`
  width: 100%;
  flex-direction: column;
`;

const ScriptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const CharacterScript = styled.p`
  margin-left: 25px;
  font-size: 20px;
  font-weight: bold;
`;

const CharacterName = styled.p`
  color: ${({ theme }) => theme.color.gray02};
  margin-left: 8px;
`;

const Character = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Narration = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray03};
  margin: 48px 0px 48px 85px;
`;

export default SeeNovel;
