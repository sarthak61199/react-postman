import axios from "axios";

export default async function fetcher(
  url: string,
  method: string,
  queryString?: string
) {
  const resp = await axios({
    method: method,
    url: `${url}${queryString ? "?" : ""}${queryString ? queryString : ""}`,
  });
}
