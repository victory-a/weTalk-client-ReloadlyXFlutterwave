import client from "./client";

export function getCountries() {
  return client.get("/countries");
}

export function getOperator(payload) {
  return client.post("/operator", payload);
}

export function verifyPayment(payload) {
  return client.post("/verify", payload);
}
