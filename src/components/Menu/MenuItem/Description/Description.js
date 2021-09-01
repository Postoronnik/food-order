import React from "react";
import {DescriptionStyled} from "./Description.styled";

const Description = ({name, description, price}) => {
    return (
        <DescriptionStyled>
            <label>
                {name}
            </label>

            <div>
                {description}
            </div>

            <span>
                ${price}
            </span>
        </DescriptionStyled>
    );
};

export default Description;