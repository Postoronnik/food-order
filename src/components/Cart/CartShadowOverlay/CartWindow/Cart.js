import React, {useContext, useEffect, useState} from "react";
import * as Styles from "./CartWindow.styled";
import ItemContext from "../../../../contexts/item-context";
import CartItem from "./CartItem/CartItem";
import CartShadowOverlay from "../CartShadowOverlay";
import CartWindowContext from "../../../../contexts/cartWindow-context";

const Cart = () => {
    const itemContext = useContext(ItemContext);
    const cartWindowContext = useContext(CartWindowContext);

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const changeTotalPriceHandler = (itemKey, amount) => {
        itemContext.addItemToCart({
            ...cartItems.find((item) => item.itemKey === itemKey),
            amount
        });
    };

    useEffect(() => {

        setTotalPrice(itemContext.items.length !== 0 ?
            itemContext
                .items
                .map(({amount, price}) => parseFloat(amount) * parseFloat(price))
                .reduce((a,b) => a + b)
            : 0
        );
        setCartItems(itemContext.items);
    }, [itemContext]);

    const closeCartHandler = () => {
        cartWindowContext.closeCartWindow();
    };

    const orderCartHandler = () => {
        if (cartItems.length === 0) {
            return;
        }
        cartWindowContext.closeCartWindow();
    };

    return (
        <CartShadowOverlay>
            <Styles.CartWindow>
                {cartItems.length !== 0 && cartItems.map(value => {
                    return (
                        <CartItem
                            key={value.itemKey}
                            itemKey = {value.itemKey}
                            name={value.name}
                            price={value.price}
                            amount={value.amount}
                            changeTotalPrice = {changeTotalPriceHandler}
                        />
                    )
                })}
                <Styles.TotalAmount>
                    <span>Total Amount</span>
                    <div>${totalPrice}</div>
                </Styles.TotalAmount>
                <Styles.Buttons>
                    <Styles.CloseButton onClick={closeCartHandler}>Close</Styles.CloseButton>
                    <Styles.OrderButton onClick={orderCartHandler}>Order</Styles.OrderButton>
                </Styles.Buttons>
            </Styles.CartWindow>
        </CartShadowOverlay>
    );
};

export default Cart;