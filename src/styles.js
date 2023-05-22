import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  margin:0;
  padding:0;
  box-sizing:border-box;
`;

export const Botao = styled.button`
background-color: #ccccc2;
color: red;
border-style:none;
border-radius: 20%;
font-size:150%;
margin-right:7%;

`;
export const Logo = styled.p`
padding-left:20%;
font-size:200%;
color:red;
`;
export const Div = styled.div`
width:100vw;
flex-direction: row;
display:flex;
gap:70%;
align-items: center;
padding: 3% 1%;
background-color:black;
text-align:center;
justify-content:center;

@media (max-width: 768px) {
  gap:40%;
}
@media (max-width: 300px) {
  gap:20%;
}
@media (max-width: 600px) {
  gap:30%;
}
`;