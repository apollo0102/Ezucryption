import { handleFetchError } from "./errorHandler";
import Config from "../config";

interface fetchUtilParams {
    url : string;
    body? : BodyInit;
    method : string;
    token? : string;
    image? : Object;
}

export const fetchUtil = (data : fetchUtilParams) => {
  const { url, method = "GET", body = null, token = null, image = false } = data;
  let headers = {};
  if (!image) {
    headers = { "Content-Type": "application/json" };
  }

  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }
  console.log(`${Config.env().API_URL}${url}`)
  return fetch(`${Config.env().API_URL}${url}`, {
    method,
    headers,
    body,
  }).then(handleFetchError as any);
};