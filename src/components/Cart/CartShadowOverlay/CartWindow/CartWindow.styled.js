import styled from "styled-components";
import {WindowStyled} from "../../../../UI/Window.styled";
import Button from "../../../../UI/Button.styled";


export const CartWindow = styled(WindowStyled)`
  z-index: 1000;
  width: 45%;
  opacity: initial;
  margin-left: 27.5%;
  background: aliceblue;
  position: fixed;
  top: 30%;
`;

export const TotalAmount = styled.div`   
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.7rem 0.7rem 0rem 0.7rem;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Buttons = styled.div`   
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0.7rem 0.7rem 0rem 0.7rem;
  font-weight: bold;
`;

export const CloseButton = styled(Button)`
  font-weight: lighter;
  font-size: 15px;
  width: 10%;
  background-color: transparent;
  border: 0.5px solid rgb(88,48,39);
  color: rgb(88,48,39) ;
  margin-right: 2%;
  
  &:hover {
    background-color: rgb(64,21,8);
    color: white;
  }
`;

export const OrderButton = styled(Button)`
  font-weight: lighter;
  font-size: 15px;
  width: 10%;

  &:hover {
    background-color: rgb(64,21,8);
  }
`;