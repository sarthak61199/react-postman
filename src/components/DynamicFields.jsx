import React from "react";
import { Grid, TextField, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DynamicFields({
  fields,
  setFields,
  keyName,
  valueName,
  addObj,
  keyLabel,
  valueLabel,
}) {
  function handleQueryChange(e, index) {
    let tempArray = [...fields];
    tempArray[index][e.target.name] = e.target.value;
    setFields(tempArray);
  }

  function addField() {
    let tempArray = [...fields, addObj];
    setFields(tempArray);
  }

  function deleteField(i) {
    let tempArray = [...fields];
    tempArray.splice(i, 1);
    setFields(tempArray);
  }

  return (
    <>
      <Button variant="contained" onClick={addField}>
        Add a Field
      </Button>
      <Grid container alignItems="center">
        {fields.map((item, i) => (
          <React.Fragment key={i}>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label={keyLabel}
                autoComplete="off"
                name={keyName}
                type="text"
                value={item[keyName]}
                onChange={(e) => handleQueryChange(e, i)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label={valueLabel}
                autoComplete="off"
                name={valueName}
                type="text"
                value={item[valueName]}
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

export default DynamicFields;
