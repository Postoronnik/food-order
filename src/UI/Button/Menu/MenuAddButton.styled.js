import styled from "styled-components";
import {Button} from "../Button.styled";

export const MenuAddButtonStyled = styled(Button)`
    width: 70%;
    margin-left: 30%;
  box-shadow: 0 2px #999;
  

  &:active {
    background-color: rgb(73,23,19);
    box-shadow: 0 1px #666;
    transform: translateY(3px);
  }
`;