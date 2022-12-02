import axios from "axios";

export const getCoverImage = async () => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/image/thumb`,
    {
      content: "장발의 초특급 미녀",
    }
  );
  return response;
};
