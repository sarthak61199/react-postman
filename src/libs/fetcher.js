import axios from "axios";

export default function fetcher(url, method, queryString) {
  const resp = axios({
    method: method,
    url: `${url}${queryString ? "?" : ""}${queryString ? queryString : ""}`,
  });
  return resp;
}
