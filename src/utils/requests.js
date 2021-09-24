import client from "./client";

export function getCountries() {
  // eslint-disable-next-line no-console
  console.log(process.env.REACT_APP_BASE_URL);
  return client.get("/countries");
}

export function getOperator(payload) {
  return client.post("/operator", payload);
}

export function verifyPayment(payload) {
  return client.post("/verify", payload);
}
