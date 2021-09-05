import styled from "styled-components";

const CartShadowOverlayStyled = styled.div`
  z-index: 900;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  visibility: ${props => props.isOpened ? 'visible' : 'hidden'};
`;

export default CartShadowOverlayStyled;