import { useState, useEffect } from "react";
import styled from "styled-components";
import { Add } from "../../assets/Img";
import PickImage from "../pickImage";
import character from "../../api/character/character";

function Character({ characterState, setCharacterState, type }) {
  const [characterAddState, setCharacterAddState] = useState(false);
  const [inputState, setInputState] = useState({
    name: "",
    image: "",
  });
  const [characterJson, setCharacterJson] = useState({
    image: "",
    name: "",
  });
  
  return (
    <>
      <Wrapper>
        <h1>등장인물</h1>
        <ul>
          {characterState.map((v, i) => (
            <li key={i}>
              <img src={v.image} alt="character profile" />
              <span>{v.name}</span>
            </li>
          ))}
          <li onClick={() => setCharacterAddState(!characterAddState)}>
            <img src={Add} alt="add character" />
            <span>인물 추가</span>
          </li>
        </ul>
      </Wrapper>

      {characterAddState && (
        <PickImage
          title="등장인물 만들기"
          subTitle="입력하신 정보를 기반으로 AI가 일러스트를 그립니다. 원하는 그림을 선택해 주세요!"
          type={type ? type : "character"}
          name={inputState.name}
          setName={(name) => {
            let temp = Object.assign({}, inputState);
            temp.name = name;
            setInputState(temp);
          }}
          image={inputState.image}
          setImage={(image) => {
            let temp = Object.assign({}, inputState);
            temp.image = image;
            setInputState(temp);
          }}
          onSubmit={() => {
            let temp = structuredClone(characterState);
            temp = [...temp, inputState];
            setCharacterState(temp);
            setInputState({
              name: "",
              image: "",
            });
          }}
        />
      )}
    </>
  );
}

export default Character;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.color.gray03};
    font-size: 28px;
  }

  ul {
    margin-top: 10px;

    width: 1050px;

    display: flex;

    list-style: none;
    overflow-x: auto;

    ::-webkit-scrollbar {
      height: 16px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.graymain};

      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.color.gray01};

      border-radius: 10px;
    }

    li:last-of-type {
      cursor: pointer;

      img {
        transition: transform 0.25s ease;
      }

      :hover img {
        transform: rotate(90deg);
      }
    }
  }

  li {
    margin-right: 20px;

    width: 80px;

    display: flex;
    flex-direction: column;
  }

  img {
    height: 80px;

    object-fit: cover;
    border-radius: 50%;
  }

  span {
    margin-top: 5px;

    color: ${({ theme }) => theme.color.gray02};
    font-size: 16px;
    text-align: center;

    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
