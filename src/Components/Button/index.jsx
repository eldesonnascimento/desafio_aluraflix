import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ContainerBTN = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 60px;
    margin-top: 1rem;
  
`;

const Button = styled(Link)`
  background-color: var(--cor-logo);
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 2px;
  font-size: 13px;
  white-space: nowrap;
  padding:10px;
`;
function Botao({ children }) {
  return (
    <>
      <ContainerBTN>
        <Button>{children}</Button>
      </ContainerBTN>
    </>
  );
}

export default Botao;
