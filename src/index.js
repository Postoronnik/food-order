import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MenuItemContextProvider} from "./contexts/item-context";
import {CartWindowContextProvider} from "./contexts/cartWindow-context";

ReactDOM.render(
    <CartWindowContextProvider>
        <MenuItemContextProvider>
            <App/>
        </MenuItemContextProvider>
    </CartWindowContextProvider>,
    document.getElementById('root')
);

