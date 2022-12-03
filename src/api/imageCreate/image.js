import axios from "axios";

export const Image = async (file) => {
  const formdata = new FormData();
  file.forEach((item) => {
    formdata.append("files", item);
  });
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/image`, {
    formdata,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};