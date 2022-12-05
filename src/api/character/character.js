import instance from "../axios";

const seeSeries = async (series_id, image, name) => {
  const access_token = localStorage.getItem("access_token");  
  const response = await instance.post(`/${series_id}`, {
    image: image,
    name: name,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return response;
};

export default seeSeries;