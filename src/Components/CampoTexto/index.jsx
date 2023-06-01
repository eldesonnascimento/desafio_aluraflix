import { TextField } from "@material-ui/core";
import React from "react";

function CampoTexto(props) {
  return (
    <>
    <div>
       <TextField
        id="outlined-basic"
        label={props.label}
        margin="dense"
        variant="outlined"
        fullWidth
        type={props.type}
      />
    </div>
     
    </>
  );
}
export default CampoTexto;
