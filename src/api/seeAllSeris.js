import instance from "./axios";

export const seeAllSeries = async (genre, sort) => {
  const response = await instance.get("/main", {
    genre,
    sort,
  });
  return response;
};
