import { Box, Typography, Button } from "@mui/material";
import js_beautify from "js-beautify";
import { jsBeautifyOptions } from "../constants";
import { useBodyStore } from "../state/store";

function RequestListItem({ item, respLength, response }) {
  const setBodyDisplay = useBodyStore((state) => state.setBodyDisplay);
  function setJsonBody() {
    const beautyJson = js_beautify(
      JSON.stringify(response.data),
      jsBeautifyOptions
    );
    setBodyDisplay(beautyJson);
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      whiteSpace="nowrap"
      overflow="auto"
      pb={2}
      mb={2}
    >
      <Typography>URL: {item.requestUrl}</Typography>
      <Box
        borderRadius={5}
        border="1px solid black"
        alignSelf="flex-start"
        px={2}
      >
        <Typography component="span" variant="caption">
          METHOD: {item.requestMethod}
        </Typography>
      </Box>
      {respLength ? (
        <Button
          variant="contained"
          sx={{ alignSelf: "flex-start" }}
          onClick={setJsonBody}
        >
          View Response
        </Button>
      ) : null}
    </Box>
  );
}

export default RequestListItem;
