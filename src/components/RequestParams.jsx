import { useState, Suspense, lazy } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  CircularProgress,
} from "@mui/material";
import { useCollectionStore } from "../state/store";
import { useUrlStore } from "../state/store";
import QueryTab from "./TabComponents/QueryTab";

const HeaderTab = lazy(() => import("./TabComponents/HeaderTab"));
const BodyTab = lazy(() => import("./TabComponents/BodyTab"));

function TabPanel(props) {
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
  const stringBody = useUrlStore((state) => state.body);
  const [tabIndex, setTabIndex] = useState(0);

  function handleTabChange(event, newValue) {
    setTabIndex(newValue);
  }

  function addToCollection() {
    const body = JSON.parse(stringBody);
    setRequestCollection({
      requestMethod,
      requestUrl,
      queryParam,
      headers,
      body,
    });
  }

  return (
    <Box height={400} overflow="auto">
      <Typography variant="body1">Request Parameters</Typography>
      <Box>
        <Tabs onChange={handleTabChange} value={tabIndex}>
          <Tab label="Query Parameters" value={0} />
          <Tab label="Headers" value={1} />
          <Tab label="JSON" value={2} />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <QueryTab />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Suspense fallback={<CircularProgress />}>
          <HeaderTab />
        </Suspense>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <Suspense fallback={<CircularProgress />}>
          <BodyTab />
        </Suspense>
      </TabPanel>
      <Button
        variant="contained"
        onClick={addToCollection}
        disabled={!Boolean(requestUrl)}
      >
        Add to Collection
      </Button>
    </Box>
  );
}

export default RequestParams;
