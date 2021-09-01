import React from "react";
import {ControlStyled} from "./Control.styled";
import Amount from "./Amount/Amount";
import {MenuAddButtonStyled} from "../../../../UI/Button/Menu/MenuAddButton.styled";

const Control = () => {

    const addProductHandler = (event) => {
        event.preventDefault();
    };

    return (
        <ControlStyled>
            <Amount/>
            <MenuAddButtonStyled onClick={addProductHandler}>+ Add</MenuAddButtonStyled>
        </ControlStyled>
    );
};

//TODO - add listener to button
export default Control;