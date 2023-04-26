import { Grid, TextField, MenuItem, Typography } from "@mui/material";
import SendButton from "./SendButton";
import { reqOptions } from "../constants";
import { useUrlStore } from "../state/store";

function RequestOptions() {
  const requestMethod = useUrlStore((state) => state.requestMethod);
  const requestUrl = useUrlStore((state) => state.requestUrl);
  const setRequestMethod = useUrlStore((state) => state.setRequestMethod);
  const setRequestUrl = useUrlStore((state) => state.setRequestUrl);

  function handleRequestMethodChange(e) {
    setRequestMethod(e.target.value);
  }

  function handleRequestUrlChange(e) {
    setRequestUrl(e.target.value);
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1">Request Options</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          select
          label="Request Method"
          value={requestMethod}
          onChange={handleRequestMethodChange}
        >
          {reqOptions.map((opt) => (
            <MenuItem key={opt.id} value={opt.option}>
              {opt.option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={8}>
        <TextField
          label="URL"
          type="text"
          autoComplete="off"
          name="url"
          fullWidth
          value={requestUrl}
          onChange={handleRequestUrlChange}
        />
      </Grid>
      <Grid item xs={1}>
        <SendButton />
      </Grid>
    </>
  );
}

export default RequestOptions;
