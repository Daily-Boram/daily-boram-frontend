import axios from "axios";

export const likeEpisode = (episodeId) => {
  const access_token = localStorage.getItem("access_token");
  axios.post(`${process.env.REACT_APP_BASE_URL}/episode/${episodeId}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
