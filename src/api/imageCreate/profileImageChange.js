import axios from "axios";

export const ImageChange = async (file) => {
  const access_token = localStorage.getItem("access_token");
  const formdata = new FormData();
  file.forEach((item) => {
    formdata.append("files", item);
  });
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/image`, {
    formdata,
    headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${access_token}` },
  });
  return response;
};