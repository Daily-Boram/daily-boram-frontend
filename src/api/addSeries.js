import instance from "./axios";

export const addSeries = async (nickname, title, image, summary, genre) => {
  const response = await instance.post("/series", {
    nickname,
    title,
    image,
    summary,
    genre,
  });
  return response;
};
