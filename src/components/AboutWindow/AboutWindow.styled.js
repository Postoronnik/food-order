import styled from "styled-components";
import {WindowStyled} from "../../UI/Window.styled";

export const AboutWindowStyled = styled(WindowStyled)`
  width: 40%;
  background: rgb(43,43,43);
  box-shadow: 10px 10px 10px rgb(28,28,28);
  margin-left: 30%;
  padding: 1rem;


  & h2 {
    color: white;
    text-align: center;
  }

  & div {
    color: wheat;
    font-size: 13px;
    text-align: center;
    font-weight: lighter;
  }
`;