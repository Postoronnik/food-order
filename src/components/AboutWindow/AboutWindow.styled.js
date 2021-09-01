import styled from "styled-components";

export const AboutWindowStyled = styled.div`
  width: 40%;
  background: rgb(43,43,43);
  box-shadow: 10px 10px 10px rgb(28,28,28);
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  margin-left: 30%;
  padding: 5px;
  
  
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