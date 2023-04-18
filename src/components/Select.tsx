import { TextField as MUITextField, MenuItem } from "@mui/material";
import { reqOptions } from "../constants";

function Select() {
  return (
    <MUITextField fullWidth select label="Request Method">
      {reqOptions.map((opt) => (
        <MenuItem key={opt.id}>{opt.option}</MenuItem>
      ))}
    </MUITextField>
  );
}

export default Select;
