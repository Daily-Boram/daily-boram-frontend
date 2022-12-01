import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.201.35.31:8080",
});

instance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");
    access_token &&
      (config.headers = { Authorization: `Bearer ${access_token}` });
    return config;
  },
  (err) => Promise.reject(err)
);

export default instance;
