/* eslint-disable no-console */
import axios from "axios";

let client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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
    return Promise.reject(error.response);
  }
);

export default client;
