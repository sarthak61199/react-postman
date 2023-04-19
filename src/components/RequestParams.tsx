import { useState } from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import { useCollectionStore } from "../state/store";
import { useUrlStore } from "../state/store";

function RequestParams() {
  const setRequestCollection = useCollectionStore(
    (state) => state.setRequestCollection
  );
  const requestMethod = useUrlStore((state) => state.requestMethod);
  const requestUrl = useUrlStore((state) => state.requestUrl);
  const [tabIndex, setTabIndex] = useState<number>(0);

  function handleTabChange(
    event: React.SyntheticEvent,
    newValue: number
  ): void {
    setTabIndex(newValue);
  }

  function addToCollection() {
    setRequestCollection({ requestMethod, requestUrl });
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
      <Button variant="contained" onClick={addToCollection}>
        Add to Collection
      </Button>
    </Box>
  );
}

export default RequestParams;
