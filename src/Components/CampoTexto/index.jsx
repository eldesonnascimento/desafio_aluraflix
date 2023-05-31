import { TextField } from "@material-ui/core";
import React from "react";

function CampoTexto(props) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={props.label}
        margin="dense"
        variant="outlined"
        fullWidth
      />
      <div></div>
    </>
  );
}
export default CampoTexto;
