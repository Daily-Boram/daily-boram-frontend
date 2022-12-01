import instance from "./axios";

export const getList = async (id) => {
  const response = await instance.get(`/episode/${id}`);
  return response;
};
