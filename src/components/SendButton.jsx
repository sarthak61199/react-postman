import { Button } from "@mui/material";
import { useUrlStore } from "../state/store";
import fetcher from "../libs/fetcher";
import queryStringMaker from "../libs/queryStringMaker";

function SendButton() {
  const requestMethod = useUrlStore((state) => state.requestMethod);
  const requestUrl = useUrlStore((state) => state.requestUrl);
  const queryParam = useUrlStore((state) => state.queryParam);

  async function sendRequest() {
    const tempArray = [...queryParam];
    let queryString = queryStringMaker(tempArray);
    const resp = await fetcher(requestUrl, requestMethod, queryString);
  }

  return (
    <Button
      variant="contained"
      sx={{ height: "100%", width: "100%" }}
      onClick={sendRequest}
      disabled={!Boolean(requestUrl)}
    >
      Send
    </Button>
  );
}

export default SendButton;
