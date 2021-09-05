import React, {useState} from "react";
import * as Styles from '../CartItem/CartItem.styled';

const CartItem = ({itemKey, name, price, amount, changeTotalPrice}) => {

    const increaseAmountHandler = () => {
        changeTotalPrice(itemKey, 1);
    };

    const decreaseAmountHandler = () => {
        changeTotalPrice(itemKey, -1);
    };

    return (
        <Styles.CartItem>
            <Styles.ItemData>
                <span>{name}</span>
                <Styles.PriceAndAmount>
                    <span>${price}</span>
                    <div>x {amount}</div>
                </Styles.PriceAndAmount>
            </Styles.ItemData>
            <Styles.Buttons>
                <button onClick={decreaseAmountHandler}>-</button>
                <button onClick={increaseAmountHandler}>+</button>
            </Styles.Buttons>
        </Styles.CartItem>
    );
}

export default CartItem;