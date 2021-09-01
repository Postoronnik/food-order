import React from "react";
import {MenuItemStyled} from "./MenuItem.styled";
import Description from "./Description/Description";
import Control from "./Control/Control";

const MenuItem = ({name, description, price}) => {
    return (
        <MenuItemStyled>
            <Description
                name={name}
                description={description}
                price={price}
            />
            <Control/>
        </MenuItemStyled>
    );
};

export default MenuItem;