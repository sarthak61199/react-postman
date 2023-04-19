import { Button } from "@mui/material";
import { useUrlStore } from "../state/store";
import fetcher from "../libs/fetcher";

function SendButton() {
  const requestMethod = useUrlStore((state) => state.requestMethod);
  const requestUrl = useUrlStore((state) => state.requestUrl);
  const queryParam = useUrlStore((state) => state.queryParam);

  async function sendRequest() {
    const tempArray = [...queryParam];
    let queryString;
    if (tempArray.length !== 0) {
      queryString = tempArray
        .map((item) => {
          return `${item.queryKey}=${item.queryValue}`;
        })
        .join("&");
    }

    fetcher(requestUrl, requestMethod, queryString);
  }

  return (
    <Button
      variant="contained"
      sx={{ height: "100%", width: "100%" }}
      onClick={sendRequest}
    >
      Send
    </Button>
  );
}

export default SendButton;
