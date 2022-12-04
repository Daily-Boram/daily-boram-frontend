import axios from "axios";

export const coverImage = async () => {
  const access_token = localStorage.getItem("access_token");
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/image/thumb`,
    {
      content: "",
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  return response;
};