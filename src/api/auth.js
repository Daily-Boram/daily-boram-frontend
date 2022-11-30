import instance from "./axios";

export const auth = (code) => {
  const response = instance.get("/login/oauth2/naver/code", {
    params: {
      code: code,
    },
  });
  return response;
};
