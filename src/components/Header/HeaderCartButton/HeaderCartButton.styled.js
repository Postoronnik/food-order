import styled, {keyframes} from "styled-components";
import Button from "../../../UI/Button.styled";

const hoverBump = keyframes`
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1.09);
  }

  20% {
    transform: scale(1.10);
  }

  30% {
    transform: scale(1.11);
  }
`;

export const CartButton = styled(Button)`
  font: inherit;
  padding: 0.4rem 2rem;
  display: flex;
  align-items: center;
  background-color: rgb(73,23,19);
  
  &:hover,
  &:active {
    background-color: #2c0d00;
    animation: ${hoverBump} 0.7s linear infinite;
  }
  
  & label{
    font-size: 14px;
    align-items: center;
    justify-content: center;
  }
`;

const bump = keyframes`
  0% {
    transform: scale(1);
  }

  10% {
    transform: scale(1.09);
  }

  20% {
    transform: scale(1.10);
  }

  30% {
    transform: scale(1.11);
  }
`;

export const Counter = styled.div`
  animation: ${bump} 0.7s linear;
  margin-left: 15px;
  padding: 0.2rem 0.4rem 0.4rem 0.4rem;
  background:rgb(151,43,31) ;
  border-radius: 50px;
  
  & label{
    font-size: 15px;
  }
`;