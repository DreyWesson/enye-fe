import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.enye.tech/v1/challenge/records",
});

export default instance;
