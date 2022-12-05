import axios from "axios";

export const profileImage = async () => {
  const access_token = localStorage.getItem("access_token");
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/image/profile`,
    {
      image: "",
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  return response;
};
                                                                     