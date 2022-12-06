import axios from "axios";

export const likeSeries = async(seriesId) => {
  const access_token = localStorage.getItem("access_token");
  await axios.post(`${process.env.REACT_APP_BASE_URL}/episode/${seriesId}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
