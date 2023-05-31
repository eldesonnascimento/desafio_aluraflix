import React from "react";

function CampoTexto(props) {
  return (
    <>
      <div>
        <input type="text" placeholder={props.placeholder}/>
      </div>
    </>
  );
}
export default CampoTexto;
