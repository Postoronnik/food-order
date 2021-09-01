import React from "react";
import {MenuStyled} from "./Menu.styled";
import MenuItem from "./MenuItem/MenuItem";
import {v4 as uuid4} from 'uuid';

const menuItemList = [
    {
        key : uuid4(),
        name : 'Sushi',
        description : 'Finest fish and veggies',
        price : 100,
    },
    {
        key : uuid4(),
        name : 'Sushi',
        description : 'Finest fish and veggies',
        price : 100,
    },
];
console.log(menuItemList.map(menuItem => menuItem.key));


const Menu = () => {
  return (
      <MenuStyled>
          {menuItemList.map(menuItem =>
              <MenuItem
                  key = {menuItem.key}
                  name={menuItem.name}
                  description={menuItem.description}
                  price={menuItem.price}
              />
          )}
      </MenuStyled>
  );
};

export default Menu;

//TODO - add MenuItems