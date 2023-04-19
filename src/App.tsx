import { CssBaseline, Grid, Container } from "@mui/material";
import Header from "./components/Header";
import RequestParams from "./components/RequestParams";
import RequestList from "./components/RequestList";
import JsonViewer from "./components/JsonViewer";
import RequestOptions from "./components/RequestOptions";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Grid container>
          <Grid item container xs={12}>
            <RequestOptions />
            <Grid item xs={4}>
              <RequestList />
            </Grid>
            <Grid item xs={8}>
              <RequestParams />
            </Grid>
            <Grid item xs={12}>
              <JsonViewer />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
