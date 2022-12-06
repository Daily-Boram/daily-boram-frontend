import instance from "./axios";

export const updateProfileAxios = async(nickname, introduce) => {
  const response = await instance.patch("/profile", {
    nickname: nickname,
    image: "임시의 값",
    introduce: introduce,
  });
  return response;
};
