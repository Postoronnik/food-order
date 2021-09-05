import React from "react";
import * as Styles from './Header.styled';
import logo from '../../assets/meals.png';
import {HeaderCard} from "../wrapers/HeaderCard.styled";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {
    return (
        <HeaderCard>
            <Styles.Header>
                <label>ReactMeals</label>
                <HeaderCartButton/>
            </Styles.Header>
            <Styles.Image src={logo} alt={"Logo"}/>
        </HeaderCard>
    )};

export default Header;