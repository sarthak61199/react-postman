import { Box, Typography, Button } from "@mui/material";
import RequestListItem from "./RequestListItem";

function RequestList() {
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
        <RequestListItem />
        <RequestListItem />
        <RequestListItem />
        <RequestListItem />
        <RequestListItem />
        <RequestListItem />
        <RequestListItem />
      </Box>
    </Box>
  );
}

export default RequestList;
