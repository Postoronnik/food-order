import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import {v4 as uuid4} from 'uuid';
import {MenuWindowStyled} from "./MenuWindow.styled";


const menuItemList = [
    {
        key : uuid4(),
        name : 'Sushi',
        description : 'Finest fish and veggies',
        price : 100,
    },
    {
        key : uuid4(),
        name : 'Sushi-1',
        description : 'Finest fish and veggies',
        price : 150,
    },
];


const Menu = () => {
  return (
      <MenuWindowStyled>
          {menuItemList.map(menuItem =>
              <MenuItem
                  key = {menuItem.key}
                  itemKey = {menuItem.key}
                  name={menuItem.name}
                  description={menuItem.description}
                  price={menuItem.price}
              />
          )}
      </MenuWindowStyled>
  );
};

export default Menu;

//TODO - add MenuItems