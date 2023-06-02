import React from "react";
import styled from "styled-components"
import Logo from "../Logotipo";

const Rodape = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: black;
  border-top: 1.5px solid #2a7ae4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  a{
    text-align: center;
    font-size: 50px;
  }

`;

function Footer(){
  return(
    <>
     <Rodape>
      <Logo>Filmesflix</Logo>
     </Rodape>
    </>
  )
}
export default Footer;