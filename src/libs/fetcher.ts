import axios from "axios";

export default function fetcher(
  url: string,
  method: string,
  queryString?: string
) {
  const resp = axios({
    method: method,
    url: `${url}${queryString ? "?" : ""}${queryString ? queryString : ""}`,
  });
  return resp;
}
