import { Box, Typography, Button } from "@mui/material";
import RequestListItem from "./RequestListItem";
import { useCollectionStore } from "../state/store";
import fetcher from "../libs/fetcher";
import queryStringMaker from "../libs/queryStringMaker";

function RequestList() {
  const requestCollection = useCollectionStore(
    (state) => state.requestCollection
  );

  async function multipleReq() {
    const promises = requestCollection.map((item) => {
      const queryString = queryStringMaker(item.queryParam);
      const { requestUrl, requestMethod } = item;
      return fetcher(requestUrl, requestMethod, queryString);
    });
    const resp = await Promise.all(promises);
  }

  return (
    <Box height={500}>
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
            <RequestListItem item={item} key={i} />
          ))
        )}
      </Box>
    </Box>
  );
}

export default RequestList;
