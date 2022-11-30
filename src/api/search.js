import instance from "./axios";

export const search = async (title) => {
  const response = await instance.get("/search", {
    params: {
      title: title,
    },
  });
  return response;
};
