import styled from "styled-components";

export const DescriptionStyled = styled.div`
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