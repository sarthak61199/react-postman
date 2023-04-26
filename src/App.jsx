import { Suspense, lazy } from "react";
import { CssBaseline, Grid, Container, CircularProgress } from "@mui/material";
import Header from "./components/Header";
import RequestParams from "./components/RequestParams";
import RequestList from "./components/RequestList";
import RequestOptions from "./components/RequestOptions";

const JsonViewer = lazy(() => import("./components/JsonViewer"));

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Grid container>
          <Grid item container xs={12}>
            <RequestOptions />
          </Grid>
          <Grid item xs={4}>
            <RequestList />
          </Grid>
          <Grid item xs={8}>
            <RequestParams />
          </Grid>
          <Grid item xs={12}>
            <Suspense fallback={<CircularProgress />}>
              <JsonViewer />
            </Suspense>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
