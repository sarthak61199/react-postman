import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import RequestListItem from "./RequestListItem";
import { useCollectionStore } from "../state/store";
import fetcher from "../libs/fetcher";
import queryStringMaker from "../libs/queryStringMaker";
import headersMaker from "../libs/headersMaker";

function RequestList() {
  const [respLength, setRespLength] = useState(0);
  const [response, setResponse] = useState([]);
  const requestCollection = useCollectionStore(
    (state) => state.requestCollection
  );

  async function multipleReq() {
    const promises = requestCollection.map((item) => {
      const queryString = queryStringMaker(item.queryParam);
      const headersObject = headersMaker(item.headers);
      const { requestUrl, requestMethod, body } = item;
      return fetcher(
        requestUrl,
        requestMethod,
        queryString,
        body,
        headersObject
      );
    });
    const resp = await Promise.all(promises);
    setResponse(resp);
    setRespLength(resp.length);
  }

  return (
    <Box height={400}>
      <Typography variant="body1">Collections</Typography>
      <Button
        variant="contained"
        disabled={requestCollection.length === 0}
        onClick={multipleReq}
      >
        Execute in Parallel
      </Button>
      <Box
        mt={2}
        height="80%"
        overflow="auto"
        className="request-list-container"
      >
        {requestCollection.length === 0 ? (
          <Typography>No collections to show</Typography>
        ) : (
          requestCollection.map((item, i) => (
            <RequestListItem
              item={item}
              key={i}
              respLength={respLength}
              response={response[i]}
            />
          ))
        )}
      </Box>
    </Box>
  );
}

export default RequestList;
