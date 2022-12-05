import axios from "axios";

export const coverImage = async (content) => {
  const access_token = localStorage.getItem("access_token");
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/image/thumb`,
    {
      content: content,
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  return response;
};
