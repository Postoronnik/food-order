import React, {useContext, useEffect} from "react";
import CartShadowOverlayStyled from "./CartShadowOverlay.styled";
import CartWindowContext from "../../../contexts/cartWindow-context";

const CartShadowOverlay = ({children}) => {

    const cartWindowContext = useContext(CartWindowContext);

    useEffect(() => {},[cartWindowContext.isOpened])

    if(!cartWindowContext.isOpened){
        return null;
    }

    return (
        <CartShadowOverlayStyled isOpened = {cartWindowContext.isOpened}>
            {children}
        </CartShadowOverlayStyled>
    );
}

export default CartShadowOverlay;