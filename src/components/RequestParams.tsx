import { useState } from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";

function RequestParams() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  function handleTabChange(
    event: React.SyntheticEvent,
    newValue: number
  ): void {
    setTabIndex(newValue);
  }
  return (
    <Box height={500} overflow="auto">
      <Typography variant="body1">Request Parameters</Typography>
      <Box>
        <Tabs onChange={handleTabChange} value={tabIndex}>
          <Tab label="Query Parameters" value={0} />
          <Tab label="Headers" value={1} />
          <Tab label="JSON" value={2} />
        </Tabs>
      </Box>
      <Button variant="contained">Add to Collection</Button>
    </Box>
  );
}

export default RequestParams;
