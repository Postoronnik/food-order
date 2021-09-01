import styled from "styled-components";

export const AmountStyled = styled.div`
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