export default function queryStringMaker(queryStringArray) {
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
