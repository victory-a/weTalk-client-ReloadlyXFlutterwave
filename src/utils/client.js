/* eslint-disable no-console */
import axios from "axios";
import config from "config";

let client = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

/** Axios interceptors to transform error message for clientFn */
client.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error.response.data);
  }
);

export default client;
