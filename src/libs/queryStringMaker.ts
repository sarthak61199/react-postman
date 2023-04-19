import { QueryParam } from "../state/store";

export default function queryStringMaker(queryStringArray: QueryParam[]) {
  let queryString;
  if (queryStringArray.length !== 0) {
    queryString = queryStringArray
      .map((item) => {
        return `${item.queryKey}=${item.queryValue}`;
      })
      .join("&");
  }
  return queryString;
}
