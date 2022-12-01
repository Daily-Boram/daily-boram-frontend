import instance from "./axios";

export const my = async () => {
  const response = await instance.get("/profile/me");
  return response;
};
