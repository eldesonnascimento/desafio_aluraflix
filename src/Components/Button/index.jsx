import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  background-color: var(--cor-logo);
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 2px;
  font-size: 13px;
  white-space: nowrap;
  padding:10px;
  margin-bottom: 14px;
`;
function Botao(props) {
  return (
    <>
     
        <Button to={props.to}>{props.children}</Button>
     
    </>
  );
}

export default Botao;
