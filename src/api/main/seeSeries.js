import instance from "../axios";

const seeSeries = async (genre, sort) => {
  const response = await instance.get("/", {
    genre: genre,
    sort: sort,
  });
  return response;
};

export default seeSeries;