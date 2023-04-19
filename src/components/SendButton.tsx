import { Button } from "@mui/material";
import { useUrlStore } from "../state/store";

function SendButton() {
  const requestMethod = useUrlStore((state) => state.requestMethod);
  const requestUrl = useUrlStore((state) => state.requestUrl);

  function sendRequest() {
    console.log(requestMethod, requestUrl);
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
