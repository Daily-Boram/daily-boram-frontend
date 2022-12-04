import axios from "axios";

export const charaterImage = async () => {
  const access_token = localStorage.getItem("access_token");
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/image/character`,
    {
      content: "장발의 초특급 미녀",
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  return response;
};
