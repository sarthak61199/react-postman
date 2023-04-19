import { Box, Typography, Button } from "@mui/material";
import RequestListItem from "./RequestListItem";
import { useCollectionStore } from "../state/store";

function RequestList() {
  const requestCollection = useCollectionStore(
    (state) => state.requestCollection
  );
  return (
    <Box height={500}>
      <Typography variant="body1">Collections</Typography>
      <Button variant="contained">Execute in Parallel</Button>
      <Box
        mt={2}
        height="80%"
        overflow="auto"
        className="request-list-container"
      >
        {requestCollection.length === 0 ? (
          <Typography>No collections to show</Typography>
        ) : (
          requestCollection.map((item) => <RequestListItem item={item} />)
        )}
      </Box>
    </Box>
  );
}

export default RequestList;
