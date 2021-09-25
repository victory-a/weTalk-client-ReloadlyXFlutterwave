import client from "./client";

export function getCountries() {
  return client.get("/countries");
}

export function getOperator(payload) {
  return client.post("/operator", payload);
}

export function verifyPaymentAndTopup(payload) {
  return client.post("/verify", payload);
}
