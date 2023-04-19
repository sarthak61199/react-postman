import axios from "axios";

export default function fetcher(url, method, queryString, body) {
  const resp = axios({
    method: method,
    url: `${url}${queryString ? "?" : ""}${queryString ? queryString : ""}`,
    data: body,
  });
  return resp;
}
