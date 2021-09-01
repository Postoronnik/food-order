import React from "react";
import * as HeaderStyles from './Header.styled';
import * as ImageStyles from './Image.styled';
import logo from '../../assets/meals.png';
import {HeaderCard} from "../wrapers/HeaderCard.styled";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {
    return (
        <HeaderCard>
            <HeaderStyles.HeaderStyle>
                <label>ReactMeals</label>
                <HeaderCartButton/>
            </HeaderStyles.HeaderStyle>
            <ImageStyles.ImageStyled src={logo} alt={"Logo"}/>
        </HeaderCard>
    )};

export default Header;