import styled from "styled-components";
import {ItemStyled} from "../../../UI/Item.styled";
import Button from "../../../UI/Button.styled";


export const MenuItem = styled(ItemStyled)`
  border-bottom: 0.5px solid gray;
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  & label {
    font-size: 16px;
    color: black;
    margin-right: 0.3rem;
    font-weight: bolder;
  }
  
  & input {
    border: transparent;
    padding-left: 0.5rem;
    background-color: aliceblue;
  }
`;

export const Control = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  
  & label {
    font-size: 16px;
    color: black;
    font-weight: bold;
  }
  
  & div {
    font-size: 14px;
    font-weight: lighter;
    color: black;
    font-style: italic;
  }
  
  & span {
    font-size: 18px;
    color: rgb(134,62,25);
    margin-bottom: 0.7rem;
  }
`;

export const AddButton= styled(Button)`
    width: 70%;
    margin-left: 30%;
  box-shadow: 0 2px #999;
  

  &:active {
    background-color: rgb(73,23,19);
    box-shadow: 0 1px #666;
    transform: translateY(3px);
  }
`;