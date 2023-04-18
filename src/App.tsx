import { CssBaseline, Grid, Container, Button } from "@mui/material";
import Header from "./components/Header";
import TextField from "./components/TextField";
import Select from "./components/Select";
import RequestParams from "./components/RequestParams";
import RequestList from "./components/RequestList";
import JsonViewer from "./components/JsonViewer";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item xs={3}>
              <Select />
            </Grid>
            <Grid item xs={8}>
              <TextField />
            </Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                sx={{ height: "100%", width: "100%" }}
              >
                Send
              </Button>
            </Grid>
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
