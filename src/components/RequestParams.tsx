import { useState } from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import QueryParams from "./TabComponents/QueryParams";
import { useCollectionStore } from "../state/store";
import { useUrlStore } from "../state/store";
import HeaderOptions from "./TabComponents/HeaderOptions";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function RequestParams() {
  const setRequestCollection = useCollectionStore(
    (state) => state.setRequestCollection
  );
  const requestMethod = useUrlStore((state) => state.requestMethod);
  const requestUrl = useUrlStore((state) => state.requestUrl);
  const queryParam = useUrlStore((state) => state.queryParam);
  const headers = useUrlStore((state) => state.headers);
  const [tabIndex, setTabIndex] = useState<number>(0);

  function handleTabChange(
    event: React.SyntheticEvent,
    newValue: number
  ): void {
    setTabIndex(newValue);
  }

  function addToCollection() {
    setRequestCollection({ requestMethod, requestUrl, queryParam, headers });
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
      <TabPanel value={tabIndex} index={0}>
        <QueryParams />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <HeaderOptions />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Item Three
      </TabPanel>
      <Button variant="contained" onClick={addToCollection}>
        Add to Collection
      </Button>
    </Box>
  );
}

export default RequestParams;
