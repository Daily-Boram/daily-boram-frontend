import axios from "axios";

export const likeEpisode = async(episodeId) => {
  const access_token = localStorage.getItem("access_token");
  await axios.post(`${process.env.REACT_APP_BASE_URL}/episode/${episodeId}`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
