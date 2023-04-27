import axios from "axios";

export default function fetcher(url, method, queryString, data, headers) {
  const resp = axios({
    method,
    url: `${url}${queryString ? "?" + queryString : ""}`,
    data,
    headers,
  });
  return resp;
}
