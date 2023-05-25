import React from "react";
import Botao from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Logotipo";

const NavContainer = styled.div`
  width: 100vw;
  flex-direction: row;
  display: flex;
  gap: 70%;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 32px;
  gap: 70%;

  @media (max-width: 768px) {
    gap: 40%;
  }
  @media (max-width: 300px) {
    gap: 20%;
  }
  @media (max-width: 600px) {
    gap: 10%;
  }
`;

function Header() {
  return (
    <>
      <nav>
        <NavContainer>
          <div>
            <Logo to="/">AluraFlix</Logo>
          </div>

          <div>
            <Botao to="/novovideo">novo video</Botao>
          </div>
        </NavContainer>
      </nav>
    </>
  );
}
export default Header;
