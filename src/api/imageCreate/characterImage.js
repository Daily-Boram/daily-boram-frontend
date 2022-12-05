import axios from "axios";

export const characterImage = async (content) => {
  const access_token = localStorage.getItem("access_token");
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/image/character`,
    {
      content: content,
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  return response;
};
