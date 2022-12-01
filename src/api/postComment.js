import instance from "./axios";

export const postComment = async (episode_id) => {
  const response = await instance.post(`/comment/${episode_id}`, {
    content: "dkssud",
  });
  return response;
};
