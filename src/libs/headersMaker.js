export default function headersMaker(headersArray) {
  let headersObject = {};
  if (headersArray.length !== 0) {
    headersArray.forEach((item) => {
      headersObject[item.headerKey] = item.headerValue;
    });
  }
  return headersObject;
}
