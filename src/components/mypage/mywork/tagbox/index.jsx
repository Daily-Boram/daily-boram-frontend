import styled from "styled-components";

const FirstCheckLabel = [
  { key: "일상" },
  { key: "개그" },
  { key: "액션" },
  { key: "감성" },
  { key: "순정" },
];

const SecondCheckLabel = [
  { key: "드라마" },    
  { key: "스릴러" },
  { key: "스포츠" },
  { key: "무협/사극" },
];

const TagBox = () => {
  return (
    <CheckBox>
      <Line>
        {FirstCheckLabel.map((check) => (
          <FirstCheckBtn>
            <Check type="checkbox" />
            <Label>{check.key}</Label>
          </FirstCheckBtn>
        ))}
      </Line>
      <Line>
        {SecondCheckLabel.map((check) => (
          <SecondCheckBtn>
            <Check type="checkbox" />
            <Label>{check.key}</Label>
          </SecondCheckBtn>
        ))}
      </Line>
    </CheckBox>
  );
};

const CheckBox = styled.div`
  width: 780px;
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 40px;
  border-top: 1px solid ${({ theme }) => theme.color.gray02};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const Line = styled.div`
  width: 800px;
  display: flex;
`;

const FirstCheckBtn = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 80px;
`;

const SecondCheckBtn = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 58px;
`;

const Check = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 22px;
  font-weight: bold;
`;

export default TagBox;