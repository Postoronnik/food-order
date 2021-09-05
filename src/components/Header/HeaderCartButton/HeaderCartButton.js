import React, {useContext, useEffect, useState} from "react";
import {IconStyled} from "./Icon/Icon.styled";
import * as Styles from './HeaderCartButton.styled'
import ItemContext from "../../../contexts/item-context";
import CartWindowContext from "../../../contexts/cartWindow-context";

const HeaderCartButton = () => {
    const menuItemContext = useContext(ItemContext);
    const cartWindowContext = useContext(CartWindowContext);

    const [itemsAmount, setItemsAmount] = useState(0);

    const openCartWindowHandler = () => {
        cartWindowContext.openCartWindow();
    };

    useEffect(() => {
        if(menuItemContext.items.length === 0) {
            setItemsAmount(0);
            return;
        }
        setItemsAmount(menuItemContext
            .items
            .map(({amount}) => parseInt(amount))
                .reduce((a,b) => a + b)
        );
    },[menuItemContext]);

    return (
        <Styles.CartButton onClick={openCartWindowHandler}>
            <IconStyled/>
            <label>Your Cart</label>
            <Styles.Counter>
                <label>{itemsAmount}</label>
            </Styles.Counter>
        </Styles.CartButton>
    );
}

//TODO - add listener to open Cart window

export default HeaderCartButton;