import { useState } from "react";
import styled from "styled-components";
import { BlueCheck, GreyRefresh } from "../../../assets/Img";

function WorkPickImage({
  title,
  subTitle,
  type,
  name,
  image,
  setImage,
  onSubmit,
}) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dummyImages = [
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
    "https://thumbs.dreamstime.com/b/spaceman-wiitch-mission-wireless-internet-spaceman-wiitch-mission-wireless-internet-outer-space-128800693.jpg",
  ];

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        if (name && image) {
          onSubmit();
          setSelectedIndex(-1);
        } else alert("등장인물에 대한 정보가 부족합니다.");
      }}
      type={type}
    >
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <div>
        <img
          src={
            image
              ? image
              : "https://thumbs.dreamstime.com/b/imitation-transparent-background-seamless-vector-illustration-69028332.jpg"
          }
          alt="thumbnail"
        />
        <Samples selectedIndex={selectedIndex}>
          <div>
            {dummyImages.map((v, i) => (
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
            <span>
              <img src={GreyRefresh} alt="create more thumbnails" />
              새로운 표지 만들기
            </span>
              <button>표지 선택</button>    
          </div>
        </Samples>
      </div>
    </Wrapper>
  );
}

export default WorkPickImage;

const Wrapper = styled.form`
  padding-bottom: 10px;

  width: 780px;

  display: flex;
  flex-direction: column;

  margin-bottom: 40px;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};

  h1 {
    color: ${({ theme }) => theme.color.gray03};
    font-size: 28px;
  }

  h2 {
    padding-bottom: 10px;
    margin-bottom: 10px;

    color: ${({ theme }) => theme.color.gray02};
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

    color: ${({ theme }) => theme.color.graymain};
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
