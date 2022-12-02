import { useRef, useState } from "react";
import styled from "styled-components";
import { Add, Delete, Narrator } from "../../assets/Img";

function Script({ characterState, scriptState, setScriptState }) {
  const [scriptAddState, setScriptAddState] = useState(false);
  const [inputState, setInputState] = useState({});

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const sortLines = () => {
    let temp = structuredClone(scriptState);

    const draggedItemContent = temp.splice(dragItem.current, 1)[0];

    temp.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setScriptState(temp);
  };

  return (
    <Wrapper>
      <div>
        <h1>글 내용</h1>
        <button>임시 저장</button>
      </div>

      <Box>
        {scriptState.map((v, i) => (
          <li
            key={i}
            draggable
            onDragStart={(e) => (dragItem.current = i)}
            onDragEnter={(e) => (dragOverItem.current = i)}
            onDragEnd={sortLines}
            onDragOver={(e) => e.preventDefault()}
          >
            <img src={v.image} alt="character profile" />
            <div>
              <strong>{v.name}</strong>
              <p>{v.line}</p>
              <span>
                <img
                  src={Delete}
                  onClick={() => {
                    let temp = structuredClone(scriptState);
                    temp = temp.filter((script) => script.id !== v.id);
                    setScriptState(temp);
                  }}
                />
              </span>
            </div>
          </li>
        ))}
        <li>
          <img
            src={Add}
            alt="add script"
            onClick={() => {
              setScriptAddState(!scriptAddState);
              setInputState({});
            }}
          />

          {scriptAddState &&
            (inputState.name ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  let temp = structuredClone(scriptState);
                  inputState.id = Date.now();
                  temp = [...temp, inputState];
                  setScriptState(temp);
                  setInputState({});
                  setScriptAddState(false);
                }}
              >
                <img src={inputState.image} alt={inputState.name} />
                <strong>{inputState.name}</strong>
                <input
                  onChange={(e) => {
                    let temp = Object.assign({}, inputState);
                    temp.line = e.currentTarget.value;
                    setInputState(temp);
                  }}
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();

                    let temp = structuredClone(scriptState);
                    inputState.id = Date.now();
                    temp = [...temp, inputState];
                    setScriptState(temp);
                    setInputState({});
                    setScriptAddState(false);
                  }}
                >
                  대사 추가
                </button>
              </form>
            ) : (
              <div>
                {characterState.map((v, i) => (
                  <img
                    src={v.image}
                    alt={v.name}
                    onClick={() => {
                      let temp = Object.assign({}, inputState);
                      temp.image = characterState[i].image;
                      temp.name = characterState[i].name;
                      setInputState(temp);
                    }}
                  />
                ))}
                <img
                  src={Narrator}
                  alt="narrator"
                  onClick={() => {
                    let temp = Object.assign({}, inputState);
                    temp.name = "해설자";
                    temp.image = Narrator;

                    setInputState(temp);
                  }}
                />
              </div>
            ))}
        </li>
      </Box>
    </Wrapper>
  );
}

export default Script;

const Wrapper = styled.div`
  width: 1050px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      color: ${({ theme }) => theme.color.gray03};
      font-size: 28px;
    }

    > button {
      background-color: ${({ theme }) => theme.color.main};

      width: 100px;
      height: 40px;

      color: ${({ theme }) => theme.color.white};

      border-radius: 10px;
      transition: background-color 0.25s ease;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.color.c04};
      }
    }
  }
`;

const Box = styled.ul`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 60px;
  margin-top: 10px;

  width: 1050px;
  height: 678px;

  border: 1px solid ${({ theme }) => theme.color.gray02};
  border-radius: 10px;

  list-style: none;
  overflow-y: auto;

  img {
    margin-right: 20px;

    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  > li {
    margin-bottom: 40px;

    display: flex;

    cursor: move;

    :last-of-type {
      margin-bottom: 0;

      cursor: default;

      > img {
        transition: transform 0.25s ease;
        cursor: pointer;

        :hover {
          transform: rotate(90deg);
        }
      }
    }

    > div,
    > form {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 30px;
      padding-right: 30px;

      width: 100%;

      display: flex;
      align-items: center;

      border: 1px solid ${({ theme }) => theme.color.gray02};
      border-radius: 10px;
    }

    > div {
      > strong {
        margin-right: 10px;
      }
      > span {
        margin-left: auto;

        display: flex;
        align-items: center;

        > img {
          margin-right: 0;

          width: 20px;
          height: 20px;

          cursor: pointer;
        }
      }

      > img {
        transition: filter 0.25s ease;
        cursor: pointer;

        :hover {
          filter: brightness(75%);
        }

        :last-of-type {
          margin-right: 0;
        }
      }
    }

    > form {
      > strong,
      > input,
      > button {
        margin-right: 20px;
      }

      > strong {
        word-break: keep-all;
      }

      > input {
        padding: 10px;

        width: 100%;

        border: 1px solid ${({ theme }) => theme.color.gray02};
        border-radius: 10px;
      }

      > button {
        background-color: ${({ theme }) => theme.color.main};

        padding-top: 10px;
        padding-bottom: 10px;
        margin-right: 0;

        width: 100px;

        color: ${({ theme }) => theme.color.white};

        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
`;
