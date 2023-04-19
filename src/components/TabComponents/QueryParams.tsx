import React from "react";
import { Grid, TextField, IconButton, Button } from "@mui/material";
import { useUrlStore } from "../../state/store";
import { QueryParam } from "../../state/store";
import DeleteIcon from "@mui/icons-material/Delete";

function QueryParams() {
  const queryParam = useUrlStore((state) => state.queryParam);
  const setQueryParam = useUrlStore((state) => state.setQueryParam);

  function handleQueryChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ): void {
    let tempArray = [...queryParam];
    tempArray[index][e.target.name as keyof QueryParam] = e.target.value;
    setQueryParam(tempArray);
  }

  function addField(): void {
    let tempArray = [...queryParam, { queryKey: "", queryValue: "" }];
    setQueryParam(tempArray);
  }

  function deleteField(i: number): void {
    let tempArray = [...queryParam];
    tempArray.splice(i, 1);
    setQueryParam(tempArray);
  }

  return (
    <>
      <Button variant="contained" onClick={addField}>
        Add a Field
      </Button>
      <Grid container alignItems="center">
        {queryParam.map((item, i) => (
          <React.Fragment key={i}>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Query Key"
                autoComplete="off"
                name="queryKey"
                type="text"
                value={item.queryKey}
                onChange={(e) => handleQueryChange(e, i)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label="Query Value"
                autoComplete="off"
                name="queryValue"
                type="text"
                value={item.queryValue}
                onChange={(e) => handleQueryChange(e, i)}
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

export default QueryParams;
