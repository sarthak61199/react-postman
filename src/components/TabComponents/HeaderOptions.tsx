import React from "react";
import { Grid, TextField, IconButton, Button } from "@mui/material";
import { useUrlStore } from "../../state/store";
import { Headers } from "../../state/store";
import DeleteIcon from "@mui/icons-material/Delete";

function HeaderOptions() {
  const headers = useUrlStore((state) => state.headers);
  const setHeaders = useUrlStore((state) => state.setHeaders);

  function handleHeadersChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ): void {
    let tempArray = [...headers];
    tempArray[index][e.target.name as keyof Headers] = e.target.value;
    setHeaders(tempArray);
  }

  function addField(): void {
    let tempArray = [...headers, { headerKey: "", headerValue: "" }];
    setHeaders(tempArray);
  }

  function deleteField(i: number): void {
    let tempArray = [...headers];
    tempArray.splice(i, 1);
    setHeaders(tempArray);
  }

  return (
    <>
      <Button variant="contained" onClick={addField}>
        Add a Field
      </Button>
      <Grid container alignItems="center">
        {headers.map((item, i) => (
          <React.Fragment key={i}>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Header Key"
                autoComplete="off"
                name="headerKey"
                type="text"
                value={item.headerKey}
                onChange={(e) => handleHeadersChange(e, i)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Header Value"
                autoComplete="off"
                name="headerValue"
                type="text"
                value={item.headerValue}
                onChange={(e) => handleHeadersChange(e, i)}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={() => deleteField(i)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}

export default HeaderOptions;
