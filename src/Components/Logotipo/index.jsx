import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Logotipo = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: var(--cor-logo);
  margin-left: 15px;
  text-decoration: none;
  cursor: pointer;
`;

function Logo({children}){
  return(
    <Logotipo to="/">{children}</Logotipo>
  )
}
export default Logo;