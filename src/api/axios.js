import axios from "axios";

const instance = axios.create({
  baseURL: "http://43.201.35.31:8080",
});

export default instance;
