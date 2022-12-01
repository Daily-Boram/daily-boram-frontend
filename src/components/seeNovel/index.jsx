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

const Script = ({ dummyScript }) => {
  return (
    <ScriptWrapper>
      {dummyScript.name == "나래이션" ? (
        <Narration>{dummyScript.script}</Narration>
      ) : (
        <Character>
          <img src={dummyScript.name == "공주영" ? Character1 : Character2} />
          <CharacterScript>{dummyScript.script}</CharacterScript>
        </Character>
      )}

      <CharacterName>
        {dummyScript.name == "나래이션" ? "" : dummyScript.name}
      </CharacterName>
    </ScriptWrapper>
  );
};

function SeeNovel() {
  const dummyScript = [
    {
      name: "공주영",
      script:
        "“ 왕자림 나쁜년 니가 그러고도 사람이야?? 어떻게 나한테 그럴수가 있는데? ”",
    },
    {
      name: "나래이션",
      script: `관계를 정리 후 난 내 상황부터 돌아보기 시작했다. 내가 얼마나 해놓은게 없는지만 알게 됐다.${"\n"}난 정말 쉴 틈 없이 노려해야만 했다. 2학년 마지막 날 넌 다시 나를 찾아 왔다.`,
    },
    {
      name: "왕자림",
      script: "“ 나는 너랑 끝내기 싫어 너 없이 못 지내 난.. ”",
    },
    {
      name: "나래이션",
      script: "아니. 나 없이 지낼 수 있어 너. 그리고  나도 그게 필요해..",
    },
    {
      name: "공주영",
      script:
        "“ 미안. 나는 너랑 만날 생각 없어. 넌 나랑 끝내기 싫은 게 아니라 그냥 못 끝내는거야.. 정 때문에 그래..” ",
    },
    {
      name: "나래이션",
      script:
        "애초에 우리는 너의 동정심으로 만나게 된 거니까.. 너처럼 예쁘고 멋진 사람이 나 같은 놈을 왜 만나 줬겠어",
    },
    {
      name: "공주영",
      script: "“너 맘 약하잖아 불쌍한 거 못 지나치고...”",
    },
    {
      name: "나래이션",
      script: "양민지를 한 번에 놓지 못한 것처럼.",
    },
  ];
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
            {dummyScript.map((script) => (
              <Script dummyScript={script} />
            ))}
          </ScriptContainer>
        </Wrapper>
      </MainContainer>
      <BottomNavigate />
    </>
  );
}

const MainContainer = styled.div`
  width: 100vw;
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
  margin: 15px 0px 40px 0px;
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
