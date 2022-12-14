import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { BlueCheck, GreyRefresh } from "../../assets/Img";

function PickImage({
  title,
  subTitle,
  type,
  values,
  name,
  setName,
  image,
  setImage,
  onSubmit,
}) {
  const [sendingState, setSendingState] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inputState, setInputState] = useState({
    characterName: "",
    description: "",
  });
  const indexRef = useRef(0);

  const [imageState, setImageState] = useState([
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
    "https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg",
  ]);
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()} type={type}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <div>
        {type !== "imageOnly" && (
          <Text length={inputState.description.length} type={type}>
            {type === "thumbnail" && (
              <textarea
                placeholder="원하는 그림을 글로 묘사해주세요!"
                autoComplete="DoNotAutoComplete"
                maxLength={300}
                onChange={(e) => {
                  let temp = Object.assign({}, inputState);
                  temp.description = e.currentTarget.value;
                  setInputState(temp);
                }}
                value={inputState.description}
              />
            )}
            {type === "character" && (
              <span>
                <input
                  placeholder="등장인물 이름을 정해주세요!"
                  autoComplete="DoNotAutoComplete"
                  onChange={(e) => setName(e.currentTarget.value)}
                  value={name}
                />
                <textarea
                  placeholder="원하는 캐릭터의 모습을 글로 묘사해주세요!"
                  autoComplete="DoNotAutoComplete"
                  onChange={(e) => {
                    let temp = Object.assign({}, inputState);
                    temp.description = e.currentTarget.value;
                    setInputState(temp);
                  }}
                  value={inputState.description}
                />
              </span>
            )}
            <span>{inputState.description.length} / 300</span>
          </Text>
        )}
        <img
          src={
            sendingState === true
              ? "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_large.gif"
              : image
              ? image
              : "https://thumbs.dreamstime.com/b/imitation-transparent-background-seamless-vector-illustration-69028332.jpg"
          }
          alt="thumbnail"
        />
        <Samples selectedIndex={selectedIndex}>
          <div>
            {imageState.length > 0 &&
              imageState.map((v, i) => (
                <strong
                  key={i}
                  onClick={(e) => {
                    if (selectedIndex === i) setSelectedIndex(-1);
                    else setSelectedIndex(i);
                    setImage(e.target.src);
                  }}
                >
                  <img src={v} alt="sample" />
                </strong>
              ))}
          </div>
          <div>
            <span
              onClick={async () => {
                if (sendingState === false) {
                  setSendingState(true);
                  if (type === "thumbnail") {
                    const access_token = localStorage.getItem("access_token");
                    await axios
                      .get(
                        `${process.env.REACT_APP_LOCAL_HOST}/image/thumb`,
                        {
                          params: { content: inputState.description },
                        },
                        {
                          headers: { Authorization: `Bearer ${access_token}` },
                        }
                      )
                      .then((response) => {
                        let temp = [...imageState];
                        temp[indexRef.current++] = response.data;
                        if (indexRef.current > 8) indexRef.current = 0;
                        setSendingState(temp);
                      });
                  } else if (type === "character") {
                    const access_token = localStorage.getItem("access_token");
                    await axios
                      .get(
                        `${process.env.REACT_APP_LOCAL_HOST}/image/character`,
                        {
                          params: { content: inputState.description },
                        },
                        {
                          headers: { Authorization: `Bearer ${access_token}` },
                        }
                      )
                      .then((response) => {
                        let temp = [...imageState];
                        temp[indexRef.current++] = response.data;
                        if (indexRef.current > 8) indexRef.current = 0;
                        setImageState(temp);
                        setSendingState(false);
                      });
                  } else if (type === "imageOnly") {
                    const access_token = localStorage.getItem("access_token");
                    await axios
                      .get(
                        `${process.env.REACT_APP_LOCAL_HOST}/image/thumb`,
                        {
                          params: { content: values },
                        },
                        {
                          headers: { Authorization: `Bearer ${access_token}` },
                        }
                      )
                      .then((response) => {
                        let temp = [...imageState];
                        temp[indexRef.current++] = response.data;
                        if (indexRef.current > 8) indexRef.current = 0;
                        setImageState(temp);
                        setSendingState(false);
                      });
                  }
                }
              }}
            >
              <img src={GreyRefresh} alt="create more thumbnails" />
              새로운 사진 만들기
            </span>
            {type === "character" ? (
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (name && image) {
                    if (onSubmit) onSubmit();
                    setSelectedIndex(-1);
                  } else alert("등장인물에 대한 정보가 부족합니다.");
                }}
              >
                인물 생성
              </button>
            ) : (
              <button
                type="button"
                onClick={() => alert("사진이 선택되었습니다.")}
              >
                사진 선택
              </button>
            )}
          </div>
        </Samples>
      </div>
    </Wrapper>
  );
}

export default PickImage;

const Text = styled.div`
  margin-right: 30px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input,
  textarea,
  span {
    width: 240px;
  }
  > span {
    :last-of-type {
      text-align: right;
      color: ${(props) =>
        props.length < 300
          ? ({ theme }) => theme.color.gray02
          : ({ theme }) => theme.color.error};
    }
    :first-of-type {
      width: 240px;
      display: flex;
      flex-direction: column;
      > input {
        all: unset;
        padding: 10px;
        margin-bottom: 20px;
        height: 40px;
        font-size: 16px;
        white-space: pre-wrap;
        border: 1px solid ${({ theme }) => theme.color.graymain};
        box-sizing: border-box;
        border-radius: 5px;
        ::placeholder {
          color: ${({ theme }) => theme.color.gray02};
        }
      }
      > textarea {
        all: unset;
        padding: 10px;
        height: 310px;
        font-size: 16px;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        border: 1px solid ${({ theme }) => theme.color.graymain};
        box-sizing: border-box;
        border-radius: 5px;
        ::placeholder {
          color: ${({ theme }) => theme.color.gray02};
        }
      }
    }
  }
  > textarea {
    all: unset;
    padding: 10px;
    height: 370px;
    font-size: 16px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border: 1px solid ${({ theme }) => theme.color.graymain};
    box-sizing: border-box;
    border-radius: 5px;
    ::placeholder {
      color: ${({ theme }) => theme.color.gray02};
    }
  }
`;

const Wrapper = styled.form`
  padding-bottom: 10px;
  width: ${(props) => (props.type === "imageOnly" ? "780px" : "1050px")};
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  h1 {
    color: ${({ theme }) => theme.color.gray03};
    font-size: 28px;
  }
  h2 {
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.main};
    font-size: 19px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
  }
  > div {
    display: flex;
    > img {
      margin-right: 30px;
      width: 400px;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
    }
    > div:last-of-type {
      width: 350px;
      height: 400px;
    }
  }
`;

const Samples = styled.div`
  div {
    width: 350px;
    :first-of-type {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 25px;
    }
    :last-of-type {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    strong {
      height: 100px;
      user-select: none;
      cursor: pointer;
      :nth-of-type(${(props) => props.selectedIndex + 1}) {
        ::before {
          background-color: ${({ theme }) => theme.color.main}70;
          background-image: url(${BlueCheck});
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 5px;
          content: "";
          z-index: 1;
        }
      }
      > img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 5px;
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.gray3};
    font-size: 20px;
    cursor: pointer;
    > img {
      margin-right: 10px;
    }
  }
  button {
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
`;
