import instance from "./axios";

export const auth = async (code) => {
  const response = await instance.get(`/login/oauth2/code/naver`, {
    params: {
      code: code,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
