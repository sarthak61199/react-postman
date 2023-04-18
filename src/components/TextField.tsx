import { TextField as MUITextField } from "@mui/material";

function TextField() {
  return (
    <MUITextField
      label="URL"
      type="text"
      autoComplete="off"
      name="url"
      fullWidth
      required
    />
  );
}

export default TextField;
