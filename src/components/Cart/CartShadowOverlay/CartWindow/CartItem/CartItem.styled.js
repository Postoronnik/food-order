import styled from "styled-components";
import {ItemStyled} from "../../../../../UI/Item.styled";


export const CartItem = styled(ItemStyled)`
  border-bottom: 2px solid rgb(88,48,39);
  padding-bottom: 1rem;
`;

export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  
  & span{
    font-weight: bold;
    font-size: 25px;
    padding-bottom: 0.3rem;
  }
`;

export const PriceAndAmount = styled.div`
  display: flex;
  flex-direction: row;
  
  & span {
    color: rgb(88,48,39);
    font-size: 18px;
    font-weight: bold;
    margin-right: 20%;
  }
  
  & div {
    font-size: 18px;
    border: 0.7px solid gray;
    border-radius: 7px;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    font-weight: bold;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 12%;
  
  & button {
    height: 40%;
    cursor: pointer;
    border-radius: 7px;
    background-color: transparent;
    text-align: center;
    border: 0.5px solid rgb(88,48,39);
    color: rgb(88,48,39) ;
    padding-right: 1rem;
    padding-left: 1rem;
    font-weight: bold;
  }
  
  & button:hover {
    background-color: rgb(88,48,39);
    color: whitesmoke;
  }
  
`;