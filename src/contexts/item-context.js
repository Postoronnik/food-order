import React, {useReducer} from "react";

const ItemContext = React.createContext([]);

const MenuItemReducer = (state, action) => {
    const stateCopy = state.map(x => ({...x}));

    const sameVal = stateCopy.find(value => value.itemKey === action.itemKey);
    if (sameVal) {
        sameVal.amount += parseInt(action.amount);

        if (sameVal.amount === 0) {
           return state.filter(item => item.itemKey !== action.itemKey);
        }
        return stateCopy;
    }

    return [...stateCopy,action];
};

export const MenuItemContextProvider = ({children}) => {

    const [menuItemState, dispatchMenuItem] = useReducer(MenuItemReducer, []);

    const addItemToCart = (menuItem) => {
        dispatchMenuItem(menuItem);
    };

    return (
        <ItemContext.Provider
            value={{
                addItemToCart,
                items : menuItemState,
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;


