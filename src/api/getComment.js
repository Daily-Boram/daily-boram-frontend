import instance from "./axios";

export const getComment = async (episode_id) => {
  const response = await instance.get(`/${episode_id}`);
  return response;
};
