import axios from "axios";

export const episodePost = async (
  seriesId,
  novelState,
  characterState,
  scriptState
) => {
  const access_token = localStorage.getItem("access_token");
  await axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/episode/${seriesId}`,
      {
        title: novelState.title,
        cost: novelState.cost,
        image: novelState.image,
        character: characterState,
        content: scriptState,
      },
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      return false;
    });
};
