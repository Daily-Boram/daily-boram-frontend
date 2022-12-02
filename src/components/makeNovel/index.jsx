import { useEffect, useState } from "react";
import styled from "styled-components";
import { episodePost } from "../../api/episodePost";
import Character from "../character";
import Header from "../common/header";
import PickImage from "../pickImage";
import Script from "../_script";
import { Narrator } from '../../assets/Img'; 
import { getCoverImage } from "../../api/coverImage";

function MakeNovel() {
  const [characterState, setCharacterState] = useState([]);
  const [scriptState, setScriptState] = useState([]);
  const [novelState, setNovelState] = useState({
    title: "",
    cost: 0,
    image: "",
  });

  useEffect(() => {
    const rangeInputs = document.querySelectorAll('input[type="range"]');

    function handleInputChange(e) {
      const target = e.target;

      const min = target.min;
      const max = target.max;
      const val = target.value;

      target.style.backgroundSize =
        ((val - min + 60) * 90) / (max - min) + "% 100%";
    }
    rangeInputs.forEach((input) => {
      input.addEventListener("input", handleInputChange);
    });
    const a = getCoverImage()
      .then((res) => res)
      .catch((err) => console.error(err));
  }, []);

  const onSubmit = () => {
    let temp = scriptState;
    temp.map((v) => {
      delete v.id;
    });
    episodePost(1, novelState, characterState, temp);
  };

  return (
    <>
      <Header />
      <Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Input length={novelState.title.length}>
          <label htmlFor="title">회차 제목</label>
          <div>
            <input
              id="title"
              placeholder="회차 제목을 입력하여 주세요."
              maxLength={30}
              onChange={(e) => {
                let temp = Object.assign({}, novelState);
                temp.title = e.currentTarget.value;
                setNovelState(temp);
              }}
              value={novelState.title}
            />
            <span>{novelState.title.length} / 30</span>
          </div>
        </Input>

        <Range>
          <label htmlFor="cost">가격</label>
          <div>
            <input
              id="cost"
              type="range"
              min="100"
              max="1100"
              step="100"
              onChange={(e) => {
                let temp = Object.assign({}, novelState);
                temp.cost = e.currentTarget.value - 100;
                setNovelState(temp);
              }}
              value={novelState.cost + 100}
            />
            <ul>
              <li>무료</li>
              <li>100 글자</li>
              <li>200 글자</li>
              <li>300 글자</li>
              <li>400 글자</li>
              <li>500 글자</li>
              <li>600 글자</li>
              <li>700 글자</li>
              <li>800 글자</li>
              <li>900 글자</li>
              <li>1000 글자</li>
            </ul>
          </div>
        </Range>

        <PickImage
          title="회차 썸네일"
          subTitle="입력하신 정보를 기반으로 A.I.가 일러스트를 그립니다. 원하는 그림을
        선택해주세요!"
          type="thumbnail"
          image={novelState.image}
          setImage={(image) => {
            let temp = Object.assign({}, novelState);
            temp.image = image;
            setNovelState(temp);
          }}
        />

        <Character
          characterState={characterState}
          setCharacterState={setCharacterState}
        />

        <Script
          characterState={characterState}
          scriptState={scriptState}
          setScriptState={setScriptState}
        />

        <button>등록하기</button>
      </Wrapper>
    </>
  );
}

export default MakeNovel;

const Wrapper = styled.form`
  padding-top: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div,
  > form,
  > button {
    margin-top: 40px;
  }

  > div {
    :first-of-type {
      margin-top: 0;
    }
  }

  > button {
    background-color: ${({ theme }) => theme.color.main};

    width: 1050px;
    height: 56px;

    color: ${({ theme }) => theme.color.white};
    font-size: 24px;

    border-radius: 10px;
    transition: background-color 0.25s ease;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.color.c04};
    }
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;

    font-size: 28px;
    font-weight: bold;
  }

  input {
    padding-left: 10px;

    width: 1050px;
    height: 56px;

    font-size: 20px;
    font-weight: bold;

    border: 1px solid ${({ theme }) => theme.color.graymain};
    border-radius: 5px;

    ::placeholder {
      color: ${({ theme }) => theme.color.gray02};
      font-size: 20px;
      font-weight: bold;
    }
  }

  span {
    position: absolute;

    transform: translateX(${(props) => (props.length < 10 ? "-65px" : "-76px")})
      translateY(13px);

    width: max-content;

    font-size: 20px;
    font-weight: bold;

    color: ${(props) =>
      props.length < 30
        ? ({ theme }) => theme.color.gray02
        : ({ theme }) => theme.color.error};
  }
`;

const Range = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;

    font-size: 28px;
    font-weight: bold;
  }

  input {
    appearance: none;

    background-image: linear-gradient(
      ${({ theme }) => theme.color.main},
      ${({ theme }) => theme.color.main}
    );
    background-size: 53.5px 100%;
    background-repeat: no-repeat;

    position: relative;

    padding-left: 40px;
    padding-right: 40px;

    width: 1050px;
    height: 6px;

    border: 1px solid ${({ theme }) => theme.color.graymain};
    border-radius: 10px;
    z-index: 1;

    ::-webkit-slider-thumb {
      background: ${({ theme }) => theme.color.c01};

      appearance: none;

      width: 20px;
      height: 20px;

      border-radius: 50%;
      cursor: ew-resize;
    }

    ::-moz-range-thumb {
      background: ${({ theme }) => theme.color.c01};

      appearance: none;

      width: 20px;
      height: 20px;

      border-radius: 50%;
      cursor: ew-resize;
    }

    ::-ms-thumb {
      background: ${({ theme }) => theme.color.c01};

      appearance: none;

      width: 20px;
      height: 20px;

      border-radius: 50%;
      cursor: ew-resize;
    }
  }

  ul {
    margin-top: 10px;

    display: flex;

    color: ${({ theme }) => theme.color.gray02};
    font-family: ${({ theme }) => theme.font.noto};
    font-weight: bold;

    list-style: none;
    user-select: none;
  }

  li {
    ::before {
      position: absolute;

      transform: translateX(-2px) translateY(-30.5px);

      width: 93.5px;
      height: 20px;

      display: flex;
      justify-content: center;

      color: ${({ theme }) => theme.color.graymain};

      content: "|";
      z-index: 0;
    }

    width: 100%;

    text-align: center;
  }
`;
