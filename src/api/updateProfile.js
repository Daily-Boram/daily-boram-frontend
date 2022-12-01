import instance from "./axios";

export const updateProfileAxios = (nickname, introduce) => {
  const response = instance.patch("/profile", {
    nickname: nickname,
    image: "임시의 값",
    introduce: introduce,
  });
  return response;
};
