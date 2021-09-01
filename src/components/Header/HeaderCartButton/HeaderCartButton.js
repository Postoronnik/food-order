import React from "react";
import HeaderCartButtonStyled from "../../../UI/Button/Header/HeaderCartButton.styled";
import {IconStyled} from "./Icon/Icon.styled";
import Counter from "./Counter/Counter";

const HeaderCartButton = () => {
    return (
        <HeaderCartButtonStyled>
            <IconStyled/>
            <label>Your Cart</label>
            <Counter/>
        </HeaderCartButtonStyled>
    );
}

//TODO - add listener to open Cart window

export default HeaderCartButton;