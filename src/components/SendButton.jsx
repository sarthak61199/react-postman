import { Button } from "@mui/material";
import { useUrlStore, useBodyStore } from "../state/store";
import fetcher from "../libs/fetcher";
import js_beautify from "js-beautify";
import { jsBeautifyOptions } from "../constants";
import queryStringMaker from "../libs/queryStringMaker";
import headersMaker from "../libs/headersMaker";

function SendButton() {
  const requestMethod = useUrlStore((state) => state.requestMethod);
  const requestUrl = useUrlStore((state) => state.requestUrl);
  const queryParam = useUrlStore((state) => state.queryParam);
  const body = useUrlStore((state) => state.body);
  const headers = useUrlStore((state) => state.headers);
  const setBodyDisplay = useBodyStore((state) => state.setBodyDisplay);

  async function sendRequest() {
    const tempArrayQuery = [...queryParam];
    const tempArrayHeader = [...headers];
    let queryString = queryStringMaker(tempArrayQuery);
    let headerObject = headersMaker(tempArrayHeader);
    const resp = await fetcher(
      requestUrl,
      requestMethod,
      queryString,
      JSON.parse(body.trim()),
      headerObject
    );
    const beautyJson = js_beautify(
      JSON.stringify(resp.data),
      jsBeautifyOptions
    );
    setBodyDisplay(beautyJson);
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
