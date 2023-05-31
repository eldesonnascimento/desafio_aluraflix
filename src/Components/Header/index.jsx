import React from "react";
import Botao from "../Button";
import styled from "styled-components";
import { Link} from "react-router-dom";
import Logo from "../Logotipo";

const NavContainer = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  gap: 10%;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  padding-top: 16px;
  height: 50px;
 
  a{
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    gap: 9%;
  }
  @media (max-width: 300px) {
    gap: 9%;
  }
  @media (max-width: 600px) {
    gap: 22%;
  }
`;

function Header({children}) {
  return (
    <>
      <nav>
        <NavContainer>
          <div>
            <Logo to="/">AluraFlix</Logo>
          </div>

          <div>
            {children}
          </div>
        </NavContainer>
      </nav>
    </>
  );
}
export default Header;
