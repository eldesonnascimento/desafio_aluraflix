import React from "react";
import {Botao, Logo, Div,} from "../../styles"

function Header(){
  return(
    <>
      <Div>
      <div>
        <Logo>AluraFlix</Logo>
      </div>

      <div>
        <Botao>novo video</Botao>
      </div>
      
      </Div>
    </>
  )
}
export default Header;