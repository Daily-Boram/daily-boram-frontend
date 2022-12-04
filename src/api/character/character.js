import instance from "../axios";

const seeSeries = async (series_id, image, name) => {  
  const response = await instance.post(`/${series_id}`, {
    image: image,
    name: name
  });
  return response;
};

export default seeSeries;