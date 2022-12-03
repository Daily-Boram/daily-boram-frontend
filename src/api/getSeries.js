import instance from "./axios";

export const getSeries = async (series_id, size, page) => {
  const response = await instance.get(
    `/series/${series_id}?page=${page}&size=${size}`
  );
  return response;
};
